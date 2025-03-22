interface ITodoInputProps {
  inputValue: string;
  handleInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  createTodo: (value: string) => void;
}

const TodoInput = ({ inputValue, handleInputValue, createTodo }: ITodoInputProps) => {
  return (
    <>
      <span>todo</span>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={inputValue}
        onChange={handleInputValue}
      />
      <button onClick={() => createTodo(inputValue)}>등록</button>
    </>
  );
};

export default TodoInput;
