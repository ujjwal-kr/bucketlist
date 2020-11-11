import React, { FunctionComponent, useState } from "react";
import { Main, Overlay } from "../Components/app";
import { Heading } from "../Components/auth";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { Redirect } from 'react-router-dom';

import { UserService } from "../services/user";
import Loader from "../loader/loader";

const Login: FunctionComponent  = () => {
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (values) => {
            setLoading(true)
            UserService.login({ 
                username: values.username, 
                password: values.password 
            }).then(res => {
                const {token, name, id} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("name", name)
                localStorage.setItem("id", id)
                setLoading(false)
                setRedirect(true)
            }).catch(e => {
                alert("Check Your input")
                setLoading(false)
            })
        },
    });

    if (redirect === true) {
        return <Redirect to="/users" />
    }

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
                    <Button disabled={loading} size="large" variant="contained" color="secondary" type="submit">Submit</Button>
                </form>
                <br/>
                {loading ? <Loader /> :null}
            </Overlay>
        </Main>
    );
};

export default Login;
