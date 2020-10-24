import React from 'react';
import { Main } from '../Components/app';
import { Heading } from '../Components/auth';

interface Props {}
interface State {}

class Login extends React.Component<Props,State>{
    render() {
        return (
            <Main>
                <Heading className="stylish">Login</Heading>
            </Main>
        )
    }
}

export default Login;