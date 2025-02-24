import { useRef } from 'react'

export const RefTest = () => {
  const headerRef = useRef()
  const btnClick = () => {
    // const header = document.getElementById('header')
    const header = headerRef.current
    header.innerHTML = '哈哈'
  }
  return (
    <div>
      <div id="header" ref={headerRef}>
        我是标题
      </div>
      <button onClick={btnClick}>点我一下</button>
    </div>
  )
}
