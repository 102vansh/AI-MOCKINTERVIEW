"use client"
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { v4 as uuid4 } from 'uuid'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { chatSession } from '@/utils/Geminiaimodals'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { Mockinterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'

    import { useRouter } from 'next/navigation'

const Addinterv = () => {
    const [opendialog, setopendialog] = useState(false)
    const [jobposition, setjobposition] = useState("")
    const [jobdescription, setjobdescription] = useState("")
    const [yearofexperience, setyearofexperience] = useState("")
    const [loading, setloading] = useState(false)
    const [jsonres, setjsonres] = useState([])
    const { user } = useUser()
const router = useRouter()
    const onsubmit = async (e) => {
        e.preventDefault() // Prevent default form submission behavior
        setloading(true)
        const inputprompt = `job position: ${jobposition} job description: ${jobdescription} year of experience: ${yearofexperience} No.of interviews Questions: ${process.env.NEXT_PUBLIC_API_KEY}`
        try {
            const result = await chatSession.sendMessage(inputprompt)
            console.log(inputprompt)
            const mockjsonres = (await result.response.text()).replace('```json', '').replace('```', '')
            console.log(result.response.text())
            console.log('clicked!!')
            console.log(JSON.parse(mockjsonres))
            setjsonres(mockjsonres)

            if (!mockjsonres) {
                throw new Error("mockjsonres is null or undefined")
            }

            const response = await db.insert(Mockinterview).values({
                 // Use serial ID from schema
                 mock_id: uuid4(),
                json_mock_resp: mockjsonres,
                job_position: jobposition,
                job_desc: jobdescription,
                job_experience: yearofexperience,
                created_by: user?.primaryEmailAddress?.emailAddress,
                created_at: new Date(),
                
            }).returning({mock_id:Mockinterview.mock_id})

            console.log(response)

            if (response) {
                setopendialog(false)
                 router.push('/dashboard/interview/' + response[0]?.mock_id)
            }

        } catch (error) {
            console.error("Error saving mock interview:", error)
        } finally {
            setloading(false)
        }
    }

    return (
        <div>
            <div className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all">
                <h2 onClick={() => setopendialog(true)}>+ Add New</h2>
            </div>
            <Dialog open={opendialog} onOpenChange={setopendialog}>
                <DialogTrigger asChild>
                    <div></div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Tell us more About Job Interview</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={onsubmit}>
                                <div>
                                    <h2>Add Detail about job Position/Role, Job Description and Year of Experience</h2>
                                </div>
                                <div className='flex flex-col mb-4 mt-3'>
                                    <label>Job Role/Job Position</label>
                                    <input className='p-4 border rounded-lg mt-4' placeholder='Ex: Frontend Developer' onChange={(e) => setjobposition(e.target.value)} />
                                </div>
                                <div className='my-3'>
                                    <label className='mb-4'>Job Description</label>
                                    <Textarea onChange={(e) => setjobdescription(e.target.value)} placeholder='Ex. React, React Native, Node, etc.' />
                                </div>
                                <div className='flex flex-col mb-4 mt-3'>
                                    <label>Year of Experience</label>
                                    <input onChange={(e) => setyearofexperience(e.target.value)} className='p-4 border rounded-lg mt-4' placeholder='Ex. 5' />
                                </div>
                                <div className='flex gap-5 justify-end'>
                                    <button type='button' variant='ghost' className='p-3 bg-red-600 text-white rounded-lg' onClick={() => setopendialog(false)}>Cancel</button>
                                    <button type='submit' className='p-3 bg-blue-600 text-white rounded-lg'>{loading ? <LoaderCircle className='animate-spin' placeholder="AI Generating" /> : "Start Interview"}</button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Addinterv
