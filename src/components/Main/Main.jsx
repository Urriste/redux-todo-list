//React Imports
import { React, Fragment, useState, useEffect } from "react";

//Redux Imports

import { useDispatch, useSelector } from "react-redux";

//Internal Imports
import "./main.scss";
import { addTodo } from "../../redux/actions";
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
    dispatch(addTodo(todo));
  };
  return (
    <Fragment>
      <div className="main-container">
        <input
          className="todo-input"
          onChange={handleChange}
          type="text"
          name="todo"
          placeholder="add your todo"
        />
        <button className="todo-btn" onClick={handleAddTodo}>
          add
        </button>

        {todos &&
          todos.todo.map((item) => {
            return <TodoItem key={item.id} todoItem={item}></TodoItem>;
          })}
      </div>
    </Fragment>
  );
}

export default Main;
