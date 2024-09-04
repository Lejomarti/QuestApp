function CreateTodoButton() {
  return (
    <button
      className="create-todo-button"
      onClick={(event) => {
        console.log("le diste click");
        console.log(event.target);
      }}
    >
      Create New Quest
    </button>
  );
}
export { CreateTodoButton };
