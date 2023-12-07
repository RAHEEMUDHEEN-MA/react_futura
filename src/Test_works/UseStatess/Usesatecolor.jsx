import React, { useState } from 'react';
import BootStrap from '../react-bootstrap/BootStrap';
import { Button, Card } from 'react-bootstrap';

const Usesatecolor = () => {
    const btnStyle={
        margin:"6px",
        color:"white"
    }

    const [color,setColor]=useState("black");
  return (
    <div>
      <Card>
        <Card.Body>
        <p className='display-5'>The color is {color}</p>
      <Button style={btnStyle} variant='danger' onClick={()=>setColor("red")} >red</Button>
      <Button style={btnStyle} variant='success' onClick={()=>setColor("green")}>green</Button>
      <Button style={btnStyle} variant='warning' onClick={()=>setColor("yellow")}>yellow</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Usesatecolor
