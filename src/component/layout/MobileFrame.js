'use client';

export default function MobileFrame({children}) {

  return (
    <>        
      <div className="w-[50%] min-w-[380px] max-w-[1000px] h-[85%] p-[52px] bg-[#f4ead7] rounded-2xl flex justify-center items-center relative overflow-hidden">
        {children}
      </div>
    </>
  );
}
