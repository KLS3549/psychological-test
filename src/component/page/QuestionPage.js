'use client';

import MobileFrame from '../../component/layout/MobileFrame'
import Image from 'next/image';
import circle1Img from '../../../public/0.start/blur-circle-1.png';
import circle2Img from '../../../public/0.start/blur-circle-2.png';
import circle3Img from '../../../public/0.start/blur-circle-3.png';
import circle4Img from '../../../public/0.start/blur-circle-4.png';
import circle5Img from '../../../public/0.start/blur-circle-5.png';
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
          <Image priority className='absolute top-0 -translate-y-1/2 z-0' src={circle1Img} alt='circle1Img' />
        }
        {
          questionIndex == 1 &&
          <Image className='absolute top-0 -translate-y-1/2 z-0' src={circle2Img} alt='circle2Img' />
        }
        {
          questionIndex == 2 &&
          <Image className='absolute top-0 -translate-y-1/2 z-0' src={circle3Img} alt='circle3Img' />
        }
        {
          questionIndex == 3 &&
          <Image className='absolute top-0 -translate-y-1/2 z-0' src={circle4Img} alt='circle4Img' />
        }
        {
          questionIndex == 4 &&
          <Image className='absolute top-0 -translate-y-1/2 z-0' src={circle5Img} alt='circle5Img' />
        }

        <div className='flex flex-col items-center gap-[26px] z-10'>

          {/*上方數字圓圈*/}

          {
            questionIndex == 0 &&
            <div className='text-[#8ca17e] border-2 border-[#8ca17e] rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
          }

          {
            questionIndex == 1 &&
            <div className='text-[#89815d] border-2 border-[#89815d] rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
          }

          {
            questionIndex == 2 &&
            <div className='text-[#82a69f] border-2 border-[#82a69f] rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
          }

          {
            questionIndex == 3 &&
            <div className='text-[#b0a571] border-2 border-[#b0a571] rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
          }

          {
            questionIndex == 4 &&
            <div className='text-[#987e60] border-2 border-[#987e60] rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
          }

          {/*題目文字*/}

          {
            questionIndex == 0 &&
            <div 
              className='text-center font-bold text-2xl text-[#8ca17e] mb-[10px]'
            > {questionData.questions[questionIndex+1].title} </div>
          }
          {
            questionIndex == 1 &&
            <div 
              className='text-center font-bold text-2xl text-[#89815d] mb-[10px]'
            > {questionData.questions[questionIndex+1].title} </div>
          }
          {
            questionIndex == 2 &&
            <div 
              className='text-center font-bold text-2xl text-[#82a69f] mb-[10px]'
            > {questionData.questions[questionIndex+1].title} </div>
          }
          {
            questionIndex == 3 &&
            <div 
              className='text-center font-bold text-2xl text-[#b0a571] mb-[10px]'
            > {questionData.questions[questionIndex+1].title} </div>
          }
          {
            questionIndex == 4 &&
            <div 
              className='text-center font-bold text-2xl text-[#987e60] mb-[10px]'
            > {questionData.questions[questionIndex+1].title} </div>
          }

          {/*分隔線*/}

          {
            questionIndex == 0 &&
            <div className='w-[300%] h-[1px] bg-[#8ca17e] rounded-full z-10'></div>
          }
          {
            questionIndex == 1 &&
            <div className='w-[300%] h-[1px] bg-[#89815d] rounded-full z-10'></div>
          }
          {
            questionIndex == 2 &&
            <div className='w-[300%] h-[1px] bg-[#82a69f] rounded-full z-10'></div>
          }
          {
            questionIndex == 3 &&
            <div className='w-[300%] h-[1px] bg-[#b0a571] rounded-full z-10'></div>
          }
          {
            questionIndex == 4 &&
            <div className='w-[300%] h-[1px] bg-[#987e60] rounded-full z-10'></div>
          }

          {/*選項按鈕與文字*/}
          
          {
            questionData.questions[questionIndex + 1].options.map((option, index) => {
              let bgColor = "";
              let shadowColor = "";

              switch (questionIndex) {
                case 0:
                  bgColor = "bg-[#a7c197]";
                  shadowColor = "shadow-[0px_4px_0px_1px_#8ca17e]";
                  break;
                case 1:
                  bgColor = "bg-[#a69d71]";
                  shadowColor = "shadow-[0px_4px_0px_1px_#89815d]";
                  break;
                case 2:
                  bgColor = "bg-[#97c1b9]";
                  shadowColor = "shadow-[0px_4px_0px_1px_#82a69f]";
                  break;
                case 3:
                  bgColor = "bg-[#c9bb7f]";
                  shadowColor = "shadow-[0px_4px_0px_1px_#b0a571]";
                  break;
                case 4:
                  bgColor = "bg-[#b0926e]";
                  shadowColor = "shadow-[0px_4px_0px_1px_#987e60]";
                  break;
                default:
                  break;
              }

              return (
                <div
                  key={option.title + "-" + index} // 確保 key 唯一
                  className={`${bgColor} ${shadowColor} w-[400px] rounded-full text-white 
                    py-[16px] font-bold text-lg flex justify-center items-center 
                    cursor-pointer hover:translate-y-0.5 transition`}
                  onClick={() => clickAnswer(option)}
                >
                  {option.title}
                </div>
              );
            })
          }


        </div>

        {
          questionIndex == 0 &&
          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle1Img} alt='circle1Img' />
        }
        {
          questionIndex == 1 &&
          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle2Img} alt='circle2Img' />
        }
        {
          questionIndex == 2 &&
          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle3Img} alt='circle3Img' />
        }
        {
          questionIndex == 3 &&
          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle4Img} alt='circle4Img' />
        }
        {
          questionIndex == 4 &&
          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle5Img} alt='circle5Img' />
        }
        

      </MobileFrame>
    </>
  );
}
