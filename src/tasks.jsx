import React, { useState } from 'react';
import Delete from './delete.jsx'

export default function TaskList({ tasks, toggleCheckBox, 
                                  editTask, editingTaskId, 
                                  setEditingTaskId, addingTask, deleteTask}) {
  
  
  let addingMode = {}
  
  if (addingTask) {
    addingMode.filter = 'blur(1px)'
  }
  
  const [input, setInput] = useState('');

  const handleClick = (e, taskid) => {
    if (editingTaskId === taskid) {
      
      editTask(taskid, input);
      setEditingTaskId(null);
    } else {
      
      setEditingTaskId(taskid);
      setInput(tasks.find(task => task.id === taskid).task || ''); // Set input to the current task value
    }
  };

  const handleCancel = () => {
    setEditingTaskId(null);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  let header = [];

  if (tasks && tasks.length > 0) {
    header = Object.keys(tasks[0]);
  }

  return (
    <>
      { tasks.length > 0 ?
      <table className="styled-table" style={addingMode}>
        <thead>
          <tr>
            {header.map((item, index) => <th key={index}>{item}</th>)}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, taskIndex) => (
            <tr key={task.id}>
              {header.map((header, headerIndex) => (
                header === 'completed' ? <td key={headerIndex}>
                  <input type='checkbox'
                    checked={task.completed}
                    onChange={() => toggleCheckBox(task.id)} />
                </td> :
                <td key={headerIndex}
                  className={task.completed ? 'text-strike' : null}>{task[header]}</td>
              ))}
              <td>
                <button onClick={(e) => handleClick(e, task.id)}>
                  {editingTaskId === task.id ? 'Save' : 'Edit'}
                </button>
                {editingTaskId === task.id && (
                  <button onClick={handleCancel}>Cancel</button>
                )}
              </td>
              <td><Delete deleteTask={deleteTask} task={task.id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      : <div className='empty-message'>
        <span className='message-word'>Hey!</span> Start adding some tasks, lazybones!
      </div>}
      {editingTaskId && (
        <div>
          <h2>Edit ToDo</h2>
          <input value={input} onChange={handleInputChange} />
        </div>
      )}
    </>
  );
}

