import React, { useState } from 'react'

function Map() {
    const [first, setfirst] = useState([{fruit:"apple" ,location:"kasmir"} ,{fruit:"grape",location:"andra"},{fruit:"watermelon",location:"kerala"}])
  return (
    <div>
     


      {first.map((product2)=>
      <>
      <h2>{product2.fruit} </h2>
        <h>{product2.location}</h>
      </>)}
    </div>
  )
}

export default Map
