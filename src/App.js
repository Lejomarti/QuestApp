import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";
import "./App.css";

// const defaultTodos = [
//   { text: "Estudiar Kotlin", completed: false },
//   {
//     text: "Descargar Wilcom  y luego aquello y lo otro y mas texto por favor... Siii. masss textooo muajajajaja, que no se rompa.. o hasta que se rompa",
//     completed: true,
//   },
//   { text: "Estudiar React", completed: true },
//   { text: "Estudiar SQL", completed: false },
//   { text: "Estudiar Bordados", completed: false },
//   { text: "construir cultivo hidroponico", completed: false },
//   { text: "hacer la base de datos", completed: false },
//   { text: "hacer la base de datos2", completed: false },
//   { text: "hacer la base de datos3", completed: false },
//   { text: "hacer la base de datos4", completed: false },
//   { text: "hacer la base de datos5", completed: false },
// ];
// localStorage.setItem("QUESTS_V1",JSON.stringify(defaultTodos))

function App() {
  const localStorageQuests = localStorage.getItem("QUESTS_V1");
  let parsedQuests;

  //condicional para crear un array vacio de entrada
  if (!localStorageQuests) {
    localStorage.setItem("QUESTS_V1", JSON.stringify([]));
    parsedQuests = [];
  } else {
    parsedQuests = JSON.parse(localStorageQuests);
  }

  const [searchValue, setSearchValue] = React.useState("");
  const [quest, setQuest] = React.useState(parsedQuests);

  const completedQuest = quest.filter((todo) => !!todo.completed).length;
  const totalQuest = quest.length;

  const searchedTodos = quest.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeAQuest = (text) => {
    const newQuests = [...quest];
    const todoIndex = newQuests.findIndex((todo) => todo.text == text);
    newQuests[todoIndex].completed
      ? (newQuests[todoIndex].completed = false)
      : (newQuests[todoIndex].completed = true);
    setQuest(newQuests);
  };

  const deleteAQuest = (text) => {
    const newQuests = [...quest];
    const todoIndex = newQuests.findIndex((todo) => todo.text == text);
    newQuests.splice(todoIndex, 1);
    setQuest(newQuests);
  };

  return (
    <div className="quest-side">
      <h1 className="title">Quest</h1>
      <div className="quest-list-container">
        <TodoCounter completed={completedQuest} total={totalQuest} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
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

      <CreateTodoButton />
    </div>
  );
}

export default App;
