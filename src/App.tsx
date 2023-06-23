import React from "react";
import { GlobalStyle } from "./styles";
import { TodoList } from "./components";
import { TodoListContainer } from "./pages";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <TodoListContainer />
    </React.Fragment>
  );
};
