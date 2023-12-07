import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MapCard from '../map/MapCard'
import RespNAVBAR from '../RespNAVBAR'
import ApiCardCarosal from '../api/ApiCardCarosal'
import DarkModeTernary from '../ternary/DarkModeTernary'
import NavBarTest from './NavBarTest'
import Parent3 from '../props/propTask/Parent3'
import Parent from '../props/PropAge/Parent'
import Spreadchangecolor from '../Spread/Spreadchangecolor'
import SpreadAddArray from '../Spread/SpreadAddArray'
import Counter from '../react-bootstrap/Components/Counter'
import ImageContainer from '../react-bootstrap/Components/ImageContainer'
import IncrementUseState from '../UseStatess/IncrementUseState'

function Router1() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBarTest/>} />
            <Route path='/card/:data' element={<><NavBarTest/><Parent3/></>} />
            <Route path='/carosal' element={<><NavBarTest/><ApiCardCarosal/></>}/>
            <Route path='/darkmode' element={<><NavBarTest/><DarkModeTernary/> </>}/>
            <Route path='/test' element={<><NavBarTest/><IncrementUseState/><SpreadAddArray/> </>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router1
