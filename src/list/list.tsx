import React from 'react';
import { ListService } from '../services/list';

interface Props {
    history: any;
    match: {
        params: {
            id: string;
        }
    }
}

interface State {
    loading: boolean;
    list: List;
    showDelete: boolean;
}

export interface List {
    text?: string;
    description?: string;
    id?: string;
    userid?: string;
}

class ListComponent extends React.Component<Props, State> {
    state: State = {
        loading: true,
        list: {},
        showDelete: false,
    }

    componentDidMount() {
        const id = localStorage.getItem("name")
        ListService.getLItem(this.props.match.params.id).then(res => {
            this.setState({list: res.data, loading: false})
            if(this.state.list.userid === id) {this.setState({showDelete: true})}
        }).catch(e => {
            alert("Something is not right")
            this.props.history.push('/users')
        })
    }

    delete(e: any) {
        e.preventDefault();
        const token = localStorage.getItem("token")!
        ListService.deleteItem(this.props.match.params.id, token).then(res => {
            alert("Deleted")
            this.props.history.push('/users'+this.state.list.userid)
        }).catch(e => {
            alert("Something is not right")
        })
    }

    render() {
        return <h1>{this.state.list.text}</h1>
    }
}

export default ListComponent;