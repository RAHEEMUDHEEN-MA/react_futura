import { Button } from 'bootstrap'
import React from 'react'

function Child1( {word,setword}) {
  return (
    <div>
      <h1 style={{}}>{word}</h1>
      <button onClick={()=>setword("hi hi hi")}>change</button>

    </div>
  )
}

export default Child1
