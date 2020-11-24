import React from 'react';
import { UserService } from '../services/user';
import { User } from '../users/users';
import Loader from '../loader/loader';
import { Username, Text } from '../Components/list';
import { Button, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
}

interface Task {
    text?: string;
    date?: any;
    userid?: string;
}

class Tasks extends React.Component<Props, State>{

    state: State = {
        user: {username: '', id: ''},
        tasks: [],
        loading: true,
    }

    componentDidMount() {
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
            alert('something went wrong')
            this.props.history.push("/users/" +localStorage.getItem("name"))
        })
    }

    render() {
        if(this.state.loading) {
            return (<div><br/><Loader /></div>)
        }

        return (
            <div>
                <Username className="quicktext">{this.state.user.username}</Username>
                <Text className="fira">Tasks</Text>
                <div style={{textAlign: 'center'}}>
                    <Link to="/create-task" style={{textDecoration: 'none'}}>
                        <Button color="secondary">Create Task</Button>
                    </Link>
                </div>

        {this.state.tasks.map((task, i) => <div><Paper elevation={2} className="fira" style={{padding: 2.1+'%', fontSize: 1.1+'em'}}>{task.text}</Paper><br/></div>)}
            </div>
        )
    }
}

export default Tasks;