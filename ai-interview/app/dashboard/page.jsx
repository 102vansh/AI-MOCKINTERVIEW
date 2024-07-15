import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Header from './_component/Header'
import Addinterv from './_component/Addinterv'
import Interviewlist from './_component/Interviewlist'
import Feedback from './interview/[interviewid]/feedback/page'

function Dashboard() {
  return (
    <div className='ml-6'>
    <Header />
    <div>
    <h2 className='font-bold text-2xl'>Dashboard</h2>
    <h2 className='text-gray-500'>Create and Start your AI Mock Interview</h2>
      {/* <UserButton /> */}
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
      <Addinterv />
      {/* <Feedback/> */}
      <Interviewlist/>

      </div>
      </div>
    </div>
  )
}

export default Dashboard
