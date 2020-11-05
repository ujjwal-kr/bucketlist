import React from "react";
import { Brand, BrandText, Main, Overlay, Wrapper } from "../Components/app";
import { Button } from "@material-ui/core";
import { UserService } from "../services/user";
import { Link } from "react-router-dom";

interface Props {}
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
        const user = localStorage.getItem("user");
        if (token) {
            await UserService.check(token).then((data) => {
                this.setState({ loggedIn: true });
                this.setState({ user: user });
            }).catch((e) => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            });
        }
    }

    render() {
        return <Main>
            <Overlay>
                <Wrapper className="animate__animated animate__zoomIn animate__faster">
                    <Brand className="branding">Bucketlist</Brand>
                    <br />
                    <BrandText className="quicktext">
                        Welcome, this is in testing stage so you wont be able to register
                        unless you are a tester. You can view the source code here.
                    </BrandText>
                    <br />
                    <Link style={{ textDecoration: "none" }} to="/login">
                        <Button variant="contained" color="secondary" size="large">
                            LogIn
                        </Button>
                        <br />
                        <br />
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/signup">
                        <Button variant="contained" color="secondary" size="large">
                            SignUp
                        </Button>
                    </Link>
                </Wrapper>
            </Overlay>
        </Main>;
    }
}

export default Home;
