import './log.css'
import { LogItem } from './logItem/logItem'
import Card from '../card/card'
import LogFilter from './logFilter/logFilter'
import { useState } from 'react'
export const Log = (props) => {
  const [year, setYear] = useState(2022)
  const logFilterList = props.logList.filter(
    (item) => item.date.getFullYear() == year
  )
  const getLogItem = logFilterList?.map((item) => (
    <LogItem
      key={item.id}
      id={item.id}
      date={item.date}
      content={item.content}
      time={item.time}
      onDelLog={() => {
        props.onDelLog(item.id)
      }}
    />
  ))

  const onFilterChange = (val) => {
    setYear(val)
  }
  return (
    <Card className="logs">
      <LogFilter year={year} onFilterChange={onFilterChange} />
      {logFilterList.length > 0 ? getLogItem : <p>暂时没有数据！</p>}
    </Card>
  )
}
