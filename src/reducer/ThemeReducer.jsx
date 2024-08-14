export function ThemeReducer(state, action) {
  switch (action.type) {
    case "dark":
      localStorage.setItem("theme", JSON.stringify("dark"));
      return "dark";

    case "light":
      localStorage.setItem("theme", JSON.stringify("light"));
      return "light";

    default:
      return state;
  }
}
