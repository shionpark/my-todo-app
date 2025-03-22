import { useTodoInput, useTodoList } from '@/hooks';

import { TodoItem } from '../TodoItem';
import { TodoInput } from '../TodoInput';

const Todo = () => {
  const { resetInputValue, ...todoInputProps } = useTodoInput();

  const { todoList, addTodo, toggleTodo } = useTodoList();

  const createTodo = (value: string) => {
    addTodo(value);
    resetInputValue();
  };

  return (
    <>
      <TodoInput {...todoInputProps} createTodo={createTodo} />
      <div>
        {todoList.map((todo) => (
          <TodoItem
            id={todo.id}
            content={todo.content}
            isCompleted={todo.isCompleted}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    </>
  );
};

export default Todo;
