import React from 'react';
import { Main, Overlay } from '../Components/app';
import { Heading } from '../Components/auth';
import {useFormik} from 'formik';

const CreateList = () => {
    const formik = useFormik({
        initialValues: {
            text: "",
            description: ""
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <Main>
            <Overlay>
                <Heading className="stylish animate__animated animate__zoomIn animate__faster">Create List</Heading>
                <br />
            </Overlay>
        </Main>
    )
}

export default CreateList