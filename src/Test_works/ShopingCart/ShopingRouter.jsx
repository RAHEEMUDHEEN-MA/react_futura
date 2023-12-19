import React, { createContext, useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShoppingHome from './ShoppingHome'
import ShopingCart from './ShopingCart'

import fetchProductData from './ShoppingData'

function ShopingRouter() {
    // const ShoppingContext=createContext()

    const [data,setdata]=useState(fetchProductData)
    // console.log("dataaa111",data)

  return (
    <div>
        {/* <ShoppingContext.Provider >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ShoppingHome/>}/>
                    <Route path='/cart' element={<ShopingCart/>}/>
                </Routes>
            </BrowserRouter>
        </ShoppingContext.Provider> */}
      
    </div>
  )
}

export default ShopingRouter
