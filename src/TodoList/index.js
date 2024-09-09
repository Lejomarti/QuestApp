import "./TodoList.css"

function TodoList({children}) {
    return (
        <ul id="todo-list">
            {children}
        </ul>
    );
  }

  export { TodoList }

  