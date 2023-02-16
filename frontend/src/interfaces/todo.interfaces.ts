import { ReactNode } from "react";

export interface ITodoContext {
  addTodo: (data: Object) => void;
  updateTodo: (todoId: number, updatedTodo: string) => void;
  completeTodo: (todoId: number) => void;
  todoList: Array<ITask>;
}

export interface ITodoProviderProps {
  children: ReactNode;
}

export interface ITask {
  id: number;
  description: string;
  isCompleted: Boolean;
}

export interface IAddTask {
  id: number;
  description: string;
  isCompleted: Boolean;
}

export interface TodoEditProps {
  todo: ITask;
  onSave: (description: string) => void;
  onCancel: () => void;
}

export interface TodoViewProps {
  todo: ITask;
  onEditClick: () => void;
  onCompleteClick: () => void;
}
