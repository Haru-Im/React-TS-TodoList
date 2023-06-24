import { FC } from "react";
import { TodoType } from "../../../types";
import { Todo } from "../components";

type TodoListBoxViewProps = {
  doneTodos: TodoType[];
  notDoneTodos: TodoType[];
  deleteTodo: (id: number) => void;
  changeTodoStatus: (id: TodoType) => void;
};

export const TodoListBoxView: FC<TodoListBoxViewProps> = ({
  doneTodos,
  notDoneTodos,
  deleteTodo,
  changeTodoStatus,
}) => {
  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleToggleStatus = (id: TodoType) => {
    changeTodoStatus(id);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ border: "1px solid green" }}>
        <h1>{"진행중"}</h1>
        <div>
          {notDoneTodos.map((e) => (
            <Todo
              todo={e}
              key={e.id}
              onDelete={handleDelete}
              onToggle={handleToggleStatus}
            />
          ))}
        </div>
      </div>
      <div style={{ border: "1px solid green" }}>
        <h1>{"다끝남"}</h1>
        <div>
          {doneTodos.map((e) => (
            <Todo
              todo={e}
              key={e.id}
              onDelete={handleDelete}
              onToggle={handleToggleStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
