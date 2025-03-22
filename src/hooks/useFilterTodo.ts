import { useState } from 'react';
import { ITodo } from './useTodoList';

export type FilterType = '전체' | '완료' | '미완료';

export const useFilterTodo = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('전체');

  const handleFilterOption = (option: FilterType) => {
    setActiveFilter(option);
  };

  const filterOptions: FilterType[] = ['전체', '미완료', '완료'];

  const getFilteredTodo = (todos: ITodo[], filter: FilterType) => {
    if (filter === '완료') {
      return todos.filter((todo) => todo.isCompleted);
    }
    if (filter === '미완료') {
      return todos.filter((todo) => !todo.isCompleted);
    }
    return todos;
  };

  return {
    activeFilter,
    filterOptions,
    handleFilterOption,
    getFilteredTodo,
  };
};
