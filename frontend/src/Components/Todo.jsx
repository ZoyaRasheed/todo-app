import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddTodo from './AddTodo'
import './Addtodo.css'

function Todo() {

  return (
    <div className='container'>
      <h1 className='head'>What do you want to get done today ?</h1>
      <AddTodo />
    </div>
  )
}

export default Todo
