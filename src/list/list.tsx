import React from 'react';

interface Props {}

interface State {}

class ListComponent extends React.Component<Props, State> {
    state: State = {}

    render() {
        return <h1>MEOW</h1>
    }
}

export default ListComponent;