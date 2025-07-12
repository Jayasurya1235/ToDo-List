import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaRegHandPointUp } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";
function ToDolist() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a Shower",
    "Walk the Dog",
  ]);
  const [newTask, setNewTask] = useState();
  const handleInput = (event) => {
    setNewTask(event.target.value);
  };
  const handleAdd = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const handleDelete = (index) => {
    const updateDelete = tasks.filter((_, i) => i !== index);
    setTasks(updateDelete);
  };
  const handleMoveUP = (index) => {
    if (index > 0) {
      const updateMoves = [...tasks];
      [updateMoves[index], updateMoves[index - 1]] = [
        updateMoves[index - 1],
        updateMoves[index],
      ];
      setTasks(updateMoves);
    }
  };
  const handleMoveDown = (index) => {
    if (index < tasks.length - 1) {
      const updateMoves = [...tasks];
      ([updateMoves[index], updateMoves[index + 1]] = [
        updateMoves[index + 1],
        updateMoves[index],
      ]),
        setTasks(updateMoves);
    }
  };
  return (
    <div className="todolist">
      <h1>TO-DO-LIST</h1>
      <input
        type="text"
        placeholder="Enter a task..."
        onChange={handleInput}
        value={newTask}
      />
      <button className="addButton" onClick={() => handleAdd()}>
        Add
      </button>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="deleteButton"
                onClick={() => handleDelete(index)}>
                <BsTrash />
              </button>
              <button
                className="moveButton"
                onClick={() => handleMoveUP(index)}>
                <FaRegHandPointUp />
              </button>
              <button
                className="moveButton"
                onClick={() => handleMoveDown(index)}>
                <FaRegHandPointDown />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ToDolist;
