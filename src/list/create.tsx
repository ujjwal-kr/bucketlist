import React, { useEffect, useState } from 'react';
import { Main, Overlay } from '../Components/app';
import { Heading } from '../Components/auth';
import { useFormik } from 'formik';
import { ListService } from '../services/list';
import { TextField, Button } from '@material-ui/core';
import Loader from '../loader/loader';

interface Props {
    history: any;
}

const CreateList = ({history}: Props) => {

    const [token, setToken] = useState("")
    const [id, setID] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token")!
        const id = localStorage.getItem("name")!
        setToken(token)
        setID(id)
    }, [])

    const formik = useFormik({
        initialValues: {
            text: "",
            description: ""
        },
        onSubmit: (values) => {
            setLoading(true)
            ListService.postItem(id,token, values.description, values.text).then(res => {
                setLoading(false)
                history.push("/users")
            }).catch(e => {
                setLoading(false)
                alert("Invalid input or login error")
            })
        }
    })

    return (
        <Main>
            <Overlay>
                <Heading className="stylish animate__animated animate__zoomIn animate__faster">Create List</Heading>
                <br />
                <form onSubmit={formik.handleSubmit} style={{ textAlign: 'center' }} className="animate__animated animate__zoomIn animate__faster">
                    <TextField
                        onChange={formik.handleChange}
                        value={formik.values.text}
                        name="text"
                        label="Title"
                        variant="filled"
                        style={{ background: 'white', width: 60+'%' }}
                        color="secondary"
                    />
                    <br /> <br />
                    <TextField
                        multiline
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        name="description"
                        label="Description"
                        variant="filled"
                        style={{ background: 'white', width: 60+'%' }}
                        color="secondary"
                        rows={10}
                    />
                    <br /> <br />
                    
                    <Button disabled={loading} size="large" variant="contained" color="secondary" type="submit">Submit</Button>
                </form>
                {loading ? <Loader /> :null}
            </Overlay>
        </Main>
    )
}

export default CreateList