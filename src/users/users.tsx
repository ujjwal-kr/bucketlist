import React from 'react';
import { UserService } from '../services/user';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {
    history: any
}
interface State {
    users: User[];
}

export interface User {
    username: string;
    id: string;
}

class UsersComponent extends React.Component<Props, State> {
    state: State = {
        users: []
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
                {this.state.users.map((i, d) => <ListConstructor link={'/users/' + i.username} name={i.username} />)}
            </div>
        )
    }
}

interface ListProps {
    name: string;
    link: string;
}

interface ListState {
}

class ListConstructor extends React.Component<ListProps, ListState> {
    render() {
        return (
            <List>
                <Link to={this.props.link} style={{textDecoration: 'none'}}>
                    <ListItem button style={{ padding: 5 + '%' }}>
                        {this.props.name}
                    </ListItem>
                </Link>
            </List>
        )
    }
}

export default UsersComponent;