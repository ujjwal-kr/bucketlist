import React from 'react';
import { User } from './users';
import { UserService } from '../services/user';
import { List } from '../list/list';
 
interface Props {
    history: any,
    match: {
        params: { id: string }
    }
}

interface State {
    user: User;
    list: List[];
}


class UserId extends React.Component<Props, State> {

    state: State = {
        user: {username:'', id:''},
        list: []
    }

    componentDidMount() {
        if(this.props.match.params) {
            UserService.getUser(this.props.match.params.id).then(res => {
                this.setState({ user: res.data.user, list: res.data.lists })
            }).catch(e => {
                alert('something went wrong')
                this.props.history.push('/')
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.user.username} <br/>
                {this.state.user.id}
                {this.state.list.map((val, k) => <li>{val.description}</li>)}
            </div>
        )
    }
}

export default UserId;