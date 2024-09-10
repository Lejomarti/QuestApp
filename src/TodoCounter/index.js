import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedQuest,totalQuest } = React.useContext(TodoContext);

  return completedQuest === totalQuest ? (
    <h1 id="counter-title" style={{ fontSize: 24 }}>
      {`All ${totalQuest} Quest completed`}
    </h1>
  ) : (
    <h1 id="counter-title">
      {completedQuest} / {totalQuest}
    </h1>
  );
}

export { TodoCounter };
