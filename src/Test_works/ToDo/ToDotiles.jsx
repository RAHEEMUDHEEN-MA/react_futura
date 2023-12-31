import React, { useContext, useState } from 'react'
import { ToDoContext } from './RouterToDo'
import "./Styles/ToDoDrid.css";

import completedImage from "./assets/icons8-checkmark-25.png";
import editimg from "./assets/icons8-edit-25 (1).png";
import dltimg from "./assets/icons8-delete-25 (2).png";
import { Link } from 'react-router-dom';

function ToDotiles() {
    const [data,setdata]=useContext(ToDoContext)
    const alldata=data.filter((item)=>item.status=='pending' ||item.status=='completed')

    const deleteToDo=(id)=>{
      const deletedarray=data.map((item)=>{
        if(item.id===id){
          return{...item ,status:'deleted'}
                 
        }
        return item
      })
      setdata(deletedarray)
    }
  
    const done=(id)=>{
      const donearray=data.map((item)=>{
        if(item.id===id){
          return{...item,status:'completed'}
        }
        return item
      })
      setdata(donearray)
    }
  return (
    <div className="tileGrid">
    {alldata.map((demo,tileindex) => (
      <div className="tile" key={demo.id}>
        <div className="leftstatusBar" style={{
              backgroundColor:
                demo.status === 'completed'
                  ? '#047d53'
                  : demo.status === 'pending'
                  ? '#04567D'
                  : demo.status === 'deleted'
                  ? '#8a1212'
                  : 'black',
            }}>
          <p>{demo.status}</p>
          {/* {console.log(tileindex)} */}
        </div>
        <div className="mainCont">
          <div className="timeDate">
            <p className="date">{demo.date}</p>
            <p className="time">{demo.time}</p>
          </div>
          <div className="subdiv">
            <p>{demo.todo}</p>

            {/* {demo.status==="pending"? <div className="options">
              <div className="leftoption">
                <button onClick={()=>done(demo.id)}>
                  <img height={19} src={completedImage} alt="" />
                </button>
                <button>
                  <img height={17} src={editimg} alt="" />
                </button>
              </div>
              <div className="rightoption">
              <button onClick={()=>deleteToDo(demo.id)}>
                  <img height={17} src={dltimg} alt="" />
                </button>
              </div>
            </div>: null} */}

             
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ToDotiles
