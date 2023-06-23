import { AddTodo, Todo, TodoGroup, TodoList } from "../../../components";
import { useTodos } from "../../../hooks";
import { TodoType } from "../../../types";

export const TodoListContainer = () => {
  const {
    todos,
    deleteTodo,
    changeTodoStatus,
    doneTodos,
    notDoneTodos,
    setTodos,
  } = useTodos();

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleToggleStatus = (id: TodoType) => {
    changeTodoStatus(id);
  };

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
      <h1>나의 TODOS</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AddTodo todos={todos} setTodos={setTodos} />
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
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
          <div style={{ padding: 20 }}></div>
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
