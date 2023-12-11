import React, { useContext, useEffect, useState } from "react";
import "./Styles/HomeToDo.css";
import ToDodataArray from "./ToDoData";
import { ToDoContext } from "./RouterToDo";
import NavToDo from "./NavToDo";

function HomeToDo() {
  const [data, setdata] = useContext(ToDoContext);

  const [atodo, setatodo] = useState("");

  const [adate, setadate] = useState();
  const [atime, setatime] = useState("");
  const [astatus, setastatus] = useState("");
  const [lastid, setLastId] = useState(7);

  console.log(atodo);
  console.log(adate);
  console.log(atime);
  console.log(astatus);
  console.log(lastid);

  useEffect(() => {
    const currentDate = new Date();

    const formattedDate = currentDate.toISOString().slice(0, 10);
    const formattedTime = currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setadate(formattedDate);
    setatime(formattedTime);
    setastatus("pending");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newToDo = {
      id: lastid + 1,
      date: adate,
      time: atime,
      todo: atodo,
      status: astatus,
    };
    
    setdata([...data, newToDo]);
    setatodo(""); // Clear input field after submission
    setLastId((prevId) => prevId + 1);
  };

  return (
    <div className="maindiv">
      <div className="headsection">
        <h1 className="heading">ToDo..</h1>
        <span id="strokeline"></span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setatodo(event.target.value)}
          type="text"
          placeholder="ToDo.."
          value={atodo}
        />
        <button id="addBtn" type="submit">
          +
        </button>
      </form>

      <span id="lineh"></span>

      <NavToDo />
    </div>
  );
}

export default HomeToDo;
