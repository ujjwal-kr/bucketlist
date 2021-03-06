import React from "react";
import { Brand, BrandText, Main, Overlay, Wrapper } from "../Components/app";
import { Button } from "@material-ui/core";
import { UserService } from "../services/user";
import { Link } from "react-router-dom";
import Loader from "../loader/loader";

interface Props { }
interface State {
    loggedOut: boolean;
    user: any; // TODO
    loaded: boolean;
}

class Home extends React.Component<Props, State> {
    state: State = {
        loggedOut: true,
        user: null,
        loaded: false,
    };

    async componentDidMount() {
        const token = localStorage.getItem("token");
        if (token) {
            await UserService.check(token).then((data) => {
                this.setState({ loggedOut: false, loaded: true });
            }).catch((e) => {
                localStorage.removeItem("token");
                this.setState({loaded:true})
            });
        } else {
            this.setState({loggedOut: true, loaded: true})
        }
    }

    render() {
        return <Main>
            <Overlay>
                <Wrapper className="animate__animated animate__zoomIn animate__faster">
                    <Brand className="branding">Bucketlist</Brand>
                    <br />
                    {this.state.loggedOut
                        ? <BrandText className="quicktext">
                        Welcome, this is in testing stage so you wont be able to register
                        unless you are a tester. You can view the source code here.
                  </BrandText>

                        : <BrandText className="quicktext">
                        Welcome Back !
                  </BrandText>
                    }
                    <br />
                    {this.state.loggedOut
                        ? <div><LoginButton /> <RegisterButton /></div>
                        : <UserButton />
                    }
                </Wrapper>
                {this.state.loaded ? null :<Loader />}
            </Overlay>
        </Main>;
    }
}

function LoginButton() {
    return <Link style={{ textDecoration: "none" }} to="/login">
        <Button variant="contained" color="secondary" size="large">
            LogIn
    </Button>
        <br />
        <br />
    </Link>
}

function RegisterButton() {
    return <Link style={{ textDecoration: "none" }} to="/signup">
        <Button variant="contained" color="secondary" size="large">
            SignUp
    </Button>
    </Link>
}

function UserButton() {
    return <Link style={{ textDecoration: "none" }} to="/users">
        <Button variant="contained" color="secondary" size="large">
            Users
    </Button>
    </Link>
}

export default Home;
