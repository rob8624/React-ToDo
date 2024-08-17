import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import TaskList from './tasks';
import AddForm from './addform';
import TaskCounter from './counter'
import CompleteBtn from './completeBtn'


export function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setshowForm] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [addingTask, setAddingTask] = useState(false);
  const [allcomplete, setAllComplete] = useState(false);
  const formRef = useRef(null);
 
  
  useEffect(() => {

    const storedData =JSON.parse(localStorage.getItem('tasks'))
    
    if(storedData && storedData.length > 0) {
      setTasks(storedData)
    }
                  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleCheckBox = (taskId) => {
   setTasks(prevTasks =>
       prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    console.log(tasks)
  };

  
  const handleClick = () => {
    setAddingTask(!addingTask  )
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


  const editTask = (taskid, input) => {
    console.log(tasks);
    setTasks(prevTasks =>
      prevTasks.map(task => {
        return task.id === taskid ? { ...task, task: input } : task;
      })
    );
  };

  
  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  
  const completeTasks = () => {
    setAllComplete(prevAllComplete => {
      const newAllComplete = !prevAllComplete;
      setTasks(prevTasks =>
        prevTasks.map(task =>
          newAllComplete
            ? { ...task, completed: true }
            : { ...task, completed: false }
        )
      );
      return newAllComplete;
    });
  };

  
  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  }

  
  
  
  function Button({onMessage, offMessage}) {
    return (
       editingTaskId ? <div></div>
      : <button  className='add--btn' onClick={handleClick}>
        {showForm ? offMessage: onMessage}</button>)
  }

  return (
    <div className='App'>
      <div className='container'>
      <div className='header'>
         <div>
           <Button onMessage={'Add ToDo'} offMessage={'Close Form'}/>
           <CompleteBtn className='check--btn' tasks={tasks} 
             complete={completeTasks} btnMessage={allcomplete}/>
         </div>
          <TaskCounter total={tasks.length} tasks={tasks}/></div>
        <TaskList tasks={tasks} 
          toggleCheckBox={handleCheckBox} 
          editTask={editTask}
          editingTaskId={editingTaskId}
          setEditingTaskId={setEditingTaskId}
          addingTask={addingTask}
          deleteTask={deleteTask}/>
          {showForm ? <div ref={formRef}><AddForm showForm={showForm} 
                                           addTask={addTask} 
                                           tasks={tasks} active={setshowForm} 
                                           adding={setAddingTask}  />  </div> : <div></div>} 
        </div>
    </div>
  );
}


