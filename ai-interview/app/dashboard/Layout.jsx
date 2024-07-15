import React from 'react'
import Header from './_component/Header'
import Addinterv from './_component/Addinterv'
import { Toaster } from '@/components/ui/toaster'
import Feedback from './interview/[interviewid]/feedback/page'

const Layout = ({ children }) => {
  return (
    <div className='mx-5 md:mx-20 lg:mx-36'>
 <Header/> 
 <Addinterv/>
 <Toaster/>
  <Feedback/> 
        {children}
    </div>
  )
}

export default Layout