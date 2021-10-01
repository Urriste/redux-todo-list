let todoId = 0;
export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload: payload,
    id: todoId++,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: "DELETE_TODO",
    payload: payload,
  };
};

export const deleteAllTodos = () => {
  return {
    type: "DELETE_ALL_TODOS",
  };
};
