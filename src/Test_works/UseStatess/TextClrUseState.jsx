import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const TextClrUseState = () => {
    const [txtClr,changeTxtClr]=useState("black");
    const BtnStyle={
        margin: "6px",
    }
    const p_style={
        color:txtClr,
    }
  return (
    <div>
      <Card>
        <Card.Body>
            <h2 style={p_style}>the color is {txtClr}</h2>
            <Button style={BtnStyle} variant='danger' onClick={()=>changeTxtClr("red")}>Red</Button>
            <Button style={BtnStyle} variant='success' onClick={()=>changeTxtClr("green")}>green</Button>
            <Button style={BtnStyle} variant='primary' onClick={()=>changeTxtClr("blue")}>blue</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TextClrUseState
