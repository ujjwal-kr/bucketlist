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
                <h1 style={{ textAlign:'center' }} className="quicktext">Users</h1>
                {this.state.users.map((i, d) => <div><ListConstructor link={'/users/' + i.username} name={i.username} /></div>)}
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
        <div>
            <List>
                <Link to={this.props.link} style={{textDecoration: 'none'}}>
                    <ListItem className="quicktext" button style={{ padding: 5 + '%' }}>
                        {this.props.name}
                    </ListItem>
                </Link>
            </List>
        </div>
        )
    }
}

export default UsersComponent;