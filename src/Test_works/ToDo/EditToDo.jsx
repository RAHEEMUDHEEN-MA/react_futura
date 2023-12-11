import React, { useContext, useEffect, useState } from "react";
import "./Styles/EditToDo.css";
import saveimg from "./assets/icons8-save-60.png";
import { ToDoContext } from "./RouterToDo";
import { useParams } from "react-router-dom";

function EditToDo() {
  const [data, setData] = useContext(ToDoContext);
  const { todoid } = useParams();
  const [selectedTodo, setselectedTodo] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");

  useEffect(() => {
    const foundTodo = data.find((item) => item.id === todoid);
    if (foundTodo) {
      setselectedTodo(foundTodo);
      setEditedTodo(foundTodo.todo); // Set the initial value of editedTodo to the todo content
    }
  }, [data, todoid]);

  console.log("selected edit data ", selectedTodo);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the todo item in your data source (assuming it's an array)
    const updatedData = data.map((item) =>
      item.id === todoid ? { ...item, todo: editedTodo } : item
    );

    // Update the state/context with the modified data
    setData(updatedData);
  };

  const handleInputChange = (e) => {
    setEditedTodo(e.target.value); // Update the editedTodo state as the user types
  };

  return (
    <div className="editpage">
      {selectedTodo && (
        <div className="edittile">
          <div className="leftstatusBar">
            <p></p>
          </div>
          <div className="mainCont">
            <div className="timeDate">
              <p className="date">{selectedTodo.date}</p>
              <p className="time"></p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="subdiv">
                <input
                  type="text"
                  value={editedTodo}
                  onChange={handleInputChange}
                />

                <div className="options">
                  <div className="leftoption"></div>
                  <div className="rightoption">
                    <button type="submit">
                      <img height={30} src={saveimg} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditToDo;
