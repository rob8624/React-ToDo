import React from 'react';


export default function TaskList({tasks, handleCheckBox}) {

  let header = [];

  if (tasks && tasks.length > 0) {
    header = Object.keys(tasks[0]);
  }

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
        {tasks.map((task) => (
          <tr key={task.id}>
            {header.map((obj, index) => (
              <td key={index}>
                {obj === "completed" ? (
                  <input type="checkbox" checked={task[obj]} readOnly
                    onChange={handleCheckBox}/>
                ) : (
                  task[obj]
                )}
              </td>
            ))}
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
