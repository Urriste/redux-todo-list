export const todoReducer = (state = { todo: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todo: [...state.todo, { todo: action.payload, id: action.id }] };
    case "DELETE_TODO":
      return {
        todo: state.todo.filter(
          (item) => item.id !== action.payload.payload.id
        ),
      };

    default:
      return state;
  }
};
