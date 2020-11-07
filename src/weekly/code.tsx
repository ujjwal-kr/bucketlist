import React, { FunctionComponent } from 'react';
import { Main, Overlay } from '../Components/app';
import { useFormik } from 'formik';
import { Heading } from '../Components/auth';

import { TextField, Button } from '@material-ui/core';

interface Props {
    history: any;
    match: {
        params: {
            id: string;
        }
    }
}

const TaskCode: FunctionComponent<Props> = ({ match, history }) => {
    const id = match.params.id;
    const formik = useFormik({
        initialValues: {
            code: ''
        },
        onSubmit: values => {
            const code = btoa(values.code)
            history.push("/tasks/"+id+"/"+code)
            console.log(code)
        }
    })

    return <Main>
        <Overlay>
        <Heading className="stylish animate__animated animate__zoomIn animate__faster">Task Code</Heading>
                <br />
                <form onSubmit={formik.handleSubmit} style={{ textAlign: 'center' }} className="animate__animated animate__zoomIn animate__faster">
                    <TextField
                        onChange={formik.handleChange}
                        value={formik.values.code}
                        name="code"
                        label="Task Code"
                        variant="filled"
                        style={{ background: 'white' }}
                        color="secondary"
                    />
                    <br /> <br />
                    <Button size="large" variant="contained" color="secondary" type="submit">Submit</Button>
                </form>
        </Overlay>
    </Main>
}

export default TaskCode;