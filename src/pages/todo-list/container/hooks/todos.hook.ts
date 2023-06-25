import { useEffect, useLayoutEffect, useState } from "react";
import { TodoType } from "../../../../types";
import axios from "axios";

export const useTodos = () => {
  // 프론트에서 상태관리
  const [todos, setTodos] = useState<TodoType[]>([]);
  const doneTodos = todos.filter((e) => e.isDone);
  const notDoneTodos = todos.filter((e) => !e.isDone);

  const addTodo = (title: string, desc: string) => {
    axios
      .post(`${process.env.REACT_APP_TODOS}/todos`, {
        // id: Number(new Date()),
        title: title,
        desc: desc,
        isDone: false,
      })
      .then((res) => {
        console.log(res.data);
        setTodos([...todos, res.data]);
      })
      .catch((error) => console.error("Error:", error));

    // setTodos([
    //   ...todos,
    //   {
    //     id: Number(new Date()),
    //     title: title,
    //     desc: desc,
    //     isDone: false,
    //   },
    // ]);
  };

  const deleteTodo = async (id: number) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_TODOS}/todos/${id}`
      );
      console.log(response.data);
      setTodos(todos.filter((e) => e.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const changeTodoStatus = async (e: TodoType) => {
    const changedStatus = { ...e, isDone: !e.isDone };

    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_TODOS}/todos/${e.id}`,
        {
          isDone: changedStatus.isDone,
        }
      );
      if (response.status === 200) {
        setTodos(
          todos.map((todo) => (todo.id === e.id ? changedStatus : todo))
        );
      } else {
        throw new Error("Failed to update the status on the server.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // json-server 사용시

  useEffect(() => {
    console.log(process.env.REACT_APP_TODOS);
    const getTodos = async () => {
      const response = await axios.get(`${process.env.REACT_APP_TODOS}/todos`);
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
