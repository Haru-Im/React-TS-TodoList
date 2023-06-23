import { ReactNode } from "react";

type TodoGroupProps = {
  isInProgress: boolean;
  children: ReactNode;
};

export const TodoGroup: React.FC<TodoGroupProps> = ({
  isInProgress,
  children,
}) => {
  return (
    <div style={{ border: "1px solid green" }}>
      <h1>{isInProgress ? "진행중" : "다끝남"}</h1>
      <div>{children}</div>
    </div>
  );
};
