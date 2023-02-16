import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { IAddTask, ITodoContext } from "../interfaces/todo.interfaces";
import { ITodoProviderProps } from "../interfaces/todo.interfaces";
import { api } from "../services/api";
import { ITask } from "../interfaces/todo.interfaces";

export const TodoContext = createContext({} as ITodoContext);

export const TodoProvider = ({ children }: ITodoProviderProps) => {
  const [todoList, setTodoList] = useState<Array<ITask>>([]);
  const [completeTask, setCompleteTask] = useState<Boolean>(false);

  const addTodo = async (data: Object) => {
    const response = await api.post<ITask>("/tasks/", { description: data });
    setTodoList([...todoList, response.data]);
    console.log(response);
  };

  const updateTodo = async (todoId: number, updatedTodo: string) => {
    const response = await api.patch<ITask>(`/tasks/${todoId}/`, {
      description: updatedTodo,
    });
    const updatedTodoList = todoList.map((todo) =>
      todo.id === todoId ? response.data : todo
    );
    setTodoList(updatedTodoList);
  };

  const completeTodo = async (todo_id: number) => {
    setCompleteTask(!completeTask);

    const response = await api.patch<ITask>(`/tasks/${todo_id}/`, {
      isCompleted: completeTask,
    });
    const updatedTodoList = todoList.map((todo) =>
      todo.id === todo_id ? response.data : todo
    );
    setTodoList(updatedTodoList);
  };

  return (
    <TodoContext.Provider
      value={{ addTodo, updateTodo, todoList, completeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
