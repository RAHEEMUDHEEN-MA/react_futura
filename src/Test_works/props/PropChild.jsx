import React from 'react'
import { Button } from 'react-bootstrap'

function PropChild({obj1,string1,arrayobj}) {
  return (
    <div>
     {arrayobj.map((person)=>
             <>
             <tr>
                <td>{person.name}</td>
                <td>{person.phone}</td>
             </tr>
             </>
               
              

              
                )}
    </div>
  )
}

export default PropChild
