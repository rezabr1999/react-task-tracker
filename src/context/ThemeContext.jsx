import { createContext, useContext, useReducer } from "react";
import { ThemeReducer } from "../reducer/ThemeReducer";

const themeContext = createContext();
const themeDispatchContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, themeDispatcher] = useReducer(ThemeReducer, "light");
  return (
    <themeContext.Provider value={theme}>
      <themeDispatchContext.Provider value={themeDispatcher}>
        {children}
      </themeDispatchContext.Provider>
    </themeContext.Provider>
  );
}

export function useTheme() {
  return useContext(themeContext);
}

export function useThemeDispatch() {
  return useContext(themeDispatchContext);
}
