import React, { useEffect } from 'react'
import axios from 'axios'
import AddTodo from './AddTodo'

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
    <div>
      <h1>What do you want to get done today ?</h1>
      <AddTodo />
    </div>
  )
}

export default Todo
