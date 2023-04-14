import React from "react";

const Todo = ({ text, setTodos, todo, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };
  return (
    <>
      <li className={`todo__item ${todo.completed ? "completed" : ""}`}>
        <p className={`todo__item-text ${todo.completed ? "active" : ""}`}>
          {text}
        </p>
        <div className="todo__item-box">
          <button onClick={completedHandler} className="todo__completed-btn">
            <i className="bx bx-check"></i>
          </button>
          <button onClick={deleteHandler} className="todo__remove-btn">
            <i className="bx bxs-trash-alt"></i>
          </button>
        </div>
      </li>
    </>
  );
};

export default Todo;
