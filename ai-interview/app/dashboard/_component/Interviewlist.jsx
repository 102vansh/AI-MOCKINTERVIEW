"use client"

import { db } from '@/utils/db'
import { Mockinterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard'

const Interviewlist = () => {
    const{user} = useUser()
    const[interviewlist,setinterviewlist] = useState([])
useEffect(() => {
    Getinterviewlist()
}, [user])
    const Getinterviewlist =async() =>{
        const result = await db.select().from(Mockinterview).where(eq(Mockinterview.created_by, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(Mockinterview.id))
console.log(result)
setinterviewlist(result)
    }
  return (
    <div>
        <h2 className='font-medium text-xl'>Prevous Mock Interview</h2>
        <div className='grid grid-cols-1 md:grid lg:grid-cols-3 gap-5'>
        {interviewlist.map((interview,index)=>{
            <InterviewItemCard interview={interview} key={index}/>
        })}
        </div>
    </div>
  )
}

export default Interviewlist