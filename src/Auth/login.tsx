import React from "react";
import { Main, Overlay } from "../Components/app";
import { Heading } from "../Components/auth";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
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
                        value={formik.values.email}
                        name="email"
                        label="Email"
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
