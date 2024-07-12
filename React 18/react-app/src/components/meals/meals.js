import Meal from './meal/meal.js'
import classes from './meals.module.css'

const Meals = (props) => {
  return (
    <div className={classes.mealsWrap}>
      {props.meals.map((item) => (
        <Meal key={item.id} meal={item} />
      ))}
    </div>
  )
}
export default Meals
