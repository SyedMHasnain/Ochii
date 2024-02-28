import React from 'react'

function Button(props) {
  return (
    <div className='w-full h full'>
      <button className=' w-full h-10  p-2  text-[14px] '  >
      {props.title}
      </button>
    </div>
  )
}

export default Button
