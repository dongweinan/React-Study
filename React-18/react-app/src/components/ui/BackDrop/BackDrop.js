import classes from './BackDrop.module.css'
import ReactDom from 'react-dom'

const backDropRoot = document.getElementById('backdrop-root')
const BackDrop = (props) => {
  return ReactDom.createPortal(
    <div className={`${classes.BackDrop} ${props.className}`}>
      {props.children}
    </div>,
    backDropRoot
  )
}

export default BackDrop
