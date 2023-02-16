import styled from "styled-components";

export const TasksInput = styled.input`
  width: 372px;
  height: 25px;
  padding: 5px;

  border-radius: 8px;
  border: 1px solid black;
`;

export const AddButton = styled.button`
  width: 380px;
  height: 25px;

  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #e4e4e4;

  &:hover {
    background: #1f871f;
  }
`;
