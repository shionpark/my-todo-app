import { useTodoInput, useTodoList } from '@/hooks';

import { TodoItem } from '../TodoItem';
import { TodoInput } from '../TodoInput';

import * as Styled from './Todo.styles';

const Todo = () => {
  const { resetInputValue, ...todoInputProps } = useTodoInput();

  const { todoList, addTodo, toggleTodo } = useTodoList();

  const createTodo = (value: string) => {
    addTodo(value);
    resetInputValue();
  };

  return (
    <Styled.Wrapper>
      <Styled.TodoSection>
        <TodoInput {...todoInputProps} createTodo={createTodo} />
        <Styled.TodoListSection>
          {todoList.map((todo) => (
            <TodoItem
              id={todo.id}
              content={todo.content}
              isCompleted={todo.isCompleted}
              toggleTodo={toggleTodo}
            />
          ))}
        </Styled.TodoListSection>
      </Styled.TodoSection>
    </Styled.Wrapper>
  );
};

export default Todo;
