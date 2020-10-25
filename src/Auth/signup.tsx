import React from 'react';
import { Main, Overlay } from "../Components/app";
import { Heading } from "../Components/auth";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";


const Signup = () => {

    const formik = useFormik({ 
        initialValues: {
            username: "",
            password: "",
            code: ""
        },
        onSubmit: values => {
            console.log(values)
        }
     })

    return (
        <Main>
            <Overlay>
                <Heading className="stylish animate__animated animate__zoomIn animate__faster">SignUp</Heading>
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
                    <TextField
                        onChange={formik.handleChange}
                        value={formik.values.code}
                        name="code"
                        label="Code For Taks"
                        variant="filled"
                        style={{ background: 'white' }}
                        color="secondary"
                    /> <br /><br />
                    <Button size="large" variant="contained" color="secondary" type="submit">Submit</Button>
                </form>
            </Overlay>
        </Main>
    )
}

export default Signup;