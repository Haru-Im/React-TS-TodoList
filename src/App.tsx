import React from "react";
import { GlobalStyle } from "./styles";
import { TodoList } from "./components/TodoList";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <TodoList />
    </React.Fragment>
  );
};
