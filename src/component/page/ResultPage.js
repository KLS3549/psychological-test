'use client';

import MobileFrame from '../../component/layout/MobileFrame'
import { usePsyStore} from '../../app/store/store';
import Image from 'next/image';
import result1 from '../../../public/4.result/result-1.png';
import result2 from '../../../public/4.result/result-2.png';
import result3 from '../../../public/4.result/result-3.png';
import circle1Img from '../../../public/0.start/blur-circle-1.png';

export default function QuestionPage() {

  const psyState = usePsyStore( (state) => state );

  const playAgain = function(){
    window.location.reload();
  }

  return (
    <>
        <MobileFrame>
          <div className='flex justify-center items-center flex-col w-[250px] gap-[5px]'>
            <div className='z-5'>
              {
                psyState.score  <= 7 && 
                <Image src={result1} alt='result1' />
              }

              {
                (psyState.score  > 7 && psyState.score <= 10) &&
                <Image src={result2} alt='result2' />
              }

              {
                psyState.score  > 10 && 
                <Image src={result3} alt='result3' />
              }
            </div>  

            <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle1Img} alt='circle1Img' />

            <div 
              className={`relative z-10 bg-[#B65A0F] w-full rounded-full text-white 
                py-[16px] text-sm flex justify-center items-center font-medium 
                shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}

              onClick={playAgain}
            > 再玩一次 </div>

          </div>
        </MobileFrame>
    </>
  );
}
