import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UseParams = () => {
    const {data}=useParams()
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default UseParams
