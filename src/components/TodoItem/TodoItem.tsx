import { ITodo } from '@/hooks';

import * as Styled from './TodoItem.styles';

interface ITodoItemProps extends ITodo {
  toggleTodo: (id: number) => void;
}

const TodoItem = ({ id, content, isCompleted, toggleTodo }: ITodoItemProps) => {
  return (
    <Styled.Wrapper key={id}>
      <Styled.Item>
        <span>{content}</span>
        <input type="checkbox" checked={isCompleted} onClick={() => toggleTodo(id)} />
        {/* {isCompleted ? '완료' : '미완료'} */}
      </Styled.Item>
    </Styled.Wrapper>
  );
};

export default TodoItem;
