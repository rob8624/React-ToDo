import React, { useState } from 'react'
import TaskList from './tasks';



export default function AddForm({addTask, tasks, active, adding}) {
const [todo, setTodo] = useState('');
  
const handleSubmit = (e) => {
  e.preventDefault();
  adding()
  if (!todo.trim()) return;

  const newTask = {
      id: tasks.length + 1,
      date: new Date().toISOString().split('T')[0], 
      task: todo,
      completed: false
  };

  addTask(newTask);
  setTodo('');
  active(prevState => !prevState)
  
  
}

 return (
    <>
    <div className='form--wrapper'>
      <h2>Add Taks</h2>
      <form className='add--form' onSubmit=          
        {handleSubmit}>
          <input type='text' value={todo} onChange=  
          {(e) => setTodo(e.target.value)}></input>
            <input type="submit" disabled={!todo.trim()} value="Add"/>
      </form>
    </div>
    </>
  )

}