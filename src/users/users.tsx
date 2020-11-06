import React from 'react';
import { UserService } from '../services/user';

interface Props {
    history: any
}
interface State {
    users: User[];
}

export interface User {
    username?: string;
    id?: string;
}

class UsersComponent extends React.Component<Props, State> {
    state: State  = {
        users : []
    }

    componentDidMount() {
        const token = localStorage.getItem("token")!
        if (!token) {
            this.props.history.push('/')
        }
        UserService.getAll(token).then(res => {
            this.setState({
                users: res.data
            })
        }).catch(e => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div>
                {this.state.users.map((i, d) => <h1 key={d}>{i.username}</h1>)}
            </div>
        )
    }
}

export default UsersComponent;