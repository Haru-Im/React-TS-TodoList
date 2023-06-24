import { FC } from "react";
import styled from "styled-components";
import { TodoType } from "../../../types";
import { Cat, Tentacle, Todo } from "../components";

type TodoListBoxViewProps = {
  doneTodos: TodoType[];
  notDoneTodos: TodoType[];
  deleteTodo: (id: number) => void;
  changeTodoStatus: (id: TodoType) => void;
};

export const TodoListBoxView: FC<TodoListBoxViewProps> = ({
  doneTodos,
  notDoneTodos,
  deleteTodo,
  changeTodoStatus,
}) => {
  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleToggleStatus = (id: TodoType) => {
    changeTodoStatus(id);
  };

  return (
    <Container>
      <Box>
        <Title>{"📌 In Progress"}</Title>
        {notDoneTodos.length > 0 ? (
          notDoneTodos.map((e) => (
            <Todo
              todo={e}
              key={e.id}
              onDelete={handleDelete}
              onToggle={handleToggleStatus}
            />
          ))
        ) : (
          <Cat />
        )}
      </Box>
      <Box>
        <Title>{"🗑️ Done"}</Title>
        {doneTodos.length > 0 ? (
          doneTodos.map((e) => (
            <Todo
              todo={e}
              key={e.id}
              onDelete={handleDelete}
              onToggle={handleToggleStatus}
            />
          ))
        ) : (
          <Tentacle />
        )}
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Box = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;
  min-width: 300px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #4f4f4f;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const Message = styled.p`
  color: #828282;
  text-align: center;
`;
