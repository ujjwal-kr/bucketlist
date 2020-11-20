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
}

export interface List {
    text?: string;
    description?: string;
    id?: string;
}

class ListComponent extends React.Component<Props, State> {
    state: State = {
        loading: true,
        list: {}
    }

    componentDidMount() {
        ListService.getLItem(this.props.match.params.id).then(res => {
            this.setState({list: res.data, loading: false})
        }).catch(e => {
            alert("Something is not right")
            this.props.history.push('/users')
        })
    }

    render() {
        return <h1>MEOW</h1>
    }
}

export default ListComponent;