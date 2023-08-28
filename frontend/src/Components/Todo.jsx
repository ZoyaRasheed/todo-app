import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddTodo from './AddTodo'
import './Addtodo.css'

function Todo() {
  // const [list , setList] = useState([])
  // useEffect(()=>{
  //   axios.get('http://localhost:5000/api/v1/todo')
  //   .then((res)=>
  //   {
  //     console.log(res.data);
  //     setList(res.data)
  //   })
  //   .catch(e =>{
  //     console.erro(e)
  //   })
  // })
  return (
    <div className='container'>
      <h1 className='head'>What do you want to get done today ?</h1>
      <AddTodo />
    </div>
  )
}

export default Todo
