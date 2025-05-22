'use client';

export default function CalendarPage({year, month, day, weekDay, lunar}) {

  return (
    <>
        <div className='relative bg-white rounded-2xl flex items-center 
        justify-center flex-col text-[#4C37AC] p-6'>
            <div className='flex justify-between gap-3'>
                <div className=''> {year} </div>
                <div className=''> 乙巳年[蛇]四月{lunar} </div>
                <div className=''> {month} </div>
            </div>
            <div className='text-[240px] font-extrabold'> {day} </div>
            <div className='text-[60px]'> {weekDay} </div>
        </div>
    </>
  );
}
