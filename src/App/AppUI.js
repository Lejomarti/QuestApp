import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import "./App.css";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

function AppUI({
  // loading,
  // error,
  // completedQuest,
  // totalQuest,
  // searchValue,
  // setSearchValue,
  // searchedTodos,
  // completeAQuest,
  // deleteAQuest,
}) {
  return (
    <div className="quest-side">
      <h1 className="title">Quest</h1>
      <div className="quest-list-container">
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {loading && <TodosLoading/>}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length ==0) && <EmptyTodos/>}


          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeAQuest(todo.text)}
              onDelete={() => deleteAQuest(todo.text)}
            />
          ))}
        </TodoList>
      </div>

      <CreateTodoButton />
    </div>
  );
}

export { AppUI };
