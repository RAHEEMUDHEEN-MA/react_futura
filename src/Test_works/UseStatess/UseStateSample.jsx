import React ,{useState}from 'react'
import BootStrap from '../react-bootstrap/BootStrap'
import { Button, Card } from 'react-bootstrap'

const UseStateSample = () => {
        const[first,setfirst]= useState("Raheemudheen");

       const toggle=()=>{
        if(first==="Raheemudheen") {
            setfirst("raheem")
        }
        else{
            setfirst("Raheemudheen")
        }
       }
  return (
   <div className='fixed'>
   <Card className='shadow'>
    <Card.Body >
        <p className='display-6'>my name is {first}</p>
        <Button  variant='danger' onClick={toggle}>change</Button>
    </Card.Body>
   </Card>
   </div>
  )
}

export default UseStateSample
