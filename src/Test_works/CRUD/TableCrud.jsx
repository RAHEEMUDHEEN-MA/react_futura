import React, { useContext } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { NewContext } from '../../App'
import { Link } from 'react-router-dom'

function TableCrud() {
    const [data,setdata]=useContext(NewContext)
  return (
    <div>
       <Table striped bordered >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Place</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>

        </tr>
      </thead>
    
      {data.map((demo,ind)=>
       
        <tr >
          <td>{ind+1}</td>
          <td>{demo.name}</td>
          <td>{demo.age}</td>
          <td>{demo.place}</td>
          <td><Link to={`/view/${ind}`}><Button variant='primary'>View</Button></Link></td>
          <td><Link to={`/edit/${ind}`}><Button variant='success'>Edit</Button></Link></td>
          <td><Link to={`/delete/${ind}`}><Button variant='danger'>delete</Button></Link></td>
        </tr>



       
      

      )}

    
    </Table>
    <Link to={'/add'}><Button style={{position:"relative",left:"45%", marginTop:"30px", backgroundColor:"orange"}}>Add User</Button></Link>


    
    </div>
  )
}

export default TableCrud
