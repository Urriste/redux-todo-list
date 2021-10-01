import { React, Fragment } from "react";
import "./todoItem.scss";

import { useDispatch } from "react-redux";

import { deleteTodo } from "../../redux/actions";

function TodoItem({ todoItem }) {
  const dispatch = useDispatch();

  const handleDeleteTodo = (e) => {
    dispatch(deleteTodo(deleteTodo(todoItem)));
  };

  return (
    <Fragment>
      <div className="todo-item">
        <input type="checkbox" name="" id="" autocomplete="off" />
        <p>{todoItem.todo}</p>
        <button onClick={handleDeleteTodo}>X</button>
      </div>
    </Fragment>
  );
}

export default TodoItem;
