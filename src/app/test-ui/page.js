'use client';
import { DatePicker } from 'antd';
import CalendarPage from '../../component/others/CalendarPage'

export default function TestUI() {
  
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是: " + dateString);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center gap-5 flex-wrap overflow-auto">
      {/* <DatePicker onChange={onChange} needConfirm /> */}
      <CalendarPage year="2025" month="五月" day="01" weekDay="星期四" lunar="初四"></CalendarPage>
      <CalendarPage year="2025" month="五月" day="02" weekDay="星期五" lunar="初五"></CalendarPage>
      <CalendarPage year="2025" month="五月" day="03" weekDay="星期六" lunar="初六"></CalendarPage>
      <CalendarPage year="2025" month="五月" day="04" weekDay="星期日" lunar="初七"></CalendarPage>
      <CalendarPage year="2025" month="五月" day="05" weekDay="星期一" lunar="初八"></CalendarPage>
      <CalendarPage year="2025" month="五月" day="06" weekDay="星期二" lunar="初九"></CalendarPage>
      <CalendarPage year="2025" month="五月" day="07" weekDay="星期三" lunar="初十"></CalendarPage>
      <CalendarPage year="2025" month="五月" day="08" weekDay="星期四" lunar="十一"></CalendarPage>

      

     
    </div>
  );
}
