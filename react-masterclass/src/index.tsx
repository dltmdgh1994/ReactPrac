import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import App from "./App";
import TypescriptPrac from "./TypescriptPrac";
import StyledComponents from "./StyledComponentsPrac";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
