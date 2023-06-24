import { FC, useRef, useState } from "react";
import { TodoType } from "../../../types";

type AddTodoViewProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  addTodo: (title: string, desc: string) => void;
};

export const AddTodoView: FC<AddTodoViewProps> = ({ setTodos, addTodo }) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDesc, setNewDesc] = useState<string>("");
  const titleInputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    if (newTitle.trim().length !== 0 && newDesc.trim().length !== 0) {
      addTodo(newTitle, newDesc);
      setNewTitle("");
      setNewDesc("");
      titleInputRef.current?.focus();
      return;
    } else {
      alert("The message field cannot be empty.");
    }
  };

  return (
    <div>
      <h1>나의 TODOS</h1>
      <div>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
          ref={titleInputRef}
        />
        <input
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          placeholder="Description"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};
