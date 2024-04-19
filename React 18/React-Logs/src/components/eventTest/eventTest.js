export const EventTest = () => {
  const clickHandle = (e) => {
    // 阻止事件冒泡
    e.stopPropagation()
    // 阻止默认行为
    e.preventDefault()
    alert('点我一下')
  }
  return (
    <div
      style={{
        width: 200,
        height: 200,
        margin: '100px auto',
        backgroundColor: '#bfc',
      }}
      onClick={() => {
        alert('父元素事件')
      }}
    >
      <button onClick={clickHandle}>点我一下---</button>
      <a href="http://www.baidu.com" onClick={clickHandle}>
        我是超链接
      </a>
    </div>
  )
}
