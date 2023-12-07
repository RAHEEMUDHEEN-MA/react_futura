import axios from 'axios'
import React from 'react'

function APIdummy1() {
    axios.get('https://dummyjson.com/products').then((array)=>{
        console.log(array)
    })
  return (
    <div>
      
    </div>
  )
}

export default APIdummy1
