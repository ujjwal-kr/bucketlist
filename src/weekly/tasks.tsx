import React from 'react';
import { UserService } from '../services/user';

interface Props {
    history: any;
    match: {
        params: {
            id: string;
            code: string;
        }
    }
}

interface State {}

class Tasks extends React.Component<Props, State>{

    componentDidMount() {
        const token = localStorage.getItem("token")!
        const code = atob(this.props.match.params.code)!
        const id = this.props.match.params.id!
        if (!token) {
            this.props.history.push("/")
        }
        UserService.getTasks(token, id, code).then(res => {
            console.log(res.data)
        }).catch(e => {
            this.props.history.push("/")
        })
    }

    render() {
        return (
            <div>
                Tasks
            </div>
        )
    }
}

export default Tasks;