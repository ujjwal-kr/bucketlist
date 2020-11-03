import React from 'react';
import { UserService } from '../services/user';

interface Props {}
interface State {
    users: User[];
}

interface User {
    username?: string;
    id?: string;
}

class UsersComponent extends React.Component<Props, State> {
    state: State  = {
        users : []
    }

    componentDidMount() {
        UserService.getAll().then(res => {
            console.log(res.data)
            this.setState({
                users: res.data
            })
        }).catch(e => {
            console.log(e)
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