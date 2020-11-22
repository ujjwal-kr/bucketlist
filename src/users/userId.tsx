import React from 'react';
import { User } from './users';
import { UserService } from '../services/user';
import { List } from '../list/list';
import { Link } from 'react-router-dom';
import { Username, Lists, Item } from '../Components/user';
import Loader from '../loader/loader';
import { Button } from '@material-ui/core';

interface Props {
    history: any,
    match: {
        params: { id: string }
    }
}

interface State {
    user: User;
    list: List[];
    loading: boolean;
    task: boolean;
    createButton: boolean;
}


class UserId extends React.Component<Props, State> {

    state: State = {
        user: { username: '', id: '' },
        loading: true,
        list: [],
        task: false,
        createButton: false
    }

    componentDidMount() {
        const username = localStorage.getItem("name")
        if (localStorage.getItem("token")) this.setState({ task: true })
        if (this.props.match.params) {
            UserService.getUser(this.props.match.params.id).then(res => {
                this.setState({ user: res.data.user, list: res.data.lists, loading: false })
                if (this.state.user.username === username) return this.setState({createButton: true})
            }).catch(e => {
                alert('something went wrong')
                this.props.history.push('/')
            })
        }
    }

    render() {
        if (this.state.loading) {
            return <div><br /><Loader /></div>
        }

        return (
            <div>
                <Username className="quicktext">{this.state.user.username}</Username>
                {this.state.task ? <div style={{ textAlign: "center" }}><br />
                  <Link style={{textDecoration: "none"}} to={"/code/"+this.state.user.username}>
                    <Button color="secondary">Tasks</Button>
                    <br/>
                    {this.state.createButton ?
                        <Link to="/create-list">
                            <Button>Create List</Button>
                        </Link>
                    :null}
                  </Link>
                </div> : null}
                <Lists>
                    {this.state.list.map((val, k) => <ListsConstructor text={val.text} link={'/lists/' + val.id} />)}
                </Lists>
            </div>
        )
    }
}

function ListsConstructor({ text, link }: any) {
    return (
        <Item className="fira animate__animated animate__zoomIn animate__faster" ><Link style={{ color: '#333333' }} to={link}>{text}</Link></Item>
    )
}

export default UserId;