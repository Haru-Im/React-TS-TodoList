import { useRef, useState } from "react";

type TodoType = {
  id: number;
  title: string;
  desc: string;
  isDone: boolean;
};

type AddTodoProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export const AddTodo: React.FC<AddTodoProps> = ({ todos, setTodos }) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDesc, setNewDesc] = useState<string>("");

  const titleInputRef = useRef<HTMLInputElement>(null);

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
      titleInputRef.current?.focus();
      return;
    } else {
      alert("The message field cannot be empty.");
    }
  };

  return (
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
  );
};
