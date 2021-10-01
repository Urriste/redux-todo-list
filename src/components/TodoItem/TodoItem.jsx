//React Imports
import { React, Fragment } from "react";

//Internal Imports
import "./todoItem.scss";
import { deleteTodo } from "../../redux/actions";
import trashCanImg from "../../img/trash.png";

//Redux Imports
import { useDispatch } from "react-redux";

function TodoItem({ todoItem }) {
  const dispatch = useDispatch();

  const handleDeleteTodo = (e) => {
    dispatch(deleteTodo(deleteTodo(todoItem)));
  };

  return (
    <Fragment>
      <div className="todo-item">
        <div className="todo-text__container">
          <p className="todo-item__text">{todoItem.todo}</p>
        </div>

        <div className="delete-btn__container">
          <img
            onClick={handleDeleteTodo}
            src={trashCanImg}
            className="todo-item__btn"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default TodoItem;
