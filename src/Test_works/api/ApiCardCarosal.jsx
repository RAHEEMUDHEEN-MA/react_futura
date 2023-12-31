import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ApiCardCarosal() {
    const [Products,SetProducts]=useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((productArray)=>{
            SetProducts(productArray.data.products)


    })
    }, [])
    
    
  return (
    <div>
       

        <Container>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} >
                {Products.map((demo)=>(
                    <Col className='m-4' >
                         <Card style={{ width: '18rem' }}>
                          
                         <Carousel>
      <Carousel.Item>
       <img height={300} src={demo.images[0]}alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img height={300} src={demo.images[1]} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img height={300} src={demo.images[2]} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img height={300} src={demo.images[3]} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img height={300} src={demo.images[4]} alt="" />
      </Carousel.Item>
    </Carousel>

             <Card.Body>
               <Card.Title>{demo.title}</Card.Title>
               <Card.Text>
                 {demo.description}
               </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroup.Item>{demo.category}</ListGroup.Item>
               <ListGroup.Item>{demo.brand}</ListGroup.Item>
               <ListGroup.Item style={{color:"green",fontWeight:500}}>{demo.price}$</ListGroup.Item>
             </ListGroup>
             <Card.Body className='d-flex justify-content-around'>
               <Button>Add To Cart</Button>
               <Button>Buy Now</Button>
             </Card.Body>
           </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default ApiCardCarosal
