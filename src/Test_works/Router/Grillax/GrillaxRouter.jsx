import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Grillax_NavBar from './Components/Grillax_NavBar'
import HomeGrillax from './Components/HomeGrillax'
import TheGrillax from './Components/TheGrillax'
import Process from './Components/Process'
import Locations from './Components/Locations'


function GrillaxRouter() {
  return (
    <div>
        
        <BrowserRouter>
        <Grillax_NavBar/>
        
        <Routes>
            <Route path='/' element={<><HomeGrillax/></>} ></Route>
            <Route path='/grillax' element={<><TheGrillax/> </>} ></Route>
            <Route path='/process' element={<><Process/></>} ></Route>
            <Route path='/locations' element={<><Locations/></>} ></Route>
            <Route path='' element={<></>} ></Route>
            <Route path='' element={<></>} ></Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default GrillaxRouter
