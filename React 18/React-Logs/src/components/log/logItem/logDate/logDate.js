import './logDate.css'

export const LogDate = (props) => {
  const month = props.date.toLocaleString('zh-CN', { month: 'long' })
  const date = props.date.getDate()
  return (
    <div className="item-date">
      <div className="month">{month}</div>
      <div className="day">{date}</div>
    </div>
  )
}
