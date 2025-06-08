'use client';

import MobileFrame from '../../component/layout/MobileFrame'
import Image from 'next/image';

import circle0Img from '../../../public/0.start/blur-circle-0.png';
import sweet1Img from '../../../public/4.result/sweet1.png';
import sweet2Img from '../../../public/4.result/sweet2.png';
import sweet3Img from '../../../public/4.result/sweet3.png';
import sweet4Img from '../../../public/4.result/sweet4.png';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='flex justify-center items-center flex-col gap-[10px]'>
          <Image priority className='absolute top-0 -translate-y-1/2 z-0' src={circle0Img} alt='circle0Img' />

          {/* 左上角甜點 */}
          <Image className='absolute top-0 left-0 m-4 w-[100px] z-5 pointer-events-none' src={sweet1Img} alt='sweet1' />
          {/* 右上角甜點 */}
          <Image className='absolute top-0 right-0 m-4 w-[100px] z-5 pointer-events-none' src={sweet2Img} alt='sweet2' />
          {/* 左下角甜點 */}
          <Image className='absolute bottom-0 left-0 m-4 w-[100px] z-5 pointer-events-none' src={sweet3Img} alt='sweet3' />
          {/* 右下角甜點 */}
          <Image className='absolute bottom-0 right-0 m-4 w-[100px] z-5 pointer-events-none' src={sweet4Img} alt='sweet4' />

          <div className='text-[#96895d] py-[8px] font-bold text-3xl flex justify-center items-center z-10'
            >喜久福小測驗
          </div>
          <div className='w-[300%] h-[2px] bg-[#b1a36e] rounded-full z-10'></div>

          <div className='text-[#96895d] text-center text-lg font-bold leading-loose tracking-wide z-10'>
            喜久福是日本宮城縣仙台市的名產，口感柔軟甜而不膩
          </div>
          <div className='text-[#96895d] text-center text-lg font-bold leading-loose tracking-wide z-10 mt-2'>
            而每個人心中，都住著一顆喜久福<br/>
            你也許還在尋找自己是什麼樣的存在<br/>
            但別擔心，無論是哪一種風味<br/>
            都有值得被喜歡的模樣
          </div>
          <div className='text-[#96895d] text-center text-lg font-bold leading-loose tracking-wide z-10 mt-2'>
            現在，請放慢腳步<br/>
            來場小小的甜點旅行<br/>
            看看你是哪一種「一咬就上癮」的喜久福吧 !
          </div>

          {/*<Image onClick={nextStep} className='w-[160px] z-10' src={startBtn} alt='startBtn' />*/}
          <div 
            className='bg-[#b1a36e] w-[150px] rounded-full text-white
                        py-[16px] font-bold text-lg flex justify-center items-center
                        shadow-[0px_4px_0px_1px_#96895d] cursor-pointer hover:translate-y-0.5 transition z-10'
            onClick={nextStep}
          > 開始 ! </div>
          <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle0Img} alt='circle0Img' />
        </div>
      </MobileFrame>
    </>
  );
}
