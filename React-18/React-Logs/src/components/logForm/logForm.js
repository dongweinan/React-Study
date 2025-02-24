import './logForm.css'
import Card from '../card/card'
import { useRef, useState } from 'react'

const LogForm = (props) => {
  const formList = [
    {
      key: 'date',
      label: '日期',
      type: 'date',
    },
    {
      key: 'content',
      label: '内容',
      type: 'text',
    },
    {
      key: 'time',
      label: '时间',
      type: 'number',
    },
  ]
  let [formVal, setFormVal] = useState({ date: '', content: '', time: '' })

  const getFormList = () => {
    return formList.map((item) => (
      <div className="form-item" key={item.key}>
        <label htmlFor={`${item.key}`}>{item.label}:</label>
        <input
          ref={inputRef}
          id={item.key}
          type={item.type}
          value={formVal[item.key]}
          onChange={inputChange}
        ></input>
      </div>
    ))
  }
  const addHandle = () => {
    const newLog = {
      date: new Date(formVal.date),
      content: formVal.content,
      time: formVal.time,
    }
    props.onSaveLog(newLog)

    setFormVal({ date: '', content: '', time: '' })
  }
  const inputChange = (e) => {
    const msg = e.target.id
    const newVal = e.target.value
    setFormVal({ ...formVal, [msg]: newVal })
  }
  const inputRef = useRef()
  return (
    <Card className="log-form">
      <form className="form-wrap">{getFormList()}</form>
      <button className="form-btn" onClick={addHandle}>
        添加
      </button>
    </Card>
  )
}
export default LogForm
