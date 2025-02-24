import { Outlet } from 'react-router-dom'
const A = () => {
  return (
    <div>
      <h1>A组件</h1>
      <Outlet />
    </div>
  )
}
export default A
