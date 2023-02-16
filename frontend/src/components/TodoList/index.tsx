import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoEditProps, TodoViewProps } from "../../interfaces/todo.interfaces";
import { TodoDiv, TodoEditDiv, TasksList } from "./styles";

export const TodoList = () => {
  const { todoList, updateTodo, completeTodo } = useContext(TodoContext);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);

  const handleTodoComplete = (id: number) => {
    completeTodo(id);
  };

  return (
    <TasksList>
      {todoList.map((todo) => {
        const isEditing = editingTodoId === todo.id;

        const handleEditClick = () => setEditingTodoId(todo.id);

        const handleSaveClick = (description: string) => {
          updateTodo(todo.id, description);
          setEditingTodoId(null);
        };

        return (
          <div key={todo.id} className="todo_div">
            {isEditing ? (
              <TodoEdit
                todo={todo}
                onSave={handleSaveClick}
                onCancel={() => setEditingTodoId(null)}
              />
            ) : (
              <TodoView
                todo={todo}
                onEditClick={handleEditClick}
                onCompleteClick={() => handleTodoComplete(todo.id)}
              />
            )}
          </div>
        );
      })}
    </TasksList>
  );
};

const TodoEdit = ({ todo, onSave, onCancel }: TodoEditProps) => {
  const [description, setDescription] = useState(todo.description);

  return (
    <TodoEditDiv>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button className="save" onClick={() => onSave(description)}>
        Salvar
      </button>
      <button className="cancel" onClick={onCancel}>
        Cancelar
      </button>
    </TodoEditDiv>
  );
};

const TodoView = ({ todo, onEditClick, onCompleteClick }: TodoViewProps) => {
  return (
    <TodoDiv>
      <input
        type="checkbox"
        name="checkbox"
        checked={todo.isCompleted.valueOf()}
        onChange={onCompleteClick}
      />
      <label
        onClick={onEditClick}
        className={todo.isCompleted ? "completed" : ""}
      >
        {todo.description}
      </label>
    </TodoDiv>
  );
};
