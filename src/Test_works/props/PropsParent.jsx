import React, { useState } from 'react'
import PropChild from './PropChild'

function PropsParent() {
    const[simple,setSimple]=useState("hi hello")
    const word="futura"

    const[object,SetObject]=useState({name:"raheemudheen" ,phone:'8113044223'})
    const [array,SetArray]=useState([{name:"lazim",phone:'9874456321'},{name:"jithin",phone:'7874456321'},{name:"ama",phone:'8874456321'}])
  return (
    <div>
        <PropChild obj1={object } string1={simple} arrayobj={array}/>
        
      
    </div>
  )
}

export default PropsParent
