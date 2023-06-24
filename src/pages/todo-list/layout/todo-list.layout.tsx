import { FC, ReactNode } from "react";

type TodoListLayoutProps = {
  children: ReactNode;
};

export const TodoListLayout: FC<TodoListLayoutProps> = ({ children }) => {
  return (
    <div
      className="layout"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 50,
        border: "1px solid black",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
};
