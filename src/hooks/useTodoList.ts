import { useState } from 'react';

export interface ITodo {
  id: number;
  content: string;
  isCompleted: boolean;
}

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodo = (content: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        content,
        isCompleted: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    );
  };

  return { todoList, addTodo, toggleTodo };
};
