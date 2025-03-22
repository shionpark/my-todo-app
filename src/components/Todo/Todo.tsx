import { useFilterTodo, useTodoInput, useTodoList } from '@/hooks';

import { TodoItem } from '../TodoItem';
import { TodoInput } from '../TodoInput';

import * as Styled from './Todo.styles';

const Todo = () => {
  const { todoList, addTodo, toggleTodo, removeTodo } = useTodoList();
  const todoInputProps = useTodoInput();

  const { filterOptions, activeFilter, handleFilterOption, getFilteredTodo } = useFilterTodo();
  const filteredTodoList = getFilteredTodo(todoList, activeFilter);

  return (
    <Styled.Wrapper>
      <Styled.TodoSection>
        <TodoInput {...todoInputProps} addTodo={addTodo} />

        <Styled.ButtonsWrapper>
          {filterOptions.map((option, index) => (
            <Styled.FilterButton
              key={index}
              isActive={option === activeFilter}
              onClick={() => handleFilterOption(option)}
            >
              <div>
                <span>{option}</span>
                <span>{getFilteredTodo(todoList, option).length}</span>
              </div>
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
