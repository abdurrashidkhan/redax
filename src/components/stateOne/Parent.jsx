import React from 'react'
import ChildOne from './ChildOne'

export default function Parent() {
  return (
    <div className='border-2 border-blue-500 max-w-7xl mx-auto m-10 rounded'>
      <h1 className='m-5 text-xl'> Parent</h1>
      <ChildOne />
    </div>
  )
}
