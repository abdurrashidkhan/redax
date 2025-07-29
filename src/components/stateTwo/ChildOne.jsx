
import React, { useState } from 'react'
import Counter from '../conuter/Counter'

export default function ChildOne() {
  return (
    <div className='border-2 border-purple-600 m-10 max-w-4xl mx-auto rounded-md'>
      <div className="w-10 h-10 m-5 rounded-full text-3xl grid place-content-center text-center">
        <h1>1</h1>
      </div>
      <Counter />
    </div>
  )
}
