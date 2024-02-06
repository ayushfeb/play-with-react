import React from 'react'

function Button({colorName = "red"}) {
  return (
    <div className='fixed flex flex-wrap text-justify justify-center bottom-12 inset-x-0 px-2'>{colorName}</div>
  )
}

export default Button