import styled from "styled-components";

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
    <TodoItem key={todo.id}>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoDescription>{todo.desc}</TodoDescription>
      <ButtonContainer>
        <ToggleButton onClick={() => onToggle(todo)} isDone={todo.isDone}>
          {todo.isDone ? "취소" : "완료"}
        </ToggleButton>
        <DeleteButton onClick={() => onDelete(todo.id)}>X</DeleteButton>
      </ButtonContainer>
    </TodoItem>
  );
};

const TodoItem = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
  }
`;

const TodoTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const TodoDescription = styled.p`
  color: #757575;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #89cff0;
`;

const ToggleButton = styled(Button)<{ isDone: boolean }>`
  background-color: ${(props) => (props.isDone ? "#B2DFEE" : "#87CEFA")};
`;
