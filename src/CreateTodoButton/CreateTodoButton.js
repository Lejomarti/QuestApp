import { TodoContext } from "../TodoContext";
import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton() {

  return (
    <button
      className="create-todo-button"
      onClick={(event) => {
        console.log("dfdfgf");
        console.log(event.target);
      }}
    >
      Create New Quest
    </button>
  );
}
export { CreateTodoButton };
