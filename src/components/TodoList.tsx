import { useState } from "react";
import { Todo } from "./Todo";
import { TodoGroup } from "./TodoGroup";

const todoList = [
  { id: 0, title: "first", desc: "hihihi", isDone: false },
  { id: 1, title: "second", desc: "asldkjfa", isDone: false },
  { id: 3, title: "third", desc: "aasdsldkjfa", isDone: false },
  { id: 4, title: "fourth", desc: "agaasldkjfa", isDone: false },
];

type Todo = {
  id: number;
  title: string;
  desc: string;
  isDone: boolean;
};

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState(todoList);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDesc, setNewDesc] = useState<string>("");

  const doneTodos = todos.filter((e) => e.isDone === true);
  const notDoneTodos = todos.filter((e) => e.isDone === false);

  const handleAdd = () => {
    if (newTitle.trim().length !== 0 && newDesc.trim().length !== 0) {
      setTodos([
        ...todos,
        {
          id: Number(new Date()),
          title: newTitle,
          desc: newDesc,
          isDone: false,
        },
      ]);
      setNewTitle("");
      setNewDesc("");
      return;
    } else {
      alert("The message field cannot be empty.");
      return;
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const handleToggleStatus = (e: Todo) => {
    const changedStatus = { ...e, isDone: e.isDone ? false : true };
    setTodos(todos.map((todo) => (todo.id === e.id ? changedStatus : todo)));
  };

  return (
    <div style={{ display: "flex", padding: 50, border: "1px solid black" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          placeholder="Description"
        />
        <button onClick={handleAdd}>Add</button>
        <TodoGroup>
          {doneTodos.map((e) => (
            <Todo
              todo={e}
              key={e.id}
              onDelete={handleDelete}
              onToggle={handleToggleStatus}
            />
          ))}
        </TodoGroup>
        <TodoGroup>
          {notDoneTodos.map((e) => (
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
  );
};
