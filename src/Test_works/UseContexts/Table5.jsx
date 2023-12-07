import React, { useContext } from 'react'
import { NewContext } from '../../App'
import { Button, Table } from 'react-bootstrap';

function Table5() {
    const[data,setdata]=useContext(NewContext);
    console.log(data)
   let clearphone=(()=>{
    setdata([...data,data.age='00'])
    console.log("after",data)
   })

    

  return (
    <div>
        <Table >
            <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>PLACE</th>
            </tr>
            
            {data.map((demo)=>(
                <tr>
                    <td>{demo.name}</td>
                <td>{demo.age}</td>
                <td>{demo.place}</td>
                
                </tr>
                
                ))}
                <tr><Button onClick={clearphone}>clear</Button></tr>
            
        </Table>
      
    </div>
  )
}

export default Table5
