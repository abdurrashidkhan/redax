import React, { useContext } from 'react'
import { COUNTER_CONTEXT } from '../Context/CounterContext';

export default function Counter() {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div className="w-full grid place-content-center">
      <div className="flex shrink-0 px-10 m-10 gap-5 rounded-xl max-md- justify-center items-center">
        <button onClick={() => setCount(count - 1)} className='bg-red-400 py-2 px-5 rounded-md cursor-pointer'>Decrement</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)} className='bg-purple-600 py-2 px-5 rounded-md cursor-pointer'>Increment</button>

      </div>
    </div>
  )
}
