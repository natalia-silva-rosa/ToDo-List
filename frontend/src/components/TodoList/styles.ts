import styled from "styled-components";

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  gap: 15px;

  .checked {
    color: red;
    text-decoration: line-through;
  }
`;

export const TodoDiv = styled.div`
  display: flex;
  align-items: center;

  input {
    position: absolute;
    color: #6e6c6c;
    cursor: pointer;
  }

  label {
    display: flex;
    width: 262px;

    border-radius: 8px;
    border: 1px solid black;
    margin-left: 25px;
    border: none;
    background: #e4e4e4;

    padding: 5px 5px 5px 10px;
    align-items: center;

    &:hover {
      background: #cbc9c9;
    }
  }
  .completed {
    color: red;
    text-decoration: line-through;
  }
`;

export const TodoEditDiv = styled.div`
  display: flex;
  gap: 5px;

  input {
    border-radius: 5px;
  }

  button {
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .save {
    color: #1f871f;
  }

  .cancel {
    color: red;
  }
`;
