'use client';

import MobileFrame from '../../component/layout/MobileFrame'
import Image from 'next/image';

import circle0Img from '../../../public/0.start/blur-circle-0.png';
import sweet1Img from '../../../public/4.result/sweet1.png';
import sweet2Img from '../../../public/4.result/sweet2.png';
import sweet3Img from '../../../public/4.result/sweet3.png';
import sweet4Img from '../../../public/4.result/sweet4.png';


export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='flex justify-center items-center flex-col'>

          <Image priority className='absolute top-0 -translate-y-1/2 z-0' src={circle0Img} alt='circle0Img' />

          {/* 左上角甜點 */}
          <Image className='absolute top-0 left-0 m-2 md:m-4 w-[100px] md:w-[180px] z-5 pointer-events-none' src={sweet1Img} alt='sweet1' />
          {/* 右上角甜點 */}
          <Image className='absolute top-0 right-0 m-2 md:m-4 w-[100px] md:w-[180px] z-5 pointer-events-none' src={sweet2Img} alt='sweet2' />
          {/* 左下角甜點 */}
          <Image className='absolute bottom-0 left-0 m-2 md:m-4 w-[100px] md:w-[180px] z-5 pointer-events-none' src={sweet3Img} alt='sweet3' />
          {/* 右下角甜點 */}
          <Image className='absolute bottom-0 right-0 m-2 md:m-4 w-[100px] md:w-[180px] z-5 pointer-events-none' src={sweet4Img} alt='sweet4' />


          <div className='text-[#96895d] py-[10px] font-bold text-xl md:text-3xl flex justify-center items-center z-10 mt-5'
            >一口咬下，你會是哪種喜久福？
          </div>

          
          <div className='w-[300%] h-[1px] bg-[#b1a36e] rounded-full'></div>

          <div 
            className={`bg-[#b1a36e] w-[150px] rounded-full text-white 
              py-[16px] font-bold text-lg flex justify-center items-center
              shadow-[0px_4px_0px_1px_#96895d] cursor-pointer hover:translate-y-0.5 transition z-10 mt-12`}
            onClick={nextStep}
          > 查看結果 </div>

          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle0Img} alt='circle0Img' />

        </div>
      </MobileFrame>
    </>
  );
}
