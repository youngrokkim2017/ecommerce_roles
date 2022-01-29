import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'

import { UserContext } from '../../App'

const INITIAL_FORM = {
    name: '',
    cost: 0,
    description: ''
}

function CreateProduct() {
    const [form, setForm] = useState(INITIAL_FORM)
    const [user] = useContext(UserContext)

    const updateFormValue = (key) => (e) => {
        setForm({
            ...form, 
            [key]: e.currentTarget.value
        })
    }

    const createProductHandler = async (e) => {
        e.preventDefault()

        await axios.post("http://localhost:5000/products", form, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        setForm(INITIAL_FORM)
    }

    return (
        <Container>
            <Row>
            <Col></Col>
            <Col xs={6}>
                <h1>Create Product</h1>
                <Form onSubmit={createProductHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name" 
                        value={form.name} 
                        onChange={updateFormValue('name')}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Cost</Form.Label>
                    <Form.Control 
                        type="number" 
                        value={form.cost} 
                        onChange={updateFormValue('cost')}
                    />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        value={form.description} 
                        rows={3} 
                        onChange={updateFormValue('description')}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
            <Col></Col>
            </Row>
        </Container>
    )
}

export default CreateProduct
