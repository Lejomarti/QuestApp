import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
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
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedQuest,
        totalQuest,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeAQuest,
        deleteAQuest,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
