import React, { useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'


const IncrementUseState = () => {
    const [count,setcount]=useState(0)

  return (
    <div>
      <Card className='shadow' >
        <Card.Body>
            <p className='display-3 bold'>{count}</p>
                <Button onClick={()=>setcount(count-1) } className='m-2 px-4'>-</Button>
                <Button onClick={()=>setcount(count+1) } className='m-2 px-4'>+</Button>
                <Button variant='success' onClick={()=>setcount(0) } className='m-2 px-4'>reset</Button>

        </Card.Body>
      </Card>
    </div>
  )
}

export default IncrementUseState
