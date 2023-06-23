import { useState } from "react";
import { TodoType } from "../types";

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const doneTodos = todos.filter((e) => e.isDone);
  const notDoneTodos = todos.filter((e) => !e.isDone);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const changeTodoStatus = (e: TodoType) => {
    const changedStatus = { ...e, isDone: !e.isDone };
    setTodos(todos.map((todo) => (todo.id === e.id ? changedStatus : todo)));
  };

  return {
    todos,
    deleteTodo,
    changeTodoStatus,
    doneTodos,
    notDoneTodos,
    setTodos,
  };
};
