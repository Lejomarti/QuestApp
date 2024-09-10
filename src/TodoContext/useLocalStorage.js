import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        console.log("se cargo");
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    },2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

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
