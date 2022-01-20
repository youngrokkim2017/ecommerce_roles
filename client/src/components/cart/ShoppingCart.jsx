import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../App'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

const ShoppingCartItem = ({ product, removeProduct }) => (
    <Row className='mb-4'>
        {/* <Col>
            <img></img>
        </Col> */}
        <Col>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
        </Col>
        <Col>
            <Button 
                variant="primary"
                onClick={() => removeProduct(product)}
            >
                Remove
            </Button>
        </Col>
    </Row>
)

const ShoppingCart = () => {
    const [cart, setCart] = useContext(ShoppingCartContext)

    const removeProduct = (product) => {
        setCart(cart.filter(productInCart => productInCart !== product))
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Shopping Cart ({cart.length})</h1>
                </Col>
            </Row>
            {cart.map((product) => (
                <ShoppingCartItem product={product} removeProduct={removeProduct} />
            ))}
        </Container>
    )
}

export default ShoppingCart
