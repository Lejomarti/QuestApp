import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

// localStorage.removeItem("QUEST_V1")
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
  const {
    item: quest,
    saveItem: saveQuests,
    loading,
    error,
  } = useLocalStorage("QUESTS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedQuest = quest.filter((todo) => !!todo.completed).length;
  const totalQuest = quest.length;

  const searchedTodos = quest.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeAQuest = (text) => {
    const newQuests = [...quest];
    const todoIndex = newQuests.findIndex((todo) => todo.text === text);
    newQuests[todoIndex].completed
      ? (newQuests[todoIndex].completed = false)
      : (newQuests[todoIndex].completed = true);
    saveQuests(newQuests);
  };

  const deleteAQuest = (text) => {
    const newQuests = [...quest];
    const todoIndex = newQuests.findIndex((todo) => todo.text === text);
    newQuests.splice(todoIndex, 1);
    saveQuests(newQuests);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedQuest={completedQuest}
      totalQuest={totalQuest}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeAQuest={completeAQuest}
      deleteAQuest={deleteAQuest}
    />
  );
}

export default App;
