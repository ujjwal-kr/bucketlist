import React from "react";
import { Brand, BrandText, Main, Overlay, Wrapper } from "../Components/app";
import { Button } from "@material-ui/core";
import { UserService } from "../services/user";
import { Link } from "react-router-dom";

interface Props { }
interface State {
    loggedIn: boolean;
    user: any; // TODO
}

class Home extends React.Component<Props, State> {
    state: State = {
        loggedIn: false,
        user: null,
    };

    async componentDidMount() {
        const token = localStorage.getItem("token");
        if (token) {
            await UserService.check(token).then((data) => {
                this.setState({ loggedIn: true });
            }).catch((e) => {
                localStorage.removeItem("token");
            });
        }
    }

    render() {
        return <Main>
            <Overlay>
                <Wrapper className="animate__animated animate__zoomIn animate__faster">
                    <Brand className="branding">Bucketlist</Brand>
                    <br />
                    {this.state.loggedIn
                        ? <BrandText className="quicktext">
                            Welcome Back !
                          </BrandText>

                        : <BrandText className="quicktext">
                            Welcome, this is in testing stage so you wont be able to register
                            unless you are a tester. You can view the source code here.
                          </BrandText>
                    }
                    <br />
                    {this.state.loggedIn
                        ? <UserButton />
                        : <div><LoginButton /> <RegisterButton /></div>
                    }
                </Wrapper>
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
