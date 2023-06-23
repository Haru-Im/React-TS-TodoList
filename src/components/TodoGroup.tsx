import { ReactNode } from "react";

type TodoGroupProps = {
  children: ReactNode;
};

export const TodoGroup: React.FC<TodoGroupProps> = ({ children }) => {
  return (
    <div style={{ border: "1px solid green" }}>
      <h1>Status Group</h1>
      <div>{children}</div>
    </div>
  );
};
