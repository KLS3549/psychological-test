'use client';

import MobileFrame from '../../component/layout/MobileFrame'
import { usePsyStore} from '../../app/store/store';
import Image from 'next/image';

import circle0Img from '../../../public/0.start/blur-circle-0.png';
import sweet1Img from '../../../public/4.result/sweet1.png';
import sweet2Img from '../../../public/4.result/sweet2.png';
import sweet3Img from '../../../public/4.result/sweet3.png';
import sweet4Img from '../../../public/4.result/sweet4.png';

import circleAImg from '../../../public/4.result/blur-circle-a.png';
import circleBImg from '../../../public/4.result/blur-circle-b.png';
import circleCImg from '../../../public/4.result/blur-circle-c.png';
import circleDImg from '../../../public/4.result/blur-circle-d.png';


export default function QuestionPage() {

  const psyState = usePsyStore( (state) => state );

  const playAgain = function(){
    window.location.reload();
  }

  return (
    <>
        <MobileFrame>
          <div className='flex justify-center items-center flex-col w-[500px] gap-[50px] font-bold'>

              {
                (psyState.score  >= 5 && psyState.score <= 12) && 
                <div className='flex justify-center items-center flex-col gap-[10px]'>
                  <Image priority className='absolute top-0 -translate-y-1/2 z-0' src={circleAImg} alt='circleAImg z-0' />
                  <div className="flex justify-center mb-4 z-5">
                    <Image
                      className="w-50 h-auto" // 調整圖片大小
                      src={sweet1Img}
                      alt="sweet1Img"
                    />
                  </div> 
                  <div className=' text-[#96895d] text-center text-3xl font-bold leading-loose tracking-wide z-5'>
                    抹茶喜久福
                  </div>
                  <div className='w-[300%] h-[2px] bg-[#b1a36e] rounded-full z-10'></div>           
                  <div className=' text-[#96895d] text-center text-lg font-bold leading-loose tracking-wide z-5'>
                    你是個追求深度與質感的人，外表平靜，內在豐富，<br/>
                    你對品味與品質特別敏感，<br/>
                    就像人氣王抹茶喜久福一樣，經典又不失格調！
                  </div>
                </div>
              }

              {
                (psyState.score  >= 13 && psyState.score <= 20) &&
                <div className='flex justify-center items-center flex-col gap-[10px]'>
                  <Image priority className='absolute top-0 -translate-y-1/2 z-0' src={circleBImg} alt='circleBImg z-0' />
                  <div className="flex justify-center mb-4 z-5">
                    <Image
                      className="w-50 h-auto" // 調整圖片大小
                      src={sweet2Img}
                      alt="sweet2Img"
                    />
                  </div> 
                  <div className=' text-[#96895d] text-center text-3xl font-bold leading-loose tracking-wide z-5'>
                    生奶油喜久福
                  </div>
                  <div className='w-[300%] h-[2px] bg-[#b1a36e] rounded-full z-10'></div>  
                  <div className='text-[#96895d] text-center text-lg font-bold leading-loose tracking-wide z-5'>
                    你溫柔、體貼，容易讓人感到安心，<br/>
                    和你在一起就像品嚐一口生奶油喜久福一樣，舒適無負擔，<br/>
                    無論年齡、背景，你總能成為大家喜愛的存在！
                  </div>
                </div>
              }

              {
                (psyState.score  >= 21 && psyState.score <= 27) && 
                <div className='flex justify-center items-center flex-col gap-[10px]'>
                  <Image priority className='absolute top-0 -translate-y-1/2 z-0' src={circleDImg} alt='circleDImg z-0' />
                  <div className="flex justify-center mb-4 z-5">
                    <Image
                      className="w-50 h-auto" // 調整圖片大小
                      src={sweet3Img}
                      alt="sweet3Img"
                    />
                  </div> 
                  <div className=' text-[#96895d] text-center text-3xl font-bold leading-loose tracking-wide z-5'>
                    毛豆生奶油喜久福
                  </div>
                  <div className='w-[300%] h-[2px] bg-[#b1a36e] rounded-full z-10'></div>  
                  <div className='text-[#96895d] text-center text-lg font-bold leading-loose tracking-wide z-5'>
                    你是個好奇寶寶，喜歡發掘生活中的小趣味，不按牌理出牌，<br/>
                    就像使用仙台特產毛豆製作的毛豆生奶油喜久福，<br/>
                    有著令人驚喜的清新口感，是團體中的活潑亮點！
                  </div>
                </div>
              }

              {
                (psyState.score  >= 28 && psyState.score <= 35) &&
                <div className='flex justify-center items-center flex-col gap-[10px]'>
                  <Image priority className='absolute top-0 -translate-y-1/2 z-0' src={circleCImg} alt='circleCImg z-0' />
                  <div className="flex justify-center mb-4 z-5">
                    <Image
                      className="w-50 h-auto" // 調整圖片大小
                      src={sweet4Img}
                      alt="sweet4Img"
                    />
                  </div> 
                  <div className=' text-[#96895d] text-center text-3xl font-bold leading-loose tracking-wide z-5'>
                    焙茶生奶油喜久福
                  </div>
                  <div className='w-[300%] h-[2px] bg-[#b1a36e] rounded-full z-10'></div>  
                  <div className='text-[#96895d] text-center text-lg font-bold leading-loose tracking-wide z-5'>
                    你擁有成熟品味與沉穩氣質，喜歡細膩的香氣與深層的滋味，<br/>
                    不盲從流行，而是堅持自己的選擇，<br/>
                    如同焙茶生奶油喜久福，低調卻令人難以忘懷！
                  </div>
                </div>
              } 
          
            <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle0Img} alt='circle0Img z-10' />

            <div 
              className={`relative z-10 bg-[#b1a36e] w-[150px] rounded-full text-white 
                py-[16px] font-bold text-lg flex justify-center items-center
                shadow-[0px_4px_0px_1px_#96895d] cursor-pointer hover:translate-y-0.5 transition`}

              onClick={playAgain}
            > 再玩一次 </div>

          </div>
        </MobileFrame>
    </>
  );
}
