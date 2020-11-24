import React from 'react';
import { UserService } from '../services/user';
import { User } from '../users/users';
import Loader from '../loader/loader';
import { Username, Text } from '../Components/list';
import { Button, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TasksService } from '../services/tasks';

interface Props {
    history: any;
    match: {
        params: {
            id: string;
            code: string;
        }
    }
}

interface State {
    user: User;
    tasks: Task[];
    loading: boolean;
    showDelete?: boolean;
}

interface Task {
    id?: string;
    text?: string;
    date?: any;
    userid?: string;
}

class Tasks extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    state: State = {
        user: {username: '', id: ''},
        tasks: [],
        loading: true,
        showDelete: false,
    }

    componentDidMount() {
        this.setState({loading: true})
        const token = localStorage.getItem("token")!
        const code = atob(this.props.match.params.code)!
        const id = this.props.match.params.id!
        if (!token) {
            alert('something went wrong')
            this.props.history.push("/users/" +localStorage.getItem("name"))
        }
        UserService.getTasks(token, id, code).then(res => {
            this.setState({user: res.data.user, tasks: res.data.tasks, loading: false})
        }).catch(e => {
            console.log(e)
            alert('something went wrong!')
            this.props.history.push("/users/" +localStorage.getItem("name"))
        })
    }

    delete(id: any) {
        const token = localStorage.getItem("token")!;
        TasksService.deleteItem(token, id).then(res => {
            return this.componentDidMount()
        }).catch(e => {
            alert("Cannot Delete")
        })
    }

    render() {
        if(this.state.loading) {
            return (<div><br/><Loader /></div>)
        }

        return (
            <div className="animate__animated animate__zoomIn animate__faster" style={{padding: '3%'}}>
                <Username className="quicktext">{this.state.user.username}</Username>
                <Text className="fira">Tasks</Text>
                <div style={{textAlign: 'center'}}>
                    <Link to="/create-task" style={{textDecoration: 'none'}}>
                        <Button color="secondary">Create Task</Button>
                    </Link>
                </div>

        {this.state.tasks.map((task, i) => <div><Paper elevation={2} className="fira" style={{padding:2.1+'%', fontSize: 1.1+'em'}}><p>{task.text}</p></Paper>
            <Button color="secondary" onClick={() => this.delete(task.id)}>Delete</Button>
        <br/></div>)}
            </div>
        )
    }
}

export default Tasks;