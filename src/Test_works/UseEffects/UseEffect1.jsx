
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function UseEffect1() {
    const [first, setfirst] = useState("hello")
    useEffect(() => {
    alert("updated")
    }, [first])
    
  return (
    <div>
      <h1>{first}</h1>
      <Button onClick={()=>setfirst("hello hiii")} >update</Button>
    </div>
  )
}

export default UseEffect1
