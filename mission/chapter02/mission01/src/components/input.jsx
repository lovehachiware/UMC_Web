import React from 'react';
import { useTodoContext } from '../context/TodoContext'; // Context 사용

function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

// 새로운 입력 컴포넌트
export const TodoInput = () => {
  const { todos, setTodos, text, setText } = useTodoContext();

  const handleAddTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), task: text }]);
    setText('');
  };

  return (
    <Input
      placeholder="할 일을 입력하세요"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="todo-input"
    />
  );
};

export default Input;
