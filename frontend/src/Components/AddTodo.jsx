import React, { useState , useEffect} from 'react';
import axios from 'axios';
import './Addtodo.css'

function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(''); 
  const [searchTodo, setSearchTodo] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    const filtered = todos.filter((todo) =>
      todo.task.toLowerCase().includes(searchTodo.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [searchTodo, todos]);


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

  const handleDeleteTodo = (todoId) =>{
    axios.delete(`http://localhost:5000/api/v1/todo/${todoId}`)
    .then((res) => {
      if (res.data.success) {
        const updatedTodos = todos.filter((todo) => todo._id !== todoId);
        setTodos(updatedTodos);
      } else {
        console.error(res.data.message);
      }
    })
    .catch((e) => {
      console.error(e);
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Add Todo'
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        className='inputStyle'
      />
      <button onClick={handleAddTodo} className='buttonStyle'>Add Todo</button><br />
      <input
        type="text"
        placeholder="Search Todo"
        value={searchTodo}
        onChange={(e) => setSearchTodo(e.target.value)}
        className="inputStyle" 
      
      />
       <button  className='buttonStyle'>Search</button><br />
       <ul className="listStyle">
        {filteredTodos.map((todo) => (
          <li key={todo._id}>
            {todo.task}
            <button
              onClick={() => handleDeleteTodo(todo._id)}
              className="deleteButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodo;
