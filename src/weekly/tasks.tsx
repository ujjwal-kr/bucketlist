import React from 'react';
import { UserService } from '../services/user';
import { User } from '../users/users';
import Loader from '../loader/loader';

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
                Tasks
            </div>
        )
    }
}

export default Tasks;