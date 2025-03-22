import * as Styled from './TodoInput.styles';

interface ITodoInputProps {
  inputValue: string;
  handleInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  createTodo: (value: string) => void;
}

const TodoInput = ({ inputValue, handleInputValue, createTodo }: ITodoInputProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>todo</Styled.Title>
      <Styled.Input
        type="text"
        placeholder="할 일을 입력하세요."
        value={inputValue}
        onChange={handleInputValue}
      />
      <Styled.StyledButton onClick={() => createTodo(inputValue)}>등록</Styled.StyledButton>
    </Styled.Wrapper>
  );
};

export default TodoInput;
