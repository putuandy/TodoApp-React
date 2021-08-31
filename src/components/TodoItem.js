import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsCheckBox } from "react-icons/bs";

function TodoItem({todo, index, completeTodo, deleteTodo}){
    return(
      <div 
        className="col-md-12 todo-content align-items-center justify-content-between"
        style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <span>{todo.text}</span>
        <div className="control-panel">
          <button 
            className="btn btn-completed"
            onClick={()=> completeTodo(index)}>
            <BsCheckBox />
          </button>
          <button 
            className="btn btn-delete"
            onClick={() => deleteTodo(index)}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    )
  }

export default TodoItem