import React from "react";
import "./QuestForm.css";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import blankieStickers from "../App/blankie_stickers.png";

function QuestForm() {
  const { addQuest } = React.useContext(TodoContext);
  const [newQuestTextAreaValue, setNewQuestTextAreaValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addQuest(newQuestTextAreaValue);
  };

  const onErase = (event) => {
    event.preventDefault();
    const formBox = event.target.closest(".form-box");
    const textArea = formBox.querySelector("textarea");
    textArea.value = "";
  };

  const onChange = (event) => {
    setNewQuestTextAreaValue(event.target.value);
  };

  return (
    <div className="box-container">
      <img id="blankieStickers" src={blankieStickers} />
      <form className="form-box" onSubmit={onSubmit}>
        <div className="form-box-content">
          <h1 className="form-create-quest-text title">Create a new quest</h1>
          <textarea
            id="quest-textArea"
            placeholder="Write a new quest"
            value={newQuestTextAreaValue}
            onChange={onChange}
          />
          <div className="buttons-container">
            <CreateTodoButton type="submit" />
            <button type="button" className="erase-button" onClick={onErase}>
              Erase
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { QuestForm };
