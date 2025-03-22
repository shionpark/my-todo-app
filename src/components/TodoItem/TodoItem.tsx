import { ITodo } from '@/hooks';

interface ITodoItemProps extends ITodo {
  toggleTodo: (id: number) => void;
}

const TodoItem = ({ id, content, isCompleted, toggleTodo }: ITodoItemProps) => {
  return (
    <>
      <span>{content}</span>
      <input type="checkbox" checked={isCompleted} onClick={() => toggleTodo(id)} />
      {isCompleted ? '완료' : '미완료'}
    </>
  );
};

export default TodoItem;
