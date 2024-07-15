import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'

const InterviewItemCard = ({interview}) => {
    const router  =useRouter()
    const onStart = () => {
        router.push('/dashboard/interview/'+interview.mock_id+'/feedback')

    }
const onFeedback = () => {
    router.push()
}

  return (
    <div className='border shadow-sm rounded-lg p-3'>
<h2 className='font-bold text-primary'>{interview?.jobposition}</h2>
<h2  className='text-sm text-gray-500'>{interview.job_experience}</h2>
<h2>Created At:{interview.created_at}</h2>
<div className='flex justify-between mt-2'>
<Link href={'/dashboard/interview/'+interview.mock_id} className='text-primary'>View</Link>
    <Button onClick={onFeedback} size="sm" variant="outline" className="w-full">
Feedback
    </Button>
    <Button onClick={onStart} size="sm" variant="outline" className="w-full">Start</Button>
</div>
    </div>
  )
}

export default InterviewItemCard