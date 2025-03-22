import { FilterType, ITodo } from '@/hooks';

import * as Styled from './TodoItem.styles';

interface ITodoItemProps extends ITodo {
  activeFilter: FilterType;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem = ({
  id,
  content,
  isCompleted,
  toggleTodo,
  activeFilter,
  removeTodo,
}: ITodoItemProps) => {
  const isShow = isCompleted && activeFilter === '완료';

  const handleRemoveTodo = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();

    if (confirm('완전히 삭제하시겠습니까?')) {
      removeTodo(id);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Item key={id} onClick={() => toggleTodo(id)}>
        <span>{content}</span>
        <Styled.ItemButton>
          <input type="checkbox" checked={isCompleted} />
          {isShow && (
            <button type="button" onClick={(e) => handleRemoveTodo(e, id)}>
              삭제
            </button>
          )}
        </Styled.ItemButton>
      </Styled.Item>
    </Styled.Wrapper>
  );
};

export default TodoItem;
