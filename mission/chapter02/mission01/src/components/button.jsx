import React from 'react';
import { useTodoContext } from '../context/TodoContext'; // Context 사용

function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

// Add Todo 버튼 추가
export const AddTodoButton = () => {
  const { addTodo } = useTodoContext();
  return <Button onClick={addTodo}>할 일 등록</Button>;
};
export default Button;