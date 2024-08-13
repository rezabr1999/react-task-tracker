export function ThemeReducer(state, action) {
  switch (action.type) {
    case "dark":
      return "dark";

    case "light":
      return "light";

    default:
      return state;
  }
}
