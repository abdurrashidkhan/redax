"use client"
import React, { useState } from 'react'

export default function ChildOne() {
  const [count, setCount] = useState(0);
  return (
    <div className='border-2 border-purple-600 m-10 max-w-4xl mx-auto rounded-md'>
      <div className="w-10 h-10 m-5 rounded-full text-3xl grid place-content-center text-center">
        <h1>1</h1>
      </div>
      <div className="w-full grid place-content-center">
        <div className="flex shrink-0 px-10 m-10 gap-5 rounded-xl max-md- justify-center items-center">
          <button onClick={()=>setCount(count - 1)} className='bg-red-400 py-2 px-5 rounded-md cursor-pointer'>Decrement</button>
          <h1>{count}</h1>
          <button onClick={()=>setCount(count + 1)} className='bg-purple-600 py-2 px-5 rounded-md cursor-pointer'>Increment</button>

        </div>
      </div>
    </div>
  )
}
