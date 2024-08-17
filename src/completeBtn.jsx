import React from 'react'



export default function CompleteBtn ({complete, btnMessage, tasks}) {


  
  return (
    tasks.length > 0 &&
    <button className='complete--btn' onClick={complete}>
      {btnMessage ? 'UncompleteAll': 'Complete all'}</button>
  )
}