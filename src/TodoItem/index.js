function TodoItem(props) {

  function handleDelete(){
    const isConfirmed = window.confirm("Are you sure you want to delete this quest?");
    if (isConfirmed) {
      props.onDelete();
    }
  };
  

  return (
    <li className={`todo-item ${props.completed && "todo-item--complete"}`}>
      <p>{props.text}</p>
      <div
        className={`todo-item-buttons ${
          props.completed && "todo-item-buttons--complete"
        }`}
      >
        <button className="complete-btn" onClick={props.onComplete}>
          Complete
        </button>
        <button className="delete-btn"
         onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

export { TodoItem };
