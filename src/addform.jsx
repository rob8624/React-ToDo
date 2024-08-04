import React, { useState } from 'react'



export default function AddForm({addTask}) {
const [todo, setTodo] = useState('');
  
const handleSubmit = (e) => {
  e.preventDefault();
  if (!todo.trim()) return;

  const newTask = {
    id: self.crypto.randomUUID(),
      date: new Date().toISOString().split('T')[0], 
      task: todo,
      completed: false
  };

  addTask(newTask);
  setTodo('');
  
}

 return (
    <>
    <div className='form--wrapper'>
      <h2>Add Taks</h2>
      <form className='add--form' onSubmit=          
        {handleSubmit}>
          <input type='text' value={todo} onChange=  
          {(e) => setTodo(e.target.value)}></input>
            <input type="submit" value="Add" />
      </form>
    </div>
    </>
  )

}