import React from "react";
import { Main, Overlay } from "../Components/app";
import { Heading } from "../Components/auth";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";

import { UserService } from "../services/user";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (values) => {
            UserService.login({ 
                username: values.username, 
                password: values.password 
            }).then(res => {
                console.log(res.data)
                const {token, name} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("name", name)
            }).catch(e => {
                alert("Check Your input")
            })
        },
    });

    return (
        <Main>
            <Overlay>
                <Heading className="stylish animate__animated animate__zoomIn animate__faster">Login</Heading>
                <br />
                <form onSubmit={formik.handleSubmit} style={{ textAlign: 'center' }} className="animate__animated animate__zoomIn animate__faster">
                    <TextField
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        name="username"
                        label="Username"
                        variant="filled"
                        style={{ background: 'white' }}
                        color="secondary"
                    />
                    <br /> <br />
                    <TextField
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        name="password"
                        label="Password"
                        variant="filled"
                        style={{ background: 'white' }}
                        color="secondary"
                        type="password"
                    /> <br /><br />
                    <Button size="large" variant="contained" color="secondary" type="submit">Submit</Button>
                </form>
            </Overlay>
        </Main>
    );
};

export default Login;
