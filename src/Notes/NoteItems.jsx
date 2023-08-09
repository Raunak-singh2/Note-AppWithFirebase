import React from 'react'

function NoteItems(props) {
  return (
   <li className='note'>{props.children}</li>
  )
}

export default NoteItems;
