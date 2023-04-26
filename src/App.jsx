import { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <section className="todo">
        <div className="todo__container">
          <h2 className="todo__title">Todo List</h2>
          <Form
            setInputValue={setInputValue}
            inputValue={inputValue}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
            setFilteredTodos={setFilteredTodos}
          />
          <List
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
