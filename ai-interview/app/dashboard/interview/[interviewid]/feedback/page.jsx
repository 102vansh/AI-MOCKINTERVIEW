
"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { eq } from 'drizzle-orm'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Feedback = ({ params }) => {
    const [feedback, setfeedback] = useState([])
const router = useRouter()
    const getfeedback = async () => {
        try {
            const result = await db.select().from(UserAnswer).where(eq(UserAnswer.mockidref, params.interviewid)).orderBy(UserAnswer.id)
            setfeedback(result)
            console.log(result)
            console.log(params.interviewid)
            console.log(feedback)
        } catch (error) {
            console.error('Error fetching feedback:', error)
        }
    }

    useEffect(() => {
        getfeedback()
    }, [])

    return (
        <div className='p-10'>
            <h2 className='text-3xl font-bold text-green-500'>Congratulations</h2>
            <h2 className='font-bold text-2xl'>Here is Your Interview</h2>
            <h2 className='text-primary text-lg my-3'>Your Overall Interview Rating: <strong>7/10</strong></h2>
            <h2 className='text-sm text-gray-500'>Find Below Interview Question with Correct Answer</h2>
            {feedback.map((item,index) => (
                <Collapsible key={index}>
                    <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left justify-between'>
                {item?.question}<ChevronsUpDown className='w-5 h-5 gap-7'/>
                    <CollapsibleContent>
                    <div>
                     <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating</strong>{item?.rating}</h2>
                     <h2 className=' p-2 border rounded-lg'><strong> Your Answer:</strong>{item?.UserAns}</h2>
                     <h2 className=' p-2 border rounded-lg text-green-600'><strong> Correct Answer:</strong>{item?.correctans}</h2>  
                      <h2><strong>Feedback:</strong>{item?.feedback}</h2>
                    </div>
                    </CollapsibleContent>
                    </CollapsibleTrigger>
                </Collapsible>
            ))}
            <Button onClick={()=>router.replace('/dashboard')}>
Dashboard
            </Button>
        </div>
    )
}

export default Feedback
