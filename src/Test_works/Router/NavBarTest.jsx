import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function NavBarTest() {
    const abc=useNavigate();
    const samplex=()=>{
        abc('/test')
    }
  return (
    <div>
  
       <Navbar  expand="lg" className="bg-dark navbar-dark m-0 ">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to={'/carosal'}> <Nav.Link href="/carosal">produscsdagcasjcts</Nav.Link></Link>
            <Link to={'/card'}><Nav.Link href="/card">vegitables</Nav.Link></Link>
            <Link to={'/darkmode'}><Nav.Link href="/darkmode">darkmode</Nav.Link></Link>
            <Button onClick={samplex}>test</Button>
         </Nav>

        <h1>dsfds</h1>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBarTest
