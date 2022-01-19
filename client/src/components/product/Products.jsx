import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'

// import cart context
import { ShoppingCartContext } from '../../App'

const ProductCard = ({ product, addProductToCart }) => (
    <div key={product._id}>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Button 
                variant="primary"
                onClick={() => addProductToCart(product)}
            >
                Add to Cart
            </Button>
          </Card.Body>
        </Card>
    </div>
)

const NUMBER_OF_COLUMNS = 3;

function Products() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useContext(ShoppingCartContext)

    useEffect(() => {
        const fetchProducts = async () => {
            const { data: getProducts } = await axios.get('http://localhost:5000/products')
            setProducts(getProducts)
        }
        fetchProducts()
    }, [])

    const getProductsInColumn = (products, numberOfColumns, column) => {
        return products.filter((col, index) => index % numberOfColumns === column)
    }

    const addProductToCart = (product ) => {
        setCart([...cart, product])
    }

    return (
        <div>
            <Container>
                <Row>
                    {new Array(NUMBER_OF_COLUMNS).fill("").map((value, column) => (
                      <Col key={column}>
                        {getProductsInColumn(
                          products,
                          NUMBER_OF_COLUMNS,
                          column
                        ).map((product) => (
                          <ProductCard
                            key={product._id}
                            product={product}
                            addProductToCart={addProductToCart}
                          />
                        ))}
                      </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Products
