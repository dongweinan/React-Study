import './App.css'
// import { EventTest } from './components/eventTest/eventTest'
import { Log } from './components/log/log'
// import { StateTest } from './components/stateTest/stateTest'
// import { RefTest } from './components/refTest/refTest'
// import LeiTest from './components/leiTest/leiTest'
// import Card from './components/card/card'
import LogForm from './components/logForm/logForm'
import { useState } from 'react'

const App = () => {
  const [logList, setLogList] = useState([
    {
      id: 1,
      date: new Date('2022-01-02'),
      content: '学习六脉神剑',
      time: '10分钟',
    },
    {
      id: 2,
      date: new Date('2022-01-02'),
      content: '学习凌波微步',
      time: '20分钟',
    },
    {
      id: 3,
      date: new Date('2022-01-02'),
      content: '学习降龙十八掌',
      time: '30分钟',
    },
    {
      id: 4,
      date: new Date('2021-01-02'),
      content: '学习九阳神功',
      time: '40分钟',
    },
  ])
  const onSaveLogHandle = (newLog) => {
    console.log(newLog)
    newLog.id = new Date() + ''
    setLogList([newLog, ...logList])
  }
  const onDelLog = (id) => {
    setLogList(logList.filter((item) => item.id !== id))
  }
  return (
    <div className="app">
      <LogForm onSaveLog={onSaveLogHandle} />
      <Log logList={logList} onDelLog={onDelLog} />
    </div>
  )
}

export default App
