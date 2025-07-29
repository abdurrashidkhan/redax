"use client"
import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import CounterContext from '../Context/CounterContext';

export default function Parent() {

  return (
    <CounterContext className='border-2 border-blue-500 max-w-7xl mx-auto m-10 rounded'>
      <h1 className='m-5 text-xl'> Parent</h1>
      <ChildOne/>
      {/* <ChildTwo count={count} setCount={setCount}/> */}
    </CounterContext>
  )
}
