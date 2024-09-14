import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import "./App.css";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { QuestForm } from "../QuestForm";
import React from "react";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const { loading, error, searchedTodos, completeAQuest, deleteAQuest } =
    React.useContext(TodoContext);

  return (
    <>
      <div className="App">
        <div className="create-quest-side">
          <QuestForm/>
        </div>

        <div className="quest-side">
          <h1 className="title">Quest</h1>
          <div className="quest-list-container">
            <TodoCounter />
            <TodoSearch />

            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {!loading && searchedTodos.length == 0 && <EmptyTodos />}
              {searchedTodos.map((todo) => (
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
        </div>
      </div>
    </>
  );
}

export { AppUI };
