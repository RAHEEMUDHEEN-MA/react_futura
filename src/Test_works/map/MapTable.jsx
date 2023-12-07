import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

function MapTable() {
    const [first, setfirst] = useState([
        {name:"RAHEEEMUDHEEN",email:"raheemudheenma118@gmail.com",phone:"8113044223",location:"calicut"},
        {name:"JITHIN",email:"jithin@gmail.com",phone:"9874563210",location:"kannur"},
        {name:"SIYAS",email:"siyas@gmail.com",phone:"8413044223",location:"wayanad"},
        {name:"AMAL",email:"amal@gmail.com",phone:"7896044223",location:"malappuram"},
        {name:"afi",email:"afi@gmail.com",phone:"7896044223",location:"kollam"},
    ])
  return (
    <div>
      
      
             <Table striped bordered hover variant="dark" >
        
             <thead>
               <tr>
                
                 <th> NAME</th>
                 <th>EMAIL</th>
                 <th>PHONE</th>
                 <th>LOCATION</th>
               </tr>
             </thead>
             <tbody>
                {first.map((person)=>
                <tr>
               
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.location}</td>

               
                
              </tr>

              
                )}
           

               
             </tbody>
           </Table>
      
      
    </div>
  )
}

export default MapTable
