import React from 'react';




export default function TaskList({tasks, toggleCheckBox}) {
  console.log(tasks)
  
  let header = [];

  if (tasks && tasks.length > 0) {
    header = Object.keys(tasks[0]);}

return (
    <table className="styled-table">
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
                      onChange={() => toggleCheckBox(task.id)}></input></td> :
                <td key={headerIndex}
                  className={task.completed ? 'text-strike' : null}>{task[header]}</td>
            ))}
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

