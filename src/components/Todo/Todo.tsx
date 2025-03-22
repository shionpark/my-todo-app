import { useTodoInput, useTodoList } from '@/hooks';

const Todo = () => {
  const { inputValue, handleInputValue, resetInputValue } = useTodoInput();

  const { todoList, addTodo, toggleTodo } = useTodoList();

  const createTodo = (value: string) => {
    addTodo(value);
    resetInputValue();
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={inputValue}
        onChange={handleInputValue}
      />
      <button onClick={() => createTodo(inputValue)}>등록</button>

      <div>
        {todoList.map((todo) => (
          <div key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.content}
            {todo.isCompleted ? '완료' : '미완료'}
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
