import React, { useState } from 'react'
import axios from 'axios'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'

const INITIAL_FORM = {
    username: '',
    password: ''
}

function RegisterPage() {
    const [form, setForm] = useState(INITIAL_FORM)

    const updateFormValue = (key) => (e) => {
        setForm({
            ...form, 
            [key]: e.currentTarget.value
        })
    }

    const registerUser = async (e) => {
        e.preventDefault()

        await axios.post("http://localhost:5000/register", form)

        setForm(INITIAL_FORM)
    }

    return (
        <Container>
            <Row>
            <Col></Col>
            <Col xs={6}>
                <h1>Register</h1>
                <Form onSubmit={registerUser}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        // type="text" 
                        value={form.username} 
                        onChange={updateFormValue('username')}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        value={form.password} 
                        onChange={updateFormValue('password')}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                </Form>
            </Col>
            <Col></Col>
            </Row>
        </Container>
    )
}

export default RegisterPage


// import React from 'react'

// const RegisterPage = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default RegisterPage
