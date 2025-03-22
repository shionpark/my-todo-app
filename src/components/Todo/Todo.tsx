import { useFilterTodo, useTodoInput, useTodoList } from '@/hooks';

import { TodoItem } from '../TodoItem';
import { TodoInput } from '../TodoInput';

import * as Styled from './Todo.styles';

const Todo = () => {
  const { resetInputValue, ...todoInputProps } = useTodoInput();
  const { todoList, addTodo, toggleTodo, removeTodo } = useTodoList();

  const createTodo = (value: string) => {
    addTodo(value);
    resetInputValue();
  };

  const { filterOptions, activeFilter, handleFilterOption, getFilteredTodo } = useFilterTodo();
  const filteredTodoList = getFilteredTodo(todoList, activeFilter);

  return (
    <Styled.Wrapper>
      <Styled.TodoSection>
        <TodoInput {...todoInputProps} createTodo={createTodo} />

        <Styled.ButtonsWrapper>
          {filterOptions.map((option, index) => (
            <Styled.FilterButton
              key={index}
              isActive={option === activeFilter}
              onClick={() => handleFilterOption(option)}
            >
              {option}
            </Styled.FilterButton>
          ))}
        </Styled.ButtonsWrapper>

        <Styled.TodoListSection>
          {filteredTodoList.map((todo) => (
            <TodoItem
              id={todo.id}
              content={todo.content}
              isCompleted={todo.isCompleted}
              activeFilter={activeFilter}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
        </Styled.TodoListSection>
      </Styled.TodoSection>
    </Styled.Wrapper>
  );
};

export default Todo;
