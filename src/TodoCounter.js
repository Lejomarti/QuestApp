import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return completed == total ? (
    <h1 id="counter-title" style={{fontSize:24}}>
      {`All ${total} Quest completed`}
    </h1>
  ) : (
    <h1 id="counter-title">
      {completed} / {total}
    </h1>
  );
}

export { TodoCounter };
