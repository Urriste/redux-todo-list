//React Imports
import { React, Fragment, useState, useEffect } from "react";

//Redux Imports

import { useDispatch, useSelector } from "react-redux";

//Internal Imports
import "./main.scss";
import { addTodo, deleteAllTodos } from "../../redux/actions";
import TodoItem from "../TodoItem/TodoItem";

function Main() {
  //Util Instances
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);

  //States
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState();

  //Effects and Functions
  useEffect(() => {
    setTodos(todoState);
  }, [todoState]);

  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    let input = document.querySelector("input");

    if (todo) {
      dispatch(addTodo(todo));
      setTodo("");
      input.value = "";
    }
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTodos());
  };

  return (
    <Fragment>
      <div className="main-container">
        <h1>R-TODOLIST</h1>
        <form className="input-container">
          <input
            className="todo-input"
            onChange={handleChange}
            type="text"
            name="todo"
            placeholder="Add your new todo"
            autoComplete="off"
            required
          />
          <button className="todo-btn" onClick={handleAddTodo}>
            +
          </button>
        </form>
        {todos &&
          todos.todo.map((item) => {
            return <TodoItem key={item.id} todoItem={item}></TodoItem>;
          })}{" "}
        {todos
          ? todos.todo.length > 0 && (
              <div className="main-container__footer">
                <p className="footer-text"> {todos.todo.length} Left </p>
                <button className="footer-btn" onClick={handleDeleteAll}>
                  Clear All{" "}
                </button>
              </div>
            )
          : null}
      </div>
    </Fragment>
  );
}

export default Main;
