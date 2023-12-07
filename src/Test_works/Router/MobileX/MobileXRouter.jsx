import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import DarkModeTernary from "../../ternary/DarkModeTernary";
import NavBar_Mobilex from "./Components/NavBar_Mobilex";
import Premuim_Banner from "./Components/Premuim_Banner";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Compatibility from "./Components/Compatibility";
import FAQs from "./Components/FAQs";

function MobileXRouter() {
  return (
    <div>
      <BrowserRouter>
      <Premuim_Banner/>
       <NavBar_Mobilex/>

       
          <Routes>
          <Route path="/" element={<><Home/> </>} />
          <Route path="/home" element={<><Home/> </>} />

          <Route path="/Features" element={<><Features/> </>} />
          <Route path="/Compatibility" element={<> <Compatibility/> </>} />
          <Route path="/Data" element={<> </>} />
          <Route path="/FAQs" element={<> <FAQs/></>} />
          <Route path="/Shop" element={<> </>} />
          <Route path="/About_us" element={<> </>} />
          </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default MobileXRouter;
