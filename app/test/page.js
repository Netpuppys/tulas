"use client"

import React, { useRef } from 'react'
import Courses from '../Component/Courses'

const page = () => {
    const parentRef = useRef(null)

  return (
    <div ref={parentRef} className='w-full bg-white'>
        <div className='w-full h-[100rem] bg-transparent'></div>
        <Courses parentRef={parentRef}/>
        <div className='w-full h-[200rem] bg-transparent'></div>
    </div>
  )
}

export default page