import './App.css'
import About from './components/about'
import Home from './components/home'
import { Route } from 'react-router-dom'
import Menu from './components/menu'

function App() {
  return (
    <div>
      <Menu />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
    </div>
  )
}

export default App
