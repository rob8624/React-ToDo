import React from 'react'

export default function TaskCounter({total, tasks}) {


  let countComplete = tasks.filter(task => task.completed).length
  let countIncomplete = tasks.filter(task => task.completed === false).length
  
  return (
    <div>
      <span className='counter--total'>Total:{total}</span>
      <span className='counter--tracker'>Completed:{countComplete}</span>
      <span className='counter--tracker'>Not done:{countIncomplete}</span>
    </div>
  )
}