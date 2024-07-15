
// // // // "use client"
// // // // import { db } from '@/utils/db'
// // // // import { Mockinterview } from '@/utils/schema'
// // // // import { eq } from 'drizzle-orm'
// // // // import React, { useEffect, useState } from 'react'

// // // // const StartInterview = ({params}) => {
// // // //     const[interviewdata, setinterviewdata] = useState()
// // // //     const[mockquestion,setmockquestion] = useState()
// // // //     useEffect(() => {
// // // //         getinterviewdetails()
// // // //     }, [params.interviewid])


// // // // const getinterviewdetails = async() =>{
// // // //     const result = await db.select().from(Mockinterview).where(eq(Mockinterview.interviewid, params.interviewid))
// // // //     const jsonmockres = JSON.parse(result[0].json_mock_resp)
// // // //     setmockquestion(jsonmockres)
// // // //     setinterviewdata(result[0])
// // // //     console.log(jsonmockres)
// // // // }

// // // //   return (
// // // //     <div>

// // // //     </div>
// // // //   )
// // // // }

// // // // export default StartInterview


// // // "use client"
// // // import { db } from '@/utils/db'
// // // import { Mockinterview } from '@/utils/schema'
// // // import { eq } from 'drizzle-orm'
// // // import React, { useEffect, useState } from 'react'
// // // import QuestionSection from './_components/QuestionSection'

// // // const StartInterview = ({ params }) => {
// // //     const [interviewdata, setinterviewdata] = useState()
// // //     const [mockquestion, setmockquestion] = useState()
// // //     const[activeindex,setactiveindex] = useState(0)
// // // console.log(params.interviewid)

// // //     useEffect(() => {
// // //         if (params.interviewid) {
// // //             getinterviewdetails(params.interviewid)
// // //         }
// // //     }, [])

// // //     const getinterviewdetails = async (interviewid) => {
// // //         try {
// // //             const result = await db.select().from(Mockinterview).where(eq(Mockinterview.mock_id, interviewid))
// // //             if (result.length > 0) {
// // //                 const jsonmockres = JSON.parse(result[0].json_mock_resp)
// // //                 setmockquestion(jsonmockres?.question)
// // //                 setinterviewdata(result[0])
// // //                 console.log(mockquestion)
// // //                 console.log(jsonmockres)
// // //             } else {
// // //                 console.error('No interview data found for the given ID.')
// // //             }
// // //         } catch (error) {
// // //             console.error('Error fetching interview details:', error)
// // //         }
// // //         console.log(mockquestion)
    
// // //     }
    
// // //     return (
// // //         <div>
// // // <div className='grid grid-cols-1 md:grid-cols-2 mt-5 ml-5'>
// // //     <QuestionSection jsonmockresp ={mockquestion} activeindex={activeindex}/>
// // // </div>
// // //         </div>
// // //     )
// // // }

// // // export default StartInterview


// // "use client"
// // import { db } from '@/utils/db'
// // import { Mockinterview } from '@/utils/schema'
// // import { eq } from 'drizzle-orm'
// // import React, { useEffect, useState } from 'react'
// // import QuestionSection from './_components/QuestionSection'
// // import Recordanswer from './_components/Recordanswer'

// // const StartInterview = ({ params }) => {
// //     const [interviewdata, setinterviewdata] = useState(null)
// //     const [mockquestion, setmockquestion] = useState(null)
// //     const [activeindex, setactiveindex] = useState(0)

// //     useEffect(() => {
// //         if (params.interviewid) {
// //             getinterviewdetails(params.interviewid)
// //         }
// //     }, [params.interviewid])

// //     const getinterviewdetails = async (interviewid) => {
// //         try {
// //             const result = await db.select().from(Mockinterview).where(eq(Mockinterview.mock_id, interviewid))
// //             if (result.length > 0) {
// //                 const jsonmockres = JSON.parse(result[0].json_mock_resp)
// //                 setmockquestion(jsonmockres)
// //                 setinterviewdata(result[0])
// //                 console.log('Mock questions set:', jsonmockres)
// //             } else {
// //                 console.error('No interview data found for the given ID.')
// //             }
// //         } catch (error) {
// //             console.error('Error fetching interview details:', error)
// //         }
// //     }

// //     useEffect(() => {
// //         console.log('Updated mockquestion:', mockquestion)
// //     }, [mockquestion])

// //     return (
// //         <div className='flex '>
// //             <div className='grid grid-cols-1 md:grid-cols-2 mt-5 ml-5'>
// //                 <QuestionSection jsonmockresp={mockquestion} activeindex={activeindex} />
// //             </div>
// //             <Recordanswer/>
// //         </div>
// //     )
// // }

// // export default StartInterview


// "use client"
// import { db } from '@/utils/db'
// import { Mockinterview } from '@/utils/schema'
// import { eq } from 'drizzle-orm'
// import React, { useEffect, useState } from 'react'
// import QuestionSection from './_components/QuestionSection'
// import Recordanswer from './_components/Recordanswer'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// const StartInterview = ({ params }) => {
//     const [interviewdata, setinterviewdata] = useState(null)
//     const [mockquestion, setmockquestion] = useState(null)
//     const [activeindex, setactiveindex] = useState(0)

//     useEffect(() => {
//         if (params.interviewid) {
//             getinterviewdetails(params.interviewid)
//         }
//     }, [params.interviewid])

//     const getinterviewdetails = async (interviewid) => {
//         try {
//             const result = await db.select().from(Mockinterview).where(eq(Mockinterview.mock_id, interviewid))
//             if (result.length > 0) {
//                 const jsonmockres = JSON.parse(result[0].json_mock_resp)
//                 setmockquestion(jsonmockres)
//                 setinterviewdata(result[0])
//                 console.log('Mock questions set:', jsonmockres)
//             } else {
//                 console.error('No interview data found for the given ID.')
//             }
//         } catch (error) {
//             console.error('Error fetching interview details:', error)
//         }
//     }

//     useEffect(() => {
//         console.log('Updated mockquestion:', mockquestion)
//     }, [mockquestion])

//     return (
//         <div className='flex w-full'>
//             <div className='flex w-full'>
//                 <div className='w-1/2 p-5 mt-8'>
//                     <QuestionSection jsonmockresp={mockquestion} activeindex={activeindex} />
//                 </div>
//                 <div className='w-1/2 p-5'>
//                     <Recordanswer jsonmockresp={mockquestion} activeindex={activeindex} interviewdata={interviewdata} />
//                 </div>
//                 <div className='flex justify-end gap-6'>
//                {activeindex > 0 && <Button onClick={() => setactiveindex(activeindex - 1)}>Previous Question</Button>}    
//                 {activeindex!==mockquestion?.length-1 && <Button onClick={() => setactiveindex(activeindex + 1)}>Next Question</Button>} 
//                 <Link href={'/dashboard/interview/'+interviewdata?mock_id+"/feedback"}> 
//                    {activeindex===mockquestion?.length-1 && <Button>Submit</Button>}
//                  </Link>   

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default StartInterview



"use client"
import { db } from '@/utils/db'
import { Mockinterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection'
import Recordanswer from './_components/Recordanswer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const StartInterview = ({ params }) => {
    const [interviewdata, setinterviewdata] = useState(null)
    const [mockquestion, setmockquestion] = useState(null)
    const [activeindex, setactiveindex] = useState(0)

    useEffect(() => {
        if (params.interviewid) {
            getinterviewdetails(params.interviewid)
        }
    }, [params.interviewid])

    const getinterviewdetails = async (interviewid) => {
        try {
            const result = await db.select().from(Mockinterview).where(eq(Mockinterview.mock_id, interviewid))
            if (result.length > 0) {
                const jsonmockres = JSON.parse(result[0].json_mock_resp)
                setmockquestion(jsonmockres)
                setinterviewdata(result[0])
                console.log('Mock questions set:', jsonmockres)
            } else {
                console.error('No interview data found for the given ID.')
            }
        } catch (error) {
            console.error('Error fetching interview details:', error)
        }
    }

    useEffect(() => {
        console.log('Updated mockquestion:', mockquestion)
    }, [mockquestion])

    return (
        <div className='flex w-full'>
            <div className='w-1/2 p-5 mt-8'>
                <QuestionSection jsonmockresp={mockquestion} activeindex={activeindex} />
                <div className='flex justify-end gap-6 mt-4'>
                    {activeindex > 0 && (
                        <Button onClick={() => setactiveindex(activeindex - 1)}>Previous Question</Button>
                    )}
                    {activeindex !== (mockquestion?.length - 1) && (
                        <Button onClick={() => setactiveindex(activeindex + 1)}>Next Question</Button>
                    )}
                    {activeindex === (mockquestion?.length - 1) && (
                        <Link href={`/dashboard/interview/${interviewdata?.mock_id}/feedback`}>
                            <Button>Submit</Button>
                        </Link>
                    )}
                </div>
            </div>
            <div className='w-1/2 p-5'>
                <Recordanswer jsonmockresp={mockquestion} activeindex={activeindex} interviewdata={interviewdata} />
            </div>
        </div>
    )
}

export default StartInterview

