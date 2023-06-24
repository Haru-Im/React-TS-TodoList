import { useTodos } from "./hooks";
import { TodoListLayout } from "../layout";
import { AddTodoView, TodoListBoxView } from "../views";

export const TodoListContainer = () => {
  const {
    todos,
    deleteTodo,
    changeTodoStatus,
    doneTodos,
    notDoneTodos,
    setTodos,
    addTodo,
  } = useTodos();

  return (
    <TodoListLayout>
      <AddTodoView addTodo={addTodo} setTodos={setTodos} />
      <TodoListBoxView
        deleteTodo={deleteTodo}
        changeTodoStatus={changeTodoStatus}
        doneTodos={doneTodos}
        notDoneTodos={notDoneTodos}
      />
    </TodoListLayout>
  );
};
