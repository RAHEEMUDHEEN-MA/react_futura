import React, { useState } from 'react'
import Child2 from './Child2'

function Parent2() {
    const [arrObj,Altrarray]=useState([{name:"lazim",phone:'9874456321'},{name:"jithin",phone:'7874456321'},{name:"ama",phone:'8874456321'}])
  return (
    <div>
      <Child2 arrObj={arrObj} Altrarray={Altrarray}/>
    </div>
  )
}

export default Parent2
