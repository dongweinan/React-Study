import './log.css'
import { LogItem } from './logItem/logItem'
import Card from '../card/card'
export const Log = (props) => {
  const getLogItem = props.logList?.map((item) => (
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
  return (
    <Card className="logs">
      {props.logList.length > 0 ? getLogItem : <p>暂时没有数据！</p>}
    </Card>
  )
}
