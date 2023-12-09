import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDodata from "./ToDoData";
const ToDoContext = createContext();
function RouterToDo() {
  const [data, setdata] = useState(ToDodata);

  return (
    <div>
      <ToDoContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route  path="/" />
          </Routes>
        </BrowserRouter>
      </ToDoContext.Provider>
    </div>
  );
}

export default RouterToDo;
