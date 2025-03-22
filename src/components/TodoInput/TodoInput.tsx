import { IUseTodoInputReturns } from '@/hooks';

import * as Styled from './TodoInput.styles';

interface ITodoInputProps extends IUseTodoInputReturns {
  addTodo: (value: string) => void;
}

const TodoInput = ({ inputValue, handleInputValue, resetInputValue, addTodo }: ITodoInputProps) => {
  const createTodo = (value: string) => {
    if (value.trim() === '') {
      alert('값을 입력해주세요!');
      return;
    }
    resetInputValue();
    addTodo(value);
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>my todo</Styled.Title>
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
