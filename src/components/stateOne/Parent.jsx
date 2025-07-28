"use client"
import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div className='border-2 border-blue-500 max-w-7xl mx-auto m-10 rounded'>
      <h1 className='m-5 text-xl'> Parent</h1>
      <ChildOne count={count} setCount={setCount}/>
      <ChildTwo count={count} setCount={setCount}/>
    </div>
  )
}
