import React from "react";
import { Link } from "react-router-dom";
import "./Styles/NavToDo.css";
import trash from "./assets/icons8-trash-48.png"

function NavToDo() {
  return (
    <div className="navholder">
      
        <div className="navleft">
          <Link to={"/pending"}>
            <a href="">Pending</a>
          </Link>
          <Link to={"/completed"}>
            <a href="">completed</a>
          </Link>
          <Link to={"/all"}>
            <a href="">All</a>
          </Link>
        </div>

      
        <div className="navright">
          <Link to={"/deleted"} >
            <a href=""><img src={trash} alt="" /></a>
          </Link>
        </div>
      </div>
    
  );
}

export default NavToDo;
