// import React from 'react'
import React, { useContext } from 'react'
import "./Styles/ToDoDrid.css";
import { ToDoContext } from "./RouterToDo";
import completedImage from "./assets/icons8-checkmark-25.png";
import editimg from "./assets/icons8-edit-25 (1).png";
import dltimg from "./assets/icons8-delete-25 (2).png";


function ToDoDeleted() {
    const [data, setdata] = useContext(ToDoContext);
    const pendingdata=data.filter(item => item.status === 'deleted');
  return (
    <div className="tileGrid">
    {pendingdata.map((demo) => (
      <div className="tile">
        <div className="leftstatusBar" style={{
              backgroundColor:
                demo.status === 'completed'
                  ? 'green'
                  : demo.status === 'pending'
                  ? 'blue'
                  : demo.status === 'deleted'
                  ? '#8a1212'
                  : 'black', // Default color or any other color for unrecognized statuses
            }}>
          <p>{demo.status}</p>
        </div>
        <div className="mainCont">
          <div className="timeDate">
            <p className="date">{demo.date}</p>
            <p className="time">{demo.time}</p>
          </div>
          <div className="subdiv">
            <p>{demo.todo}</p>

           
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ToDoDeleted
