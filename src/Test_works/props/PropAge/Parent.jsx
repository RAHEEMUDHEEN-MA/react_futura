import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const[age,SetAge]=useState(19)
    
  return (
    <div>
      <Child checkAge={age}/>
    </div>
  )
}

export default Parent
