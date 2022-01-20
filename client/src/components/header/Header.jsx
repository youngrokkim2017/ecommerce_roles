import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
import { ShoppingCartContext } from '../../App'

function Header() {
    const [cart] = useContext(ShoppingCartContext)

    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        TITLE
                    </Link>
                </Navbar.Brand>
                <Link to='/cart'>
                    Cart {cart.length}
                </Link>
            </Container>
        </Navbar>
    )
}

export default Header
