// // "use client"
// // import { Button } from '@/components/ui/button'
// // import { db } from '@/utils/db'
// // import { Mockinterview } from '@/utils/schema'
// // import { eq } from 'drizzle-orm'
// // import Webcam from 'react-webcam'
// // import { Lightbulb, WebcamIcon } from 'lucide-react'
// // import React, { useEffect, useState } from 'react'

// // const Interview = ({ params }) => {
// //     const [interviewdata, setinterviewdata] = useState(null)
// //     const [webcam, setwebcam] = useState(false)
// //     console.log(JSON.stringify(interviewdata, null, 2)) // Better logging for interview data

// //     useEffect(() => {
// //         console.log(params.interviewid)
// //         getdetail()
// //     }, [params.interviewid])

// //     const getdetail = async () => {
// //         try {
// //             const result = await db.select().from(Mockinterview).where(eq(Mockinterview.mock_id, params.interviewid))
// //             console.log(result)
// //             setinterviewdata(result[0]) // Assuming result is an array, take the first element
// //         } catch (error) {
// //             console.error('Error fetching interview details:', error)
// //         }
// //     }

// //     return (
// //         <div className='my-10 flex justify-center flex-col items-center'>
// //             <h2 className='font-bold text-2xl'>Let's get Started</h2>
// //             <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
// //                 <div className='ml-8'>
// //                     {webcam ? (
// //                         <Webcam
// //                             audio={true} // Ensure audio is enabled
// //                             onUserMedia={() => setwebcam(true)}
// //                             onUserMediaError={() => setwebcam(false)}
// //                             mirrored={true}
// //                             style={{ height: 500, width: 500 }}
// //                         />
// //                     ) : (
// //                         <>
// //                             <WebcamIcon className='h-50 w-50 my-7 p-20 rounded-full bg-secondary color-black' />
// //                             <Button onClick={() => setwebcam(true)}>Enable Web Cam & Microphone</Button>
// //                         </>
// //                     )}
// //                 </div>
// //                 <div className='flex flex-col my-5 gap-5 p-5 rounded-lg border'>
// //                     <h2 className='font-semibold text-xl'><strong>Job Role/ Job Position:</strong> {interviewdata?.job_position}</h2>
// //                     <h2 className='font-semibold text-xl'><strong>Job Description/ Tech Stack:</strong> {interviewdata?.job_desc}</h2>
// //                     <h2 className='font-semibold text-xl'><strong>Year of Experience:</strong> {interviewdata?.job_experience}</h2>
// //                     <div className='flex flex-col gap-2 bg-yellow-300 rounded-lg p-5'>
// //                         <h2><Lightbulb /><strong>Information</strong></h2>
// //                         <h2>Enable Video Web Cam and Microphone to Start Your AI Generated Mock Interview. It has at least 8 questions. You will get a report based on your answers.</h2>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className='flex justify-end items-end'>
// //                 <Button className='w-full'>Start Interview</Button>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Interview
// "use client"
// import { Button } from '@/components/ui/button'
// import { db } from '@/utils/db'
// import { Mockinterview } from '@/utils/schema'
// import { eq } from 'drizzle-orm'
// import Webcam from 'react-webcam'
// import { Lightbulb, WebcamIcon } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import Link from 'next/link'

// const Interview = ({ params }) => {
//     const [interviewdata, setinterviewdata] = useState(null)
//     const [webcamEnabled, setWebcamEnabled] = useState(false)
//     const [webcamError, setWebcamError] = useState(null)

//     useEffect(() => {
//         console.log(params.interviewid)
//         console.log(params)
//         getdetail()
//     }, [params.interviewid])

//     const getdetail = async () => {
//         try {
//             const result = await db.select().from(Mockinterview).where(eq(Mockinterview.mock_id, params.interviewid))
//             console.log(result)
//             setinterviewdata(result[0]) // Assuming result is an array, take the first element
//         } catch (error) {
//             console.error('Error fetching interview details:', error)
//         }
//     }

//     const handleWebcamError = (error) => {
//         console.error('Webcam error:', error)
//         setWebcamError('Error accessing the webcam. Please ensure permissions are granted.')
//         setWebcamEnabled(false)
//     }

//     const handleWebcamUserMedia = () => {
//         setWebcamEnabled(true)
//         setWebcamError(null)
//     }

//     return (
//         <div className='my-10 flex justify-center flex-col items-center'>
//             <h2 className='font-bold text-2xl'>Let's get Started</h2>
//             <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
//                 <div className='ml-8'>
//                     {webcamEnabled ? (
//                         <Webcam
//                             audio={true} // Ensure audio is enabled
//                             onUserMedia={handleWebcamUserMedia}
//                             onUserMediaError={handleWebcamError}
//                             mirrored={true}
//                             style={{ height: 500, width: 500 }}
//                         />
//                     ) : (
//                         <>
//                             <WebcamIcon className='h-50 w-50 my-7 p-20 rounded-full bg-secondary color-black' />
//                             <Button onClick={() => setWebcamEnabled(true)}>Enable Web Cam & Microphone</Button>
//                             {webcamError && <p className="text-red-500">{webcamError}</p>}
//                         </>
//                     )}
//                 </div>
//                 <div className='flex flex-col my-5 gap-5 p-5 rounded-lg border'>
//                     <h2><strong>Job Role/ Job Position:</strong> {interviewdata?.job_position}</h2>
//                     <h2><strong>Job Description/ Tech Stack:</strong> {interviewdata?.job_desc}</h2>
//                     <h2><strong>Year of Experience:</strong> {interviewdata?.job_experience}</h2>
//                     <div className='flex flex-col gap-2 bg-yellow-300 rounded-lg p-5'>
//                         <h2><Lightbulb /><strong>Information</strong></h2>
//                         <h2>Enable Video Web Cam and Microphone to Start Your AI Generated Mock Interview. It has at least 8 questions. You will get a report based on your answers.</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex justify-end items-end'>
        
// <Link href={`/dashboard/interview/${params.interviewid}/start`}><Button className='w-full'>Start Interview</Button></Link>


//             </div>
//         </div>
//     )
// }

// export default Interview


"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { Mockinterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import Webcam from 'react-webcam'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Interview = ({ params }) => {
    const [interviewdata, setinterviewdata] = useState(null)
    const [webcamEnabled, setWebcamEnabled] = useState(false)
    const [webcamError, setWebcamError] = useState(null)
    const [interviewId, setInterviewId] = useState(params.interviewid) // Initialize state for interviewid

    useEffect(() => {
        console.log('Params:', params) // Log the entire params object
        console.log('Interview ID:', params.interviewid) // Log the specific interviewid
        setInterviewId(params.interviewid) // Set the interviewid state
        getdetail()
    }, [params.interviewid])

    const getdetail = async () => {
        try {
            const result = await db.select().from(Mockinterview).where(eq(Mockinterview.mock_id, params.interviewid))
            console.log(result)
            setinterviewdata(result[0]) // Assuming result is an array, take the first element
        } catch (error) {
            console.error('Error fetching interview details:', error)
        }
    }

    const handleWebcamError = (error) => {
        console.error('Webcam error:', error)
        setWebcamError('Error accessing the webcam. Please ensure permissions are granted.')
        setWebcamEnabled(false)
    }

    const handleWebcamUserMedia = () => {
        setWebcamEnabled(true)
        setWebcamError(null)
    }

    return (
        <div className='my-10 flex justify-center flex-col items-center'>
            <h2 className='font-bold text-2xl'>Let's get Started</h2>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                <div className='ml-8'>
                    {webcamEnabled ? (
                        <Webcam
                            audio={true} // Ensure audio is enabled
                            onUserMedia={handleWebcamUserMedia}
                            onUserMediaError={handleWebcamError}
                            mirrored={true}
                            style={{ height: 500, width: 500 }}
                        />
                    ) : (
                        <>
                            <WebcamIcon className='h-50 w-50 my-7 p-20 rounded-full bg-secondary color-black' />
                            <Button onClick={() => setWebcamEnabled(true)}>Enable Web Cam & Microphone</Button>
                            {webcamError && <p className="text-red-500">{webcamError}</p>}
                        </>
                    )}
                </div>
                <div className='flex flex-col my-5 gap-5 p-5 rounded-lg border'>
                    <h2><strong>Job Role/ Job Position:</strong> {interviewdata?.job_position}</h2>
                    <h2><strong>Job Description/ Tech Stack:</strong> {interviewdata?.job_desc}</h2>
                    <h2><strong>Year of Experience:</strong> {interviewdata?.job_experience}</h2>
                    <div className='flex flex-col gap-2 bg-yellow-300 rounded-lg p-5'>
                        <h2><Lightbulb /><strong>Information</strong></h2>
                        <h2>Enable Video Web Cam and Microphone to Start Your AI Generated Mock Interview. It has at least 8 questions. You will get a report based on your answers.</h2>
                    </div>
                </div>
            </div>
            <div className='flex justify-end items-end'>
                <Link href={`/dashboard/interview/${interviewdata?.mock_id}/start`}>
                    <Button className='w-full'>Start Interview</Button>
                </Link>
            </div>
        </div>
    )
}

export default Interview
