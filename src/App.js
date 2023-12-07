import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";

import APIdummy1 from "./Test_works/api/APIdummy1";
import APIdummy2 from "./Test_works/api/APIdummy2";
import ApiCard from "./Test_works/api/ApiCard";
import MapCard from "./Test_works/map/MapCard";
import ApiCardCarosal from "./Test_works/api/ApiCardCarosal";
import ApiWork1 from "./Test_works/api/ApiWork1";
import Router1 from "./Test_works/Router/Router1";
import MobileXRouter from "./Test_works/Router/MobileX/MobileXRouter";
import { createContext, useState } from "react";
// import Data from "./Test_works/UseContexts/Data";
// import Table from "./Test_works/UseContexts/Table";
// import Table5 from "./Test_works/UseContexts/Table5";
import GrillaxRouter from "./Test_works/Router/Grillax/GrillaxRouter";
import Router5 from "./Test_works/Useparams/Router5";
import Form1 from "./Test_works/Form/Form1";
import RegForm from "./Test_works/Form/RegForm";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataCrud from "./Test_works/CRUD/DataCrud";
import TableCrud from "./Test_works/CRUD/TableCrud";
import VIewPage from "./Test_works/CRUD/VIewPage";
import EditUser from "./Test_works/CRUD/EditUser";
import DeleteUser from "./Test_works/CRUD/DeleteUser";
import Adduser from "./Test_works/CRUD/Adduser";
import RouterToDo from "./Test_works/ToDo/RouterToDo";


 const NewContext = createContext();
function App() {
  // const [data, sedata] = useState(Data);
  const [data,setdata] = useState(DataCrud)

  return (
    <div className="App">
      {/* <NewContext.Provider value={[data, sedata]}>
       <Table5/>
      </NewContext.Provider> */}
      {/* <ApiCard/> */}
      {/* <APIdummy1/> */}
      {/* <APIdummy2/> */}
      {/* <MapCard/> */}
      {/* <ApiCardCarosal/> */}
      {/* <ApiWork1/> */}
      {/* <Router1/> */}
      {/* <MobileXRouter /> */}
      {/* <GrillaxRouter/> */}
      {/* <Table /> */}
      {/* <Router5/> */}
      {/* <Form1/> */}
      {/* <RegForm/> */}



      {/* <NewContext.Provider value={[data ,setdata]}>
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<TableCrud/>}/>
          <Route path="view/:user" element={<VIewPage/>}/>
          <Route path="edit/:user" element={<EditUser/>}/>
          <Route path="delete/:user" element={<DeleteUser/>}/>
          <Route path="/add" element={<Adduser/>}/>

        </Routes>
        
        </BrowserRouter>
      </NewContext.Provider> */}

      <RouterToDo/>


    </div>
  );
}

export default App;
export { NewContext };
