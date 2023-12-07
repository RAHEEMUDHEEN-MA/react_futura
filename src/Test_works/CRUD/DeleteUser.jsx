import React, { useContext, useEffect } from 'react'
import { NewContext } from '../../App'
import { useNavigate, useParams } from 'react-router-dom'

function DeleteUser() {
    const[data,setdata]=useContext(NewContext)
    const {user}=useParams()
    const navigate=useNavigate();
    console.log(user)
    console.log(data)
   const uindex=parseInt(user,10)
   const updatedData=data.filter((_,index)=>index!==uindex)

   const confirmdelete=()=>{
    const confirm=window.alert('are u sure')
    if(confirm){
      setdata(updatedData)
      navigate('/')
    }
    else{
      navigate('/')
    }
   }
  
 useEffect(() => {
    confirmdelete();
}, []);

   

  return (
    <div>
      
    </div>
  )
}

export default DeleteUser
