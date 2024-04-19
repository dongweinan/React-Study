import './logItem.css'
import { LogDate } from './logDate/logDate'
import Card from '../../card/card'
import ConfirmModel from '../../confirmModal/confirmModal'
import { useState } from 'react'
export const LogItem = (props) => {
  const [confirmShow, setConfirmShow] = useState(false)
  const delHandle = (e) => {
    setConfirmShow(true)
  }
  const okHandle = () => {
    props.onDelLog()
    setConfirmShow(false)
  }
  const cancelHandle = () => {
    setConfirmShow(false)
  }
  return (
    <div>
      <Card className="log-item">
        <LogDate date={props.date} />
        <div className="item-content">
          <div className="content">{props.content}</div>
          <div className="time">{props.time}</div>
        </div>
        <div className="delete" onClick={delHandle}>
          X
        </div>
      </Card>
      {confirmShow && (
        <ConfirmModel
          confirmText="确定执行该操作吗？"
          okHandle={okHandle}
          cancelHandle={cancelHandle}
        />
      )}
    </div>
  )
}
