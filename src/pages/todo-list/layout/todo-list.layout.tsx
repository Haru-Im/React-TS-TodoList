import { FC, ReactNode } from "react";
import styled from "styled-components";
import Rive, {
  Layout as RiveLayout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";

type TodoListLayoutProps = {
  children: ReactNode;
};

export const TodoListLayout: FC<TodoListLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <InnerContainer>{children}</InnerContainer>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: auto;
  width: 800px;
  zindex: 999;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
