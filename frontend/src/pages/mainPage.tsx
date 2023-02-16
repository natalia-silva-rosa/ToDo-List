import React from "react";
import { AddTodoInput } from "../components/AddTodoInput";
import { TodoList } from "../components/TodoList";
import { MainpageStyled } from "./styles";

export const MainPage = () => {
  return (
    <MainpageStyled>
      <h1>ToDo List</h1>
      <AddTodoInput />
      <TodoList />
    </MainpageStyled>
  );
};
