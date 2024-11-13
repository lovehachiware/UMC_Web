import React, { createContext, useContext, useState, useEffect } from 'react';

// Context 생성
const TodoContext = createContext();

// Context를 사용하기 위한 커스텀 훅
export const useTodoContext = () => useContext(TodoContext);

// Provider 컴포넌트
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희연 혜원 혜윤 건 찬민' },
  ]);
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, task: text } : todo))
    );
    setEditingId('');
    setEditText('');
  };

  useEffect(() => {
    if (editingId) {
      const currentTodo = todos.find((todo) => todo.id === editingId);
      setEditText(currentTodo ? currentTodo.task : '');
    }
  }, [editingId, todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        editingId,
        setEditingId,
        editText,
        setEditText,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
