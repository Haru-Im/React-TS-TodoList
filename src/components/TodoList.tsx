import { useState } from "react";
import { Todo } from "./Todo";
import { TodoGroup } from "./TodoGroup";
import { AddTodo } from "./AddTodo";

const todoList = [
  { id: 0, title: "first", desc: "hihihi", isDone: false },
  { id: 1, title: "second", desc: "asldkjfa", isDone: false },
  { id: 3, title: "third", desc: "aasdsldkjfa", isDone: false },
  { id: 4, title: "fourth", desc: "agaasldkjfa", isDone: false },
];

type TodoType = {
  id: number;
  title: string;
  desc: string;
  isDone: boolean;
};

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(todoList);

  const doneTodos = todos.filter((e) => e.isDone);
  const notDoneTodos = todos.filter((e) => !e.isDone);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const handleToggleStatus = (e: TodoType) => {
    const changedStatus = { ...e, isDone: !e.isDone };
    setTodos(todos.map((todo) => (todo.id === e.id ? changedStatus : todo)));
  };

  return (
    <div style={{ display: "flex", padding: 50, border: "1px solid black" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AddTodo todos={todos} setTodos={setTodos} />
        <br />
        <div style={{ display: "flex" }}>
          <TodoGroup isInProgress={true}>
            {notDoneTodos.map((e) => (
              <Todo
                todo={e}
                key={e.id}
                onDelete={handleDelete}
                onToggle={handleToggleStatus}
              />
            ))}
          </TodoGroup>

          <TodoGroup isInProgress={false}>
            {doneTodos.map((e) => (
              <Todo
                todo={e}
                key={e.id}
                onDelete={handleDelete}
                onToggle={handleToggleStatus}
              />
            ))}
          </TodoGroup>
        </div>
      </div>
    </div>
  );
};
