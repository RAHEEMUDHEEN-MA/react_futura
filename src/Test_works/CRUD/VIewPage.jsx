import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewContext } from '../../App'
import { useReducer } from 'react'

function VIewPage() {
    const [data,setdata]=useContext(NewContext)

    const {user}=useParams()
    const viewuser=data[user]

  return (
    <div>
        <h1>{viewuser.name}</h1>
        <h2>{viewuser.age}</h2>
        <h3>{viewuser.place}</h3>
      
    </div>
  )
}

export default VIewPage
