import { useEffect, useLayoutEffect, useState } from "react";
import { TodoType } from "../types";
import axios from "axios";

export const useTodos = () => {
  // 프론트에서 상태관리
  const [todos, setTodos] = useState<TodoType[]>([]);
  const doneTodos = todos.filter((e) => e.isDone);
  const notDoneTodos = todos.filter((e) => !e.isDone);

  const addTodo = (title: string, desc: string) => {
    axios
      .post("http://localhost:3001/todos", {
        id: Number(new Date()),
        title: title,
        desc: desc,
        isDone: false,
      })
      .then((res) => {
        console.log(res.data);
        setTodos([...todos, res.data]);
      })
      .catch((error) => console.error("Error:", error));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const changeTodoStatus = (e: TodoType) => {
    const changedStatus = { ...e, isDone: !e.isDone };
    setTodos(todos.map((todo) => (todo.id === e.id ? changedStatus : todo)));
  };

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get("http://localhost:3001/todos");
      setTodos(response.data);
    };

    getTodos();
  }, []);

  return {
    todos,
    deleteTodo,
    changeTodoStatus,
    doneTodos,
    notDoneTodos,
    setTodos,
    addTodo,
  };
};
