import { useTodoInput } from '@/hooks';

const Todo = () => {
  const { inputValue, handleInputValue, resetInputValue } = useTodoInput();

  const addTodo = () => {
    /** todo 추가 로직 */
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
      <button onClick={addTodo}>등록</button>
    </>
  );
};

export default Todo;
