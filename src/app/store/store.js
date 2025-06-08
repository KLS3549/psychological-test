import { create } from 'zustand'

// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 5,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}))


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title:"如果週末只能做一件事，你最想做的是？",
      options: [
        {title: "靜靜坐在咖啡廳讀書或看電影", value: 1},
        {title: "和家人一起吃飯、聊天、看電視", value: 3},
        {title: "去一趟小旅行、逛特色小店或夜市", value: 5},
        {title: "漫步老街，喝一杯香氣濃郁的茶", value: 7}
      ]
    },
    "2":{
      title: "面對壓力，你的反應是？",
      options: [
        {title: "找個安靜角落沉澱情緒", value: 1},
        {title: "和熟悉的人傾訴或尋求安慰", value: 3},
        {title: "吃點甜食或做些有趣的事轉移注意力", value: 5},
        {title: "沖一壺茶，慢慢理清思緒", value: 7}
      ]
    },
    "3":{
      title: "以下哪種描述最貼近你？",
      options: [
        {title: "沉穩內斂、喜歡有深度的事物", value: 1},
        {title: "溫和親切，是朋友眼中的療癒系", value: 3},
        {title: "好奇心旺盛、喜歡新鮮感與地方文化", value: 5},
        {title: "成熟穩重，重視質感與生活品味", value: 7}
      ]
    },
    "4":{
      title: "你理想的下午茶是？",
      options: [
        {title: "抹茶甜點配上熱抹茶拿鐵", value: 1},
        {title: "蓬鬆蛋糕搭配香濃牛奶", value: 3},
        {title: "有創意的在地風味甜點", value: 5},
        {title: "和菓子搭配香氣四溢的焙茶", value: 7}
      ]
    },
    "5":{
      title: "在朋友眼中，你是怎麼樣的存在？",
      options: [
        {title: "靜靜陪伴的傾聽者，總能讓人安心", value: 1},
        {title: "總是溫柔照顧大家，像家人一樣可靠", value: 3},
        {title: "最會帶氣氛和笑點，大家開心的來源", value: 5},
        {title: "雖然不多話，但總能給出最深刻的建議", value: 7}
      ]
    }
  },
}))


export { usePsyStore, useQuestionStore}