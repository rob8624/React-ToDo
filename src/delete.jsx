import React from 'react'

export default function Delete({deleteTask, task}) {
  return <button onClick={() => deleteTask(task)}>Delete</button>
}

