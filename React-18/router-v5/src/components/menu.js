import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Menu = () => {
  return (
    <div>
      <ul>
        <NavLink
          exact
          activeClassName="active"
          activeStyle={{ color: 'red' }}
          to="/"
        >
          首页
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          activeStyle={{ color: 'red' }}
          to="/about"
        >
          关于我们
        </NavLink>
      </ul>
    </div>
  )
}
export default Menu
