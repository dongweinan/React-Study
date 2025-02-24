import MainMeun from './MainMenu'

const Layout = (props) => {
  return (
    <div>
      <MainMeun />
      <hr />
      {props.children}
    </div>
  )
}
export default Layout
