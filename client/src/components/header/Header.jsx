import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
import { ShoppingCartContext } from '../../App'
import { UserContext } from '../../App'

function Header() {
    const [cart] = useContext(ShoppingCartContext)
    const [user] = useContext(UserContext)

    return (
        <Navbar bg='light' expand='lg' className='mb-4'>
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        TITLE
                        <span>signed in as {user.user?.username}</span>
                    </Link>
                </Navbar.Brand>
                {user.token &&
                    <Link to='/cart'>
                        Cart {cart.length}
                    </Link>
                }
            </Container>
        </Navbar>
    )
}

export default Header
