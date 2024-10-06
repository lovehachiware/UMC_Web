import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희연 혜원 혜윤 건 찬민' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(''); // 수정 상태를 관리하는 ID
  const [editText, setEditText] = useState(''); // 수정 중인 텍스트 상태

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출의 기본 동작(새로고침)을 막음
    addTodo();
  };

  // 1. 추가하기
  const addTodo = () => {
    if (!text.trim()) return; // 빈 값은 추가하지 않도록 조건 추가
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정 상태 변경 시 수정 텍스트 설정
  useEffect(() => {
    if (editingId) {
      const currentTodo = todos.find((todo) => todo.id === editingId);
      setEditText(currentTodo ? currentTodo.task : '');
    }
  }, [editingId, todos]);

  // 4. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
    setEditText(''); // 수정이 완료되면 editText도 초기화
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text} // 값 참조 방식 수정
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>할 일 등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex', gap: '20px' }}>
            {/* 수정 아닐 때 */}
            {editingId !== todo.id && (
              <div key={todo.id} style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}</p>
                <p>{todo.task}</p>
              </div>
            )}

            {/* 수정 상태일 때 */}
            {editingId === todo.id && (
              <div key={todo.id} style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}</p>
                <input
                  value={editText} // defaultValue -> value로 변경하여 상태와 동기화
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}

            <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>

            {/* 수정 버튼 및 완료 버튼 */}
            {editingId !== todo.id ? (
              <button onClick={() => setEditingId(todo.id)}>수정 진행</button>
            ) : (
              <button onClick={() => updateTodo(editingId, editText)}>
                수정 완료
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
