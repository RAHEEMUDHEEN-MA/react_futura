import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseParams from './UseParams'
// import { Table } from 'react-bootstrap'
// import Table5 from '../UseContexts/Table5'

const Router5 = () => {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/:data' element={<><UseParams/></>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Router5 
