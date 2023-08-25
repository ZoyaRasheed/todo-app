import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Addtodo.css'

function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(''); 


  function handleInputChange(e) {
    setNewTodo(e.target.value);
  }

  const handleAddTodo = () => {
    if (newTodo !== "") {
      axios.post('http://localhost:5000/api/v1/todo', { task: newTodo }) 
        .then((res) => {  
          if (res.data.success) {
            setTodos([...todos, res.data.tasks]);
            setNewTodo('');
          } else {
            console.error(res.data.message);
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder='Add Todo'
        value={newTodo}
        onChange={handleInputChange}
        className='inputStyle'
      />
      <button onClick={handleAddTodo} className='buttonStyle'>Add Todo</button>
      <ul className='listStyle'>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodo;
