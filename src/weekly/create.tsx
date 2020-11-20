import React, {useState} from 'react';
import { useFormik } from 'formik';
import { TasksService } from '../services/tasks';
import { Main, Overlay } from '../Components/app';
import { Heading } from '../Components/auth';
import { TextField, Button } from '@material-ui/core';
import Loader from '../loader/loader';

interface Props {
    history: any;
}

const CreateTask = ({history}: Props) => {
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            text: ""
        }, 
        onSubmit: values => {
            setLoading(true)
            const token = localStorage.getItem("token")!
            const id = localStorage.getItem("name")!
            TasksService.postItem(token, id, values.text).then(res => {
                setLoading(false)
                history.push("/users/"+id)
            }).catch(e => {
                alert("Something Went wrong")
                setLoading(false)
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
                    multiline
                    onChange={formik.handleChange}
                    value={formik.values.text}
                    name="text"
                    required
                    label="Task Description"
                    variant="filled"
                    style={{ background: 'white', width: 80+'%' }}
                    color="secondary"
                    rows={5}
                />
                <br /> <br />
                
                <Button disabled={loading} size="large" variant="contained" color="secondary" type="submit">Submit</Button>
            </form>
            {loading ? <Loader /> :null}
        </Overlay>
    </Main>
    )
}

export default CreateTask