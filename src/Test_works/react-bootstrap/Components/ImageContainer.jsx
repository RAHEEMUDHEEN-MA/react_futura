import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ImageContainer() {
  return (
    <div>
      <Container fluid>
        <Row style={{backgroundColor:'blue', margin:'5px'}}>
          <Col    lg={6}   >
            <img style={{ width: '100%' }} src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87330.jpg" alt="Image 1" />
            <p>Paragraph about Image 1</p>
          </Col>
          <Col    lg={6}   >
            <img style={{ width: '100%' }} src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87328.jpg" alt="Image2" />
            <p>Paragraph about Image 2</p>
          </Col>
          
        </Row>
      </Container>

      

      
    </div>
  );
}

export default ImageContainer;
