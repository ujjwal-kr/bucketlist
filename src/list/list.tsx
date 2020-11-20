import React from 'react';
import { ListService } from '../services/list';
import {Username, Description, Text} from '../Components/list';
import { Button } from '@material-ui/core';

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
    
    constructor(props: Props) {
        super(props);
        this.delete = this.delete.bind(this)
    }

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
            this.props.history.push('/users/'+this.state.list.userid)
        }).catch(e => {
            alert("Something is not right")
        })
    }

    render() {
        return (
            <main style={{padding: 2+'%'}}>
                <Username className="quicktext">{this.state.list.userid}</Username>
                <Text className="quicktext">{this.state.list.text}</Text>
                <Description className="fira" >{this.state.list.description}</Description>
                {this.state.showDelete ? <Button onClick={this.delete} color="secondary" variant="outlined" style={{width: 100+'%'}}>Delete</Button> :null}
            </main>
        )
    }
}

export default ListComponent;