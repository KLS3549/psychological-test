'use client';

import MobileFrame from '../../component/layout/MobileFrame'
import Image from 'next/image';
import titleDRImg from '../../../public/3.displayResult/title-DR.svg';
import circle1Img from '../../../public/0.start/blur-circle-1.png';

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='flex justify-center items-center flex-col gap-[60px]'>
          <Image className='absolute top-0 -translate-y-1/2 z-0' src={circle1Img} alt='circle1Img' />
          <Image src={titleDRImg} alt='titleDR' />

          <div 
            className={`bg-[#B65A0F] w-full rounded-full text-white 
              py-[16px] text-sm flex justify-center items-center font-medium 
              shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
            onClick={nextStep}
          > 查看結果 </div>

          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle1Img} alt='circle1Img' />

        </div>
      </MobileFrame>
    </>
  );
}
