type TodoType = {
  id: number;
  title: string;
  desc: string;
  isDone: boolean;
};

type TodoProps = {
  todo: TodoType;
  onDelete: (id: number) => void;
  onToggle: (todo: TodoType) => void;
};

export const Todo: React.FC<TodoProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div key={todo.id} style={{ border: "1px solid red" }}>
      <h2>{todo.title}</h2>
      <p>{todo.desc}</p>
      <button onClick={() => onDelete(todo.id)}>X</button>
      <button onClick={() => onToggle(todo)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};
