import React from "react";
import "../List/List.css";
import Todo from "../Todo/Todo";

const List = ({ todos, setTodos, filteredTodos }) => {
  return (
    <>
      <ul className="todo__list">
        {filteredTodos.map((item, index) => (
          <Todo
            text={item.text}
            key={index}
            todos={todos}
            setTodos={setTodos}
            todo={item}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
