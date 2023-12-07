
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

function Ternary2() {
        const [first,setfirst]=useState(false)
  return (
    
    <div>
      <Container className='text-center my-5'>

      <Button onClick={()=>setfirst(!first)}>change</Button>
      {first? <h1>hi hello</h1>:<h1></h1>}
      </Container>

    </div>
   
  )
}

export default Ternary2
