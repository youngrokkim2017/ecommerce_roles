import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../App'

function Header() {
    const [cart] = useContext(ShoppingCartContext)

    return (
        <div>
            Cart {cart.length}
        </div>
    )
}

export default Header
