import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TasksInput, AddButton } from "./styles";

export const AddTodoInput = () => {
  const { addTodo } = useContext(TodoContext);

  const [newTodo, setNewTodo] = useState<string>("");

  return (
    <div className="addTodo_div">
      <TasksInput
        type="text"
        placeholder="Adicione uma tarefa"
        onChange={(e) => setNewTodo(e.target.value)}
      ></TasksInput>
      <AddButton onClick={() => addTodo(newTodo)}> Adicionar</AddButton>
    </div>
  );
};
