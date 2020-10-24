import React from "react";
import { Main, Overlay, BrandText, Wrapper, Brand } from "../Components/app";
import '../fonts.css'
import {Button} from '@material-ui/core';
import { UserService } from "../services/user";


interface Props {}
interface State {
    loggedIn: boolean;
    user: any; // TODO
}

class Home extends React.Component<Props, State> {

    state: State = {
        loggedIn: false,
        user: null
    }

    async componentDidMount() {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")
        if(token){
            await UserService.check(token).then(data => {
                this.setState({ loggedIn: true })
                this.setState({ user: user })
            }).catch(e => {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
            })
        }
    }

    render() {
        return <Main>
            <Overlay>
                <Wrapper>
                    <Brand className="branding">Bucketlist</Brand>
                    <br/>
                    <BrandText className="quicktext">
                        Welcome, this is in testing stage so you wont be able to register unless you are a tester. You can view the source code here.
                    </BrandText>
                    <br/>
                    <Button variant="contained" color="secondary" size="large">LogIn</Button><br/><br/>
                    <Button variant="contained" color="secondary" size="large">SignUp</Button>
                </Wrapper>
            </Overlay>
        </Main>;
    }
}

export default Home;
