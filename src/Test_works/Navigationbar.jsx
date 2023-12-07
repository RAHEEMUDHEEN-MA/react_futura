import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {} from 'react-bootstrap'

const Navigationbar = () => {
  return (
    <div>
            <Navbar  className='rounded' bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
     

    </div>
  )
}

export default Navigationbar
