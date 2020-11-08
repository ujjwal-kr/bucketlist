import React, { useEffect, useState } from 'react';
import { Main, Overlay } from '../Components/app';
import { Heading } from '../Components/auth';
import {useFormik} from 'formik';
import { ListService } from '../services/list';

interface Props {
    history: any;
}

const CreateList = ({history}: Props) => {

    const [token, setToken] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("token")!
        setToken(token)
    }, [])

    const formik = useFormik({
        initialValues: {
            text: "",
            description: ""
        },
        onSubmit: (values) => {
            ListService.postItem(token, values.description, values.text).then(res => {
                history.push("/users")
            }).catch(e => {
                alert("Invalid input or login error")
            })
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