import React from 'react'

function Child({checkAge}) {
  return (
    <div>
     {checkAge>=18?<h1>eligible</h1>:<h1>not eligible</h1>}
    </div>
  )
}

export default Child
