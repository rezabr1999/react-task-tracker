export const TaskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.task];
      break;

    case "delete":
      return state.filter((task) => task.id !== action.id);
      break;

    case "update":
      return state.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
      break;

    default:
      return state;
  }
};
