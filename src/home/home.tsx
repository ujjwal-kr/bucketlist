import React from 'react';

interface Props {}

interface State {
    count: number;
}


class Home extends React.Component<Props, State> {
    state: State = {
        count: 0
    }

    render() {
        return <div>Meow</div>
    }


}

export default Home;