import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/button.jsx';
import Input from './components/input';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희연 혜원 혜윤 건 찬민' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (editingId) {
      const currentTodo = todos.find((todo) => todo.id === editingId);
      setEditText(currentTodo ? currentTodo.task : '');
    }
  }, [editingId, todos]);

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
    setEditText('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='todo-form'>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='할 일을 입력하세요'
          className='todo-input'
        />
        <Button type='submit' className='add-button'>
          할 일 등록
        </Button>
      </form>
      <div className='todo-list'>
        {todos.map((todo) => (
          <div key={todo.id} className='todo-item'>
            {editingId !== todo.id && (
              <>
                <p className='todo-id'>{todo.id}</p>
                <p className='todo-task'>{todo.task}</p>
              </>
            )}
            {editingId === todo.id && (
              <>
                <p className='todo-id'>{todo.id}</p>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className='edit-input'
                />
              </>
            )}
            <Button onClick={() => deleteTodo(todo.id)} className='delete-button'>
              삭제하기
            </Button>
            {editingId !== todo.id ? (
              <Button onClick={() => setEditingId(todo.id)} className='edit-button'>
                수정 진행
              </Button>
            ) : (
              <Button onClick={() => updateTodo(editingId, editText)} className='edit-button'>
                수정 완료
              </Button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
