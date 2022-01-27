import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Row, Col, Container, Card, Button, Form, Toast, ToastContainer } from 'react-bootstrap'

// import cart context
import { ShoppingCartContext } from '../../App'
import { UserContext } from '../../App'

const ProductCard = ({ isLoggedIn, product, addProductToCart }) => (
    <div key={product._id} className='mb-4'>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            {isLoggedIn && (
              <Button 
                  variant="primary"
                  onClick={() => addProductToCart(product)}
              >
                  Add to Cart
              </Button>
            )}
          </Card.Body>
        </Card>
    </div>
)

const NUMBER_OF_COLUMNS = 3;

function Products() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [showToast, setShowToast] = useState(false)

    const [cart, setCart] = useContext(ShoppingCartContext)
    const [user, setUser] = useContext(UserContext)

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
        setCart([...cart, { ...product }])

        setShowToast(true)
    }

    const onSearchChange = (e) => {
        // e.preventDefault()

        setSearch(e.currentTarget.value)
    }

    const getFilteredProducts = (products) => {
        return products.filter((product) => product.name.includes(search))
    } 

    return (
        <>
            <ToastContainer style={{zIndex: "1"}} className="p-3 position-fixed" position='top-center'>
              <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Success</strong>
                  {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>Product Added to Cart</Toast.Body>
              </Toast>
            </ToastContainer>
            <Container>
                <Row>
                    <Col>
                        <Form.Control 
                            size="lg" 
                            type="text" 
                            placeholder="Search for product by name" 
                            className='mb-4 mt-4'
                            onChange={onSearchChange}
                            value={search}
                        />
                    </Col>
                </Row>
                <Row>
                    {new Array(NUMBER_OF_COLUMNS).fill("").map((value, column) => (
                      <Col key={column}>
                        {getProductsInColumn(
                        //   products,
                          getFilteredProducts(products),
                          NUMBER_OF_COLUMNS,
                          column
                        ).map((product) => (
                          <ProductCard
                            isLoggedIn={!!user.token}
                            key={product._id}
                            product={product}
                            addProductToCart={addProductToCart}
                          />
                        ))}
                      </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Products
