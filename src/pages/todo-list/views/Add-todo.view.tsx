import { FC, useRef, useState } from "react";
import styled from "styled-components";
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
    <Container>
      <Header>하루의 TODOS</Header>
      <InputField>
        <Input
          value={newTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTitle(e.target.value)
          }
          placeholder="Title"
          ref={titleInputRef}
        />
        <Textarea
          value={newDesc}
          placeholder="Description"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNewDesc(e.target.value)
          }
        />
        <Button onClick={handleAdd}>Add</Button>
      </InputField>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 20px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const InputField = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  min-height: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #008cff;
  }
`;
