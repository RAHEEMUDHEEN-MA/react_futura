import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDodata from "./ToDoData";
import HomeToDo from "./HomeToDo";
import ToDotiles from "./ToDotiles";
import TodoPending from "./TodoPending";
import ToDoCompleted from "./ToDoCompleted";
import ToDoDeleted from "./ToDoDeleted";
import EditToDo from "./EditToDo";
const ToDoContext = createContext();
function RouterToDo() {
  const [data, setdata] = useState(ToDodata);

  return (
    <div style={{backgroundColor:"#092635"}}>
      <ToDoContext.Provider value={[data,setdata]}>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<><HomeToDo/>  <TodoPending/></>} />
            <Route  path="/all" element={<><HomeToDo/> <ToDotiles/></>} />
            <Route  path="/pending" element={<><HomeToDo/> <TodoPending/></>} />
            <Route  path="/completed" element={<><HomeToDo/> <ToDoCompleted/></>} />
            <Route  path="/deleted" element={<><HomeToDo/> <ToDoDeleted/></>} />
            <Route  path="/edit/:todoid" element={<> <EditToDo/></>} />
          </Routes>
        </BrowserRouter>
      </ToDoContext.Provider>
    </div>
  );
}

export default RouterToDo;
export {ToDoContext}
