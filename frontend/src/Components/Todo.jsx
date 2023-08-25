import React, { useEffect } from 'react'
import axios from 'axios'
import AddTodo from './AddTodo'
import './Addtodo.css'

function Todo() {
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/todo')
        .then((res)=>{
            console.log(res.data)
        })
        .catch((e)=>{
            console.log(e)
        },[])
    })
  return (
    <div className='container'>
      <h1 className='head'>What do you want to get done today ?</h1>
      <AddTodo />
    </div>
  )
}

export default Todo
