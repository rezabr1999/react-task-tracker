export const TaskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      const addedItems = [...state, action.task];
      localStorage.setItem("tasks", JSON.stringify(addedItems));
      return addedItems;

    case "delete":
      const deletedItems = state.filter((task) => task.id !== action.task.id);
      localStorage.setItem("tasks", JSON.stringify(deletedItems));
      return deletedItems;

    case "update":
      const updatedItems = state.map((task) =>
        task.id === action.task.id ? action.task : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedItems));
      return updatedItems;

    case "check":
      const checkedItems = state.map((task) =>
        task.id === action.task.id ? { ...task, done: !task.done } : task
      );
      localStorage.setItem("tasks", JSON.stringify(checkedItems));
      return checkedItems;

    default:
      return state;
  }
};
