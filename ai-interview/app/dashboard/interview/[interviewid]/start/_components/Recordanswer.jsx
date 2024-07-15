


// // // "use client"

// // // import { Button } from '@/components/ui/button'
// // // import { toast } from '@/components/ui/use-toast'
// // // import { db } from '@/utils/db'
// // // import { chatSession } from '@/utils/Geminiaimodals'
// // // import { useUser } from '@clerk/nextjs'
// // // import React, { useState, useEffect, useRef } from 'react'
// // // import useSpeechToText from 'react-hook-speech-to-text'
// // // import Webcam from 'react-webcam'

// // // const Recordanswer = ({ jsonmockresp, interviewdata, activeindex }) => {
// // //     const [answer, setAnswer] = useState('')
// // //     const [userAnswer, setUserAnswer] = useState('')
// // //     const webcamRef = useRef(null)
// // // const{user} = useUser()
// // //     const {
// // //         error,
// // //         interimResult,
// // //         isRecording,
// // //         results,
// // //         startSpeechToText,
// // //         stopSpeechToText,
// // //     } = useSpeechToText({
// // //         continuous: true,
// // //         useLegacyResults: false,
// // //     })

// // //     useEffect(() => {
// // //         if (error) {
// // //             console.error('Error with speech recognition:', error)
// // //         }
// // //     }, [error])

// // //     useEffect(()=>{
// // //         if(!isRecording && userAnswer.length>10){
// // // updateuser()
// // //         }
// // //     },[userAnswer])

// // //     const handleRecording = async () => {
// // //         if (isRecording) {
// // //             stopSpeechToText()
// // //             const userAnswer = results.map(result => result.transcript).join(' ')
// // //             setUserAnswer(userAnswer)
// // //             if (userAnswer.length < 10) {
// // //                 toast.error('Error while saving your Answer')
// // //                 return
// // //             }
// // //             const feedbackprompt = "Question: " + jsonmockresp[activeindex]?.question + " Answer: " + userAnswer + ", Depend on question and answer for given interview question Please give rating for Answer and feedback as area of improvement"
// // //             try {
// // //                 const result = await chatSession.sendMessage(feedbackprompt)
// // //                 console.log(result)
// // //                 const mockjsonresp = result.response.text().replace('```json', '').replace('```', '')
// // //                 console.log(mockjsonresp)
// // //                 const feedback = JSON.parse(mockjsonresp)
// // //                 console.log(feedback)
// // //             } catch (error) {
// // //                 console.error('Error getting feedback:', error)
// // //                 toast.error('Error getting feedback')
// // //             }
// // //             // Assuming `db.insert` is correctly defined
// // //             const resp = await db.insert(userAnswer).values({
// // //                 // Add your database insertion logic here
// // //        mockidref: interviewdata?.mock_id,
// // //        question: jsonmockresp[activeindex]?.question,
// // //        correctans: jsonmockresp[activeindex]?.answer,
// // //        UserAns:userAnswer,
// // //        feedback:feedback?.feedback,
// // //        rating:feedback?.rating,
// // //        useremail:user?.primaryEmailAddress?.emailAddress


// // //             })
// // //             if(resp){
// // //                 toast('user Answer Recoreded Succesfully')
// // //             }
           
// // //         } else {
// // //             startSpeechToText()
// // //         }
// // //     }
// // //     const updateuser = async()=>{
// // // const feedbackprompt = "Question: " + jsonmockresp[activeindex]?.question + " Answer: " + userAnswer + ", Depend on question and answer for given interview question Please give rating for Answer and feedback as area of improvement"

// // //         try {
// // //             const result = await chatSession.sendMessage(feedbackprompt)
// // //             console.log(result)
// // //             const mockjsonresp = result.response.text().replace('```json', '').replace('```', '')
// // //             console.log(mockjsonresp)
// // //             const feedback = JSON.parse(mockjsonresp)
// // //             console.log(feedback)
// // //         } catch (error) {
// // //             console.error('Error getting feedback:', error)
// // //             toast.error('Error getting feedback')
// // //         }
// // //         // Assuming `db.insert` is correctly defined
// // //         const resp = await db.insert(userAnswer).values({
// // //             // Add your database insertion logic here
// // //    mockidref: interviewdata?.mock_id,
// // //    question: jsonmockresp[activeindex]?.question,
// // //    correctans: jsonmockresp[activeindex]?.answer,
// // //    UserAns:userAnswer,
// // //    feedback:feedback?.feedback,
// // //    rating:feedback?.rating,
// // //    useremail:user?.primaryEmailAddress?.emailAddress


// // //         })
        
// // // }


// // // return (
// // //             <div className='flex flex-col items-center justify-center'>
// // //                 <div className='flex flex-col my-20 justify-center items-center rounded-lg p-5 w-full h-full mr-8 bg-secondary'>
// // //                     <Webcam
// // //                         ref={webcamRef}
// // //                         audio={true}
// // //                         mirrored={true}
// // //                         style={{ width: '100%', height: 300, zIndex: 10 }}
// // //                     />
    
// // //                     <Button className='bg-black text-white' variant='outline' onClick={handleRecording}>
// // //                         {isRecording ? 'Stop Recording' : 'Start Recording'}
// // //                     </Button>
    
// // //                     <div>
// // //                         <h1>Recording: {isRecording.toString()}</h1>
// // //                         <ul>
// // //                             {results.map((result) => (
// // //                                 <li key={result.timestamp}>{result.transcript}</li>
// // //                             ))}
// // //                             {interimResult && <li>{interimResult}</li>}
// // //                         </ul>
// // //                     </div>
// // //                 </div>
// // //                 <Button className='bg-blue-500' onClick={() => setAnswer(results.map(result => result.transcript).join(' '))}>
// // //                     Show User Answer
// // //                 </Button>
// // //                 <div className='mt-4 p-2 border rounded bg-white'>
// // //                     <h2>User Answer:</h2>
// // //                     <p>{answer}</p>
// // //                 </div>
// // //             </div>
// // //         )
// // //     }
    
// // // export default Recordanswer




// // "use client"

// // import { Button } from '@/components/ui/button'
// // import { toast } from '@/components/ui/use-toast'
// // import { db } from '@/utils/db'
// // import { UserAnswer } from '@/utils/schema' // Adjust the import to match your schema
// // import { useUser } from '@clerk/nextjs'
// // import React, { useState, useEffect, useRef } from 'react'
// // import useSpeechToText from 'react-hook-speech-to-text'
// // import Webcam from 'react-webcam'

// // const Recordanswer = ({ jsonmockresp, interviewdata, activeindex }) => {
// //     const [answer, setAnswer] = useState('')
// //     const [userAnswer, setUserAnswer] = useState('')
// //     const webcamRef = useRef(null)
// //     const { user } = useUser()
// //     const {
// //         error,
// //         interimResult,
// //         isRecording,
// //         results,
// //         startSpeechToText,
// //         stopSpeechToText,
// //     } = useSpeechToText({
// //         continuous: true,
// //         useLegacyResults: false,
// //     })

// //     useEffect(() => {
// //         if (error) {
// //             console.error('Error with speech recognition:', error)
// //         }
// //     }, [error])

// //     useEffect(() => {
// //         if (!isRecording && userAnswer.length > 10) {
// //             updateUserAnswer()
// //         }
// //     }, [userAnswer])

// //     const handleRecording = async () => {
// //         if (isRecording) {
// //             stopSpeechToText()
// //             const recordedAnswer = results.map(result => result.transcript).join(' ')
// //             setUserAnswer(recordedAnswer)
// //             if (recordedAnswer.length < 10) {
// //                 toast.error('Error while saving your Answer')
// //                 return
// //             }
// //         } else {
// //             startSpeechToText()
// //         }
// //     }

// //     const updateUserAnswer = async () => {
// //         const feedbackPrompt = "Question: " + jsonmockresp[activeindex]?.question + " Answer: " + userAnswer + ", Depend on question and answer for given interview question Please give rating for Answer and feedback as area of improvement"

// //         try {
// //             const result = await chatSession.sendMessage(feedbackPrompt)
// //             const mockJsonResp = result.response.text().replace('```json', '').replace('```', '')
// //             const feedback = JSON.parse(mockJsonResp)
            
// //             const resp = await db.insert(UserAnswer).values({
// //                 mockidref: interviewdata?.mock_id,
// //                 question: jsonmockresp[activeindex]?.question,
// //                 correctans: jsonmockresp[activeindex]?.answer,
// //                 UserAns: userAnswer,
// //                 feedback: feedback?.feedback,
// //                 rating: feedback?.rating,
// //                 useremail: user?.primaryEmailAddress?.emailAddress
// //             })

// //             if (resp) {
// //                 toast('User Answer Recorded Successfully')
// //             }
// //         } catch (error) {
// //             console.error('Error getting feedback or inserting into database:', error)
// //             toast.error('Error getting feedback or saving the answer')
// //         }
// //     }

// //     return (
// //         <div className='flex flex-col items-center justify-center'>
// //             <div className='flex flex-col my-20 justify-center items-center rounded-lg p-5 w-full h-full mr-8 bg-secondary'>
// //                 <Webcam
// //                     ref={webcamRef}
// //                     audio={true}
// //                     mirrored={true}
// //                     style={{ width: '100%', height: 300, zIndex: 10 }}
// //                 />

// //                 <Button className='bg-black text-white' variant='outline' onClick={handleRecording}>
// //                     {isRecording ? 'Stop Recording' : 'Start Recording'}
// //                 </Button>

// //                 <div>
// //                     <h1>Recording: {isRecording.toString()}</h1>
// //                     <ul>
// //                         {results.map((result) => (
// //                             <li key={result.timestamp}>{result.transcript}</li>
// //                         ))}
// //                         {interimResult && <li>{interimResult}</li>}
// //                     </ul>
// //                 </div>
// //             </div>
// //             <Button className='bg-blue-500' onClick={() => setAnswer(results.map(result => result.transcript).join(' '))}>
// //                 Show User Answer
// //             </Button>
// //             <div className='mt-4 p-2 border rounded bg-white'>
// //                 <h2>User Answer:</h2>
// //                 <p>{answer}</p>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Recordanswer
// "use client"

// import { Button } from '@/components/ui/button'
// import { toast } from '@/components/ui/use-toast'
// import { db } from '@/utils/db'
// import { UserAnswer } from '@/utils/schema' // Adjust the import to match your schema
// import { useUser } from '@clerk/nextjs'
// import React, { useState, useEffect, useRef } from 'react'
// import useSpeechToText from 'react-hook-speech-to-text'
// import Webcam from 'react-webcam'

// const Recordanswer = ({ jsonmockresp, interviewdata, activeindex }) => {
//     const [answer, setAnswer] = useState('')
//     const [userAnswer, setUserAnswer] = useState('')
//     const webcamRef = useRef(null)
//     const { user } = useUser()
//     const {
//         error,
//         interimResult,
//         isRecording,
//         results,
//         startSpeechToText,
//         stopSpeechToText,
//     } = useSpeechToText({
//         continuous: true,
//         useLegacyResults: false,
//     })

//     useEffect(() => {
//         if (error) {
//             console.error('Error with speech recognition:', error)
//         }
//     }, [error])

//     useEffect(() => {
//         if (!isRecording && userAnswer.length > 10) {
//             updateUserAnswer()
//         }
//     }, [userAnswer])

//     const handleRecording = async () => {
//         if (isRecording) {
//             stopSpeechToText()
//             const recordedAnswer = results.map(result => result.transcript).join(' ')
//             setUserAnswer(recordedAnswer)
//             if (recordedAnswer.length < 10) {
//                 toast.error('Error while saving your Answer')
//                 return
//             }
//         } else {
//             startSpeechToText()
//         }
//     }

//     const updateUserAnswer = async () => {
//         const feedbackPrompt = "Question: " + jsonmockresp[activeindex]?.question + " Answer: " + userAnswer + ", Depend on question and answer for given interview question Please give rating for Answer and feedback as area of improvement"

//         try {
//             const result = await chatSession.sendMessage(feedbackPrompt)
//             const mockJsonResp = result.response.text().replace('```json', '').replace('```', '')
//             const feedback = JSON.parse(mockJsonResp)

//             // Ensure feedback contains necessary fields
//             if (!feedback || !feedback.feedback || !feedback.rating) {
//                 toast.error('Invalid feedback received')
//                 console.error('Invalid feedback:', feedback)
//                 return
//             }

//             // Assuming `db.insert` is correctly defined and `UserAnswer` schema matches the values being inserted
//             const resp = await db.insert(UserAnswer).values({
//                 mockidref: interviewdata?.mock_id,
//                 question: jsonmockresp[activeindex]?.question,
//                 correctans: jsonmockresp[activeindex]?.answer,
//                 UserAns: userAnswer,
//                 feedback: feedback.feedback,
//                 rating: feedback.rating,
//                 useremail: user?.primaryEmailAddress?.emailAddress
//             })

//             if (resp) {
//                 toast('User Answer Recorded Successfully')
//             } else {
//                 toast.error('Failed to record user answer')
//                 console.error('Database insert response:', resp)
//             }
//         } catch (error) {
//             console.error('Error getting feedback or inserting into database:', error)
//             toast.error('Error getting feedback or saving the answer')
//         }
//     }

//     return (
//         <div className='flex flex-col items-center justify-center'>
//             <div className='flex flex-col my-20 justify-center items-center rounded-lg p-5 w-full h-full mr-8 bg-secondary'>
//                 <Webcam
//                     ref={webcamRef}
//                     audio={true}
//                     mirrored={true}
//                     style={{ width: '100%', height: 300, zIndex: 10 }}
//                 />

//                 <Button className='bg-black text-white' variant='outline' onClick={handleRecording}>
//                     {isRecording ? 'Stop Recording' : 'Start Recording'}
//                 </Button>

//                 <div>
//                     <h1>Recording: {isRecording.toString()}</h1>
//                     <ul>
//                         {results.map((result) => (
//                             <li key={result.timestamp}>{result.transcript}</li>
//                         ))}
//                         {interimResult && <li>{interimResult}</li>}
//                     </ul>
//                 </div>
//             </div>
//             <Button className='bg-blue-500' onClick={() => setAnswer(results.map(result => result.transcript).join(' '))}>
//                 Show User Answer
//             </Button>
//             <div className='mt-4 p-2 border rounded bg-white'>
//                 <h2>User Answer:</h2>
//                 <p>{answer}</p>
//             </div>
//         </div>
//     )
// }

// export default Recordanswer
"use client"

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import React, { useState, useEffect, useRef } from 'react'
import useSpeechToText from 'react-hook-speech-to-text'
import Webcam from 'react-webcam'

const Recordanswer = ({ jsonmockresp, interviewdata, activeindex }) => {
    const [answer, setAnswer] = useState('')
    const [userAnswer, setUserAnswer] = useState('')
    const webcamRef = useRef(null)
    const { user } = useUser()
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false,
    })

    useEffect(() => {
        if (error) {
            console.error('Error with speech recognition:', error)
        }
    }, [error])

    useEffect(() => {
        if (!isRecording && userAnswer.length > 10) {
            updateUserAnswer()
        }
    }, [userAnswer])

    const handleRecording = async () => {
        if (isRecording) {
            stopSpeechToText()
            const recordedAnswer = results.map(result => result.transcript).join(' ')
            setUserAnswer(recordedAnswer)
            if (recordedAnswer.length < 10) {
                toast.error('Error while saving your Answer')
                return
            }
        } else {
            startSpeechToText()
        }
    }

    const updateUserAnswer = async () => {
        const feedbackPrompt = `Question: ${jsonmockresp[activeindex]?.question} Answer: ${UserAnswer}, Depend on question and answer for given interview question Please give rating for Answer and feedback as area of improvement`

        try {
            const result = await chatSession.sendMessage(feedbackPrompt)
            const mockJsonResp = result.response.text().replace('```json', '').replace('```', '')
             console.log(mockJsonResp)
            const feedback = JSON.parse(mockJsonResp)

            // Ensure feedback contains necessary fields
            if (!feedback || !feedback.feedback || !feedback.rating) {
                toast.error('Invalid feedback received')
                console.error('Invalid feedback:', feedback)
                return
            }

            // Inserting the answer into the database
            const resp = await db.insert(UserAnswer).values({
                mockidref: interviewdata?.mock_id,
                question: jsonmockresp[activeindex]?.question,
                correctans: jsonmockresp[activeindex]?.answer,
                UserAns: userAnswer,
                feedback: feedback.feedback,
                rating: feedback.rating,
                useremail: user?.primaryEmailAddress?.emailAddress,
                created_at: new Date().toISOString() // Ensure created_at is properly set
            })

            if (resp) {
                toast('User Answer Recorded Successfully')
            } else {
                toast.error('Failed to record user answer')
                console.error('Database insert response:', resp)
            }
        } catch (error) {
            console.error('Error getting feedback or inserting into database:', error)
            toast.error('Error getting feedback or saving the answer')
        }
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col my-20 justify-center items-center rounded-lg p-5 w-full h-full mr-8 bg-secondary'>
                <Webcam
                    ref={webcamRef}
                    audio={true}
                    mirrored={true}
                    style={{ width: '100%', height: 300, zIndex: 10 }}
                />

                <Button className='bg-black text-white' variant='outline' onClick={handleRecording}>
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                </Button>

                <div>
                    <h1>Recording: {isRecording.toString()}</h1>
                    <ul>
                        {results.map((result) => (
                            <li key={result.timestamp}>{result.transcript}</li>
                        ))}
                        {interimResult && <li>{interimResult}</li>}
                    </ul>
                </div>
            </div>
            <Button className='bg-blue-500' onClick={() => setAnswer(results.map(result => result.transcript).join(' '))}>
                Show User Answer
            </Button>
            <div className='mt-4 p-2 border rounded bg-white'>
                <h2>User Answer:</h2>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default Recordanswer
