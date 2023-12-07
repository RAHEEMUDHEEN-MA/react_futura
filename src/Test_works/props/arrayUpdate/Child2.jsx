
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaLinux } from 'react-icons/fa'

function Child2({arrObj ,Altrarray}) 


{

   

    function AlterArray(){
      Altrarray([...arrObj,arrObj[1].phone="12121212"])
    }
    // {
    //     var TempArray=[...arrObj];
    //     TempArray[1].phone="00001000"
    //     Altrarray(TempArray)
       
        
    // }

    
  return (
    <div>
      <Table>
        <th>name</th>
        <th>phone</th>
        
       {arrObj.map((person)=>
        <tr>
        <td >{person.name}</td>
        <td>{person.phone}</td>
        
        
       
    </tr>
    )}
      </Table>
      <Button style={{margin:"2px"}} onClick={AlterArray} > change</Button>
     
    </div>
  )
}

export default Child2
