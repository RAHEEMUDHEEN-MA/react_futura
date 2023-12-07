import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Spreadchangecolor() {
    // let car={brand:'ferrari',color:'silver'}
    // const carRed={brand:'ferrari',color:'red'}

    const [first,setRed]=useState({brand:'ferrari',color:'silver'})

  return (
    <div>

      <div>
    
        <h1>my car is {first.brand},in {first.color} color</h1>
        <Button onClick={()=>setRed({...first,color:"red"})}>Change</Button>
    
      </div>
    </div>
  )
}

export default Spreadchangecolor
