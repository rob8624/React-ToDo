import React from 'react'



export default function CompleteBtn ({complete, btnMessage}) {


  
  return (
    <button className='complete--btn' onClick={complete}>
      {btnMessage ? 'UncompleteAll': 'Complete all'}</button>
  )
}