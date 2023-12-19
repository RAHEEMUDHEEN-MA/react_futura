import React, { createContext, useState } from 'react'

import getProductData from './ShoppingData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShoppingHome from './ShoppingHome'

function ShopingRouter() {
    const ShoppingContext=createContext()

    const [data,setdata]=useState(getProductData)
    console.log(data)

  return (
    <div>
        <ShoppingContext.Provider >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ShoppingHome/>}/>
                </Routes>
            </BrowserRouter>
        </ShoppingContext.Provider>
      
    </div>
  )
}

export default ShopingRouter
