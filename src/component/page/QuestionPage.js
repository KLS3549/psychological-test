'use client';

import MobileFrame from '../../component/layout/MobileFrame'
import Image from 'next/image';
import q1Up from '../../../public/1.question/q1-up.png';
import q1Down from '../../../public/1.question/q1-down.png';
import q2Up from '../../../public/1.question/q2-up.png';
import q2Down from '../../../public/1.question/q2-down.png';
import q3Up from '../../../public/1.question/q3-up.png';
import q3Down from '../../../public/1.question/q3-down.png';
import circle2Img from '../../../public/0.start/blur-circle-2.png';
import circle3Img from '../../../public/0.start/blur-circle-3.png';
import circle4Img from '../../../public/0.start/blur-circle-4.png';
import { usePsyStore, useQuestionStore } from '@/src/app/store/store';


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state)=> state )
  const psyData = usePsyStore( (state)=> state )

  const clickAnswer = function(option){
    nextStep();

    psyData.updateScore(psyData.score + option.value);

    console.log(option.title, option.value);
  }

  const getMainColor = function(prefix){
    let colorString = "";
    if(questionIndex == 0){
      colorString = prefix + "-[#90B62A]";
    }else if(questionIndex == 1){
      colorString = prefix + "-[#DD3E3E]";
    }else{
      colorString = prefix + "-[#1098EC]";
    }
    return colorString
  }

  return (
    <>
      <MobileFrame>

        {
          questionIndex == 0 &&
          <Image className='absolute top-0 -translate-y-1/2 z-0' src={circle2Img} alt='circle2Img' />
        }
        {
          questionIndex == 1 &&
          <Image className='absolute top-0 -translate-y-1/2 z-0' src={circle3Img} alt='circle3Img' />
        }
        {
          questionIndex == 2 &&
          <Image className='absolute top-0 -translate-y-1/2 z-0' src={circle4Img} alt='circle4Img' />
        }

        <div className='flex flex-col items-center gap-[26px] z-10'>

          {
            questionIndex == 0 &&
            <Image src={q1Up} className='w-[88px]' alt='q1Up' />
          }
          {
            questionIndex == 1 &&
            <Image src={q2Up} className='w-[88px]' alt='q2Up' />
          }
          {
            questionIndex == 2 &&
            <Image src={q3Up} className='w-[88px]' alt='q3Up' />
          }

          {
            questionIndex == 0 &&
            <div className='text-[#90B62A] border-2 border-[#90B62A] rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
          }

          {
            questionIndex == 1 &&
            <div className='text-[#b62a2a] border-2 border-[#b62a2a] rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
          }

          {
            questionIndex == 2 &&
            <div className='text-[#2a62b6] border-2 border-[#2a62b6] rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
          }

          {
            questionIndex == 0 &&
            <div 
              className='text-center font-bold text-3xl text-[#90B62A] mb-[60px]'
            > {questionData.questions[questionIndex+1].title} </div>
          }
          {
            questionIndex == 1 &&
            <div 
              className='text-center font-bold text-3xl text-[#b62a2a] mb-[60px]'
            > {questionData.questions[questionIndex+1].title} </div>
          }
          {
            questionIndex == 2 &&
            <div 
              className='text-center font-bold text-3xl text-[#2a62b6] mb-[60px]'
            > {questionData.questions[questionIndex+1].title} </div>
          }


          
          {
            questionData.questions[questionIndex+1].options.map( (option, index)=>{
              
              return (
                <>
                  {
                    questionIndex == 0 &&
                    <div 
                      className={`bg-[#BEE351] w-full rounded-full text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition`}

                      onClick={() => clickAnswer(option)}
                      key={option.title + "green"}
                    > {option.title} </div>
                  }

                  {
                    questionIndex == 1 &&
                    <div 
                      className={`bg-[#DD3E3E] w-full rounded-full text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        shadow-[0px_4px_0px_1px_#b62a2a] cursor-pointer hover:translate-y-0.5 transition`}

                      onClick={() => clickAnswer(option)}
                      key={option.title + "red"}
                    > {option.title} </div>
                  }

                  {
                    questionIndex == 2 &&
                    <div 
                      className={`bg-[#89BCFF] w-full rounded-full text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        shadow-[0px_4px_0px_1px_#2a62b6] cursor-pointer hover:translate-y-0.5 transition`}

                      onClick={() => clickAnswer(option)}
                      key={option.title + "blue"}
                    > {option.title} </div>
                  }

                </>
              )
            })
          }

          {
            questionIndex == 0 &&
            <Image src={q1Down} className='w-[88px]' alt='q1Down' />
          }
          {
            questionIndex == 1 &&
            <Image src={q2Down} className='w-[88px]' alt='q2Down' />
          }
          {
            questionIndex == 2 &&
            <Image src={q3Down} className='w-[88px]' alt='q3Down' />
          }          
          
        </div>

        {
          questionIndex == 0 &&
          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle2Img} alt='circle2Img' />
        }
        {
          questionIndex == 1 &&
          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle3Img} alt='circle3Img' />
        }
        {
          questionIndex == 2 &&
          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle4Img} alt='circle4Img' />
        }

      </MobileFrame>
    </>
  );
}
