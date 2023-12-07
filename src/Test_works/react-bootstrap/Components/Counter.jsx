import React from "react";
import { Alert, Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
let Counter=()=>{
  return(
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={4}>
            <Card className="shadow-lg px-3">
             
              <Card.Body>
                  <p className="display-4 bolder">Count</p>
                  <Button variant="danger" className="mx-1">Increment</Button>
                  <Button variant="success" className="mx-1">decrement</Button>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Counter;