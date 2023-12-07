import React, { useState } from 'react'
import Child1 from './Child1'

function Parent1() {
    const [word,SetWord]=useState("hello")
  return (
    <div>
      <Child1 word={word} setword={SetWord}/>
    </div>
  )
}

export default Parent1
