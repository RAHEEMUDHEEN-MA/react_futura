import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'

function SpreadAddArray() {
    let arrayCars=[{brand:'bmw' ,color:'red'},{brand:'Benz' ,color:'blue'}]
    const [first,addarray]=useState(arrayCars)
    const array2=[{brand:'audi',color:'black'}]

    const obj1={brand:'toyota' ,color:'silver'}
    // function alterArray() {
    //      addarray([...first,...array2])
    // }
  return (
    <div>
     <Table variant='secondary'>
      <tr>  <th >brand</th>
        <th>color</th></tr>
     {first.map((arrayCars)=>  <tr>
            <td>{arrayCars.brand}</td>
             <td>{arrayCars.color}</td>
        </tr>)}
     </Table>
     <Button onClick={()=>addarray([...first,...array2])}>add</Button>
     <Button onClick={()=>addarray([...first,{...obj1}])}>add obj</Button>
    </div>
  )
}

export default SpreadAddArray
