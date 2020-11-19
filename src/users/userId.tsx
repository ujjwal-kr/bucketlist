import React from 'react';
import { User } from './users';
import { UserService } from '../services/user';
import { List } from '../list/list';
import {Username, Lists, Item} from '../Components/user';
 
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
                <Username className="quicktext">{this.state.user.username}</Username>
                <Lists>
                    {this.state.list.map((val, k) => <ListsConstructor text={val.text} link={val.id} />)}
                </Lists>
            </div>
        )
    }
}

function ListsConstructor({text, link}: any) {
    return (
        <Item className="fira" >{text}</Item>
    )
}

export default UserId;