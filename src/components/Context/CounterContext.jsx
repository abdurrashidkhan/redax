import React, { createContext, useState } from 'react'

export const COUNTER_CONTEXT = createContext()
export default function CounterContext({children}) {

  const [count, setCount] = useState(0)
  const counter = {
    count,
    setCount
  }
  return (
    <COUNTER_CONTEXT.Provider value={counter}>
      {children}
    </COUNTER_CONTEXT.Provider>

  )
}
