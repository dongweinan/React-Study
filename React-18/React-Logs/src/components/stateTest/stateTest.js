import './stateTest.css'
import { useState } from 'react'

export const StateTest = () => {
  console.log('-------------------')
  let [num, setNum] = useState(1)
  const addHandle = () => {
    setNum(num + 1)
    console.log(num)
  }
  const reduceHandle = () => {
    setNum(num - 1)
    console.log(num)
  }
  return (
    <div className="state-test">
      <h1>{num}</h1>
      <button onClick={reduceHandle}>-</button>
      <button onClick={addHandle}>+</button>
    </div>
  )
}
