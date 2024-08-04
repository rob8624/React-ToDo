import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import TaskList from './tasks';
import AddForm from './addform';
import TaskCounter from './counter'






export function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setshowForm] = useState(false)
  const formRef = useRef(null);
 
  
 
  
  useEffect(() => {
    
    const mockData = [
      {
        id: self.crypto.randomUUID(),
        date: "2023-02-15",
        task: "Learn React",
        completed: false
      },
      {
        id: self.crypto.randomUUID(),
        date: "2023-02-16",
        task : "Bang head against desk",
        completed : true
      },
      {
        id: self.crypto.randomUUID(),
        date: "2023-02-16",
        task : "Think about how to add data",
        completed : true
      },
      {
        id: self.crypto.randomUUID(),
        date: "2023-02-16",
        task : "Book campsite",
        completed : true
      },
     
      
    ];

   setTimeout(() => {setTasks(mockData);}, 1000)
    
  }, []);

  const handleCheckBox = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  
  const handleClick = () => {
    setshowForm(prevState => {
      const show = !prevState
      if(show){
        setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 200)
        return show
      }
    })
  }

  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  const deleteTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task])
  }

  
  function Button({onMessage, offMessage}) {
    return (
      <button  className='add--btn' onClick={handleClick}>
        {showForm ? offMessage: onMessage}</button>
    )
  }

 
  return (
    <div className='App'>
      <div className='container'>
       <div className='header'>
         <Button onMessage={'Add ToDo'} offMessage={'Close Form'}/>
           <TaskCounter total={tasks.length} tasks={tasks}/></div>
        <TaskList tasks={tasks} toggleCheckBox={handleCheckBox}/>
        {showForm ? <div ref={formRef}><AddForm showForm={showForm} addTask={addTask} /></div>:<div></div>}
      </div>
    </div>
  );
}


