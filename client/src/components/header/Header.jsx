import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../App'

function Header() {
    const [cart] = useContext(ShoppingCartContext)

    return (
        <div>
            <Link to='/cart'>
                Cart {cart.length}
            </Link>
        </div>
    )
}

export default Header
