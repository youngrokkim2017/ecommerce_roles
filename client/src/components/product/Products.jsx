import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'

const ProductCard = ({product}) => {
    <div key={product._id}>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
    </div>
}

const NUMBER_OF_COLUMNS = 3;

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data: getProducts } = await axios.get('http://localhost:5000/products')
            setProducts(getProducts)
        }
        fetchProducts()
    }, [])

    getProductsInColumn = (products, numberOfColumns, column) => {
        return products.filter((col, index) => index % numberOfColumns === column)
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
