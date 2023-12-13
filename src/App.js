import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterToDo from "./Test_works/ToDo/RouterToDo";



function App() {
  

  return (
    <div className="App">
      <RouterToDo/>
    </div>
  );
}

export default App;
export { NewContext };