import React from 'react'
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap"
import Counter from './Components/Counter'



const TestNavBar = () => {
  return (
    <>
   <Navbar expand="lg" className='bg-secondary h-75 col-10 m-auto '>
    <Container fluid>
      <Nav>
        <Navbar.Brand> <img src="" alt="" /> </Navbar.Brand>
      </Nav>
    </Container>

   </Navbar>
    
    </>
  )
} 

export default TestNavBar
