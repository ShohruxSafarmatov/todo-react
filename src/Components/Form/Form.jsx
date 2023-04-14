import React from "react";
import "../Form/Form.css";

const Form = ({ setInputValue, inputValue, todos, setTodos, setStatus }) => {
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        completed: false,
        text: inputValue,
        id: Math.floor(Math.random() * 100),
      },
    ]);
  };

  const selectHandler = (evt) => {
    setStatus(evt.target.value);
  };

  return (
    <>
      <form className="todo__form" onSubmit={formSubmitHandler}>
        <div className="todo__form-box">
          <input
            className="todo__input"
            onChange={inputHandler}
            type="text"
            placeholder="Text..."
            required
          />
          <button className="todo__submit-btn" type="submit">
            <i className="bx bx-plus-medical"></i>
          </button>
        </div>

        <div className="todo__select-box">
          <select onChange={selectHandler} className="todo__select">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
