import { fireEvent } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function ApiCard() {
    const [first,setFirst]=useState([])

    useEffect(() => {
     axios.get('https://dummyjson.com/products').then((display)=>{
        setFirst(display.data.products)
        console.log(display.data.products)
     })
    }, [])
    
  return (
    <Container className='my-5'>
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
     {first.map((demo)=>
       <Col >
       <Card style={{ width: '18rem', backgroundColor:"rgb(207, 207, 244)",boxShadow:"1px 2px 12px 3px rgb(207, 207, 244)"}} >
         <img className='productImg p-3'  src={demo.images[0]} height={250} style={{borderRadius:"10px"}}/>
         <Card.Body> 
           <Card.Title>{demo.title}</Card.Title>
           <Card.Text className='overflow-hidden' style={{height:'150px'}}>{demo.description}</Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card>
     </Col>
     )}
    </Row>
  </Container>
  )
}

export default ApiCard
