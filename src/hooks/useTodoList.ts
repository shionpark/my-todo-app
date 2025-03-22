import { useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEY } from '@/constants';
import { getLocalStorage } from '@/utils';

export interface ITodo {
  id: number;
  content: string;
  isCompleted: boolean;
}

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>(getLocalStorage(LOCAL_STORAGE_KEY));

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

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

  const removeTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return { todoList, addTodo, toggleTodo, removeTodo };
};
