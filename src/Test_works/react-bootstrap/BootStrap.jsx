import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Accordion, Alert, Badge, Button,Nav}from 'react-bootstrap'


const BootStrap = () => {
  return (
    <div>
      
      <Nav variant='secondary' className=''> </Nav>
     


      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      {/* {[
        'secondary',
        'secondary',
        'success',
        'danger',
        'secondary',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
   */}


   <Alert variant='success'>
    <Alert.Heading>loremsdhsbfdsnfdskjnfkdf</Alert.Heading>
    <Alert.Link href='www.google.com'>go to this link</Alert.Link>
   </Alert>
   <Alert variant='danger'>
    this is failure alert
   </Alert>


   {/* <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}



{/* my accc///// */}
    <Accordion defaultActiveKey="2">
        <Accordion.Item eventKey='0'>
            <Accordion.Header>item 1</Accordion.Header>
                <Accordion.Body> 
                <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

             sit amet consectetur adipisicing elit. Minima a deleniti non eveniet suscipit repudiandae obcaecati quibusdam, esse vero voluptas unde earum itaque ab totam impedit enim aspernatur nemo? Id!
                </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
        <Accordion.Header>item 2</Accordion.Header>
        <Accordion.Body> 
        <img src="https://images.app.goo.gl/ySzPGu5K5AZ8fyLR6" alt="Image Description" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima a deleniti non eveniet suscipit repudiandae obcaecati quibusdam, esse vero voluptas unde earum itaque ab totam impedit enim aspernatur nemo? Id!
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='2'>
        <Accordion.Header>item 3</Accordion.Header>
        <Accordion.Body> 

        <Alert variant='success'>
    <Alert.Heading>loremsdhsbfdsnfdskjnfkdf</Alert.Heading>
    <Alert.Link href='www.google.com'>go to this link</Alert.Link>
   </Alert>
   <Alert variant='warning'>
    this is failure alert
   </Alert>
        <img src="https://images.app.goo.gl/ySzPGu5K5AZ8fyLR6" alt="Image Description" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima a deleniti non eveniet suscipit repudiandae obcaecati quibusdam, esse vero voluptas unde earum itaque ab totam impedit enim aspernatur nemo? Id!
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    <h1> <Badge>badge1</Badge></h1>

      <h3><Badge>badge 3</Badge> </h3>
 


     

    </div>
  )
}

export default BootStrap
