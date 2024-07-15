// import React from 'react'

// const QuestionSection = ({jsonmockresp,activeindex}) => {
//   return (
//     <div className='p-5 border rounded-lg '>
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
// {jsonmockresp&& jsonmockresp.map((item,index)=>{
//     return(
//         <h2 className={`p-2 bg bg-secondary rounded-full text-sm md:text-sm text-center cursor-pointer${activeindex===index&&'bg-blue-600 text-white'}`}>Question #{index+1}</h2>
//     )
// }
// )}
// <h2>{jsonmockresp[activeindex]?.question}</h2>

//         </div>
//     </div>
//   )
// }

// export default QuestionSection



import { Lightbulb, Volume, Volume2 } from 'lucide-react'
import React from 'react'

const QuestionSection = ({ jsonmockresp, activeindex }) => {
    const texttospeach = (text) => {
        if('speechSynthesis' in window){
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
    }
    else{
alert("Your Browser Does Not Support Speech Synthesis");
    }
    }
  return (

    <div className='p-5 border rounded-lg '>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {jsonmockresp && jsonmockresp.length > 0 && jsonmockresp.map((item, index) => {
          return (
            <h2 
              key={index} 
              className={`p-2  bg-secondary rounded-full text-sm md:text-sm text-center cursor-pointer ${activeindex === index ? 'bg-blue-500 text-white' : ''}`}
            >
              Question #{index + 1}
            </h2>
          )
        })}
      </div>
      {jsonmockresp && jsonmockresp.length > 0 && activeindex >= 0 && activeindex < jsonmockresp.length && (
        <h2 className='mt-5 font-semibold'>{jsonmockresp[activeindex]?.question}</h2>
    
      )}
      <Volume2 className='cursor-pointer mt-3' onClick={()=>texttospeach(jsonmockresp[activeindex]?.item)}/>
      <div>
        <h2 className='border rounded-lg p-5 bg-blue-200 mt-4'>
            <Lightbulb/>
            <strong>Note:</strong>
            <h2 className='text-sm text-primary'>Click Record Answer When you Want To Answer the Question. At the End of interview we will give feedback along with correct answer for Each Question and Yor Answer to Compare   </h2>
        </h2>
      </div>
    </div>
  )
}

export default QuestionSection
