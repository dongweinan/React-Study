import classes from './counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import MealStroe from '../../../store/mealStore'
import { useContext } from 'react'

const Counter = (props) => {
  const ctx = useContext(MealStroe)
  const addClick = () => {
    ctx.addClick(props.meal)
  }
  const subClick = () => {
    ctx.subClick(props.meal)
  }
  return (
    <div className={classes.counterWrap}>
      {props.meal.amount && props.meal.amount > 0 ? (
        <>
          <button className={classes.sub} onClick={subClick}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.amount}>{props.meal.amount}</span>
        </>
      ) : null}

      <button className={classes.add} onClick={addClick}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}
export default Counter
