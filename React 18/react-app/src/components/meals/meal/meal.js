import classes from './meal.module.css'
import Counter from '../../ui/counter/counter'

const Meal = (props) => {
  return (
    <div className={classes.mealWrap}>
      <div className={classes.imgBox}>
        <img className={classes.img} src={props.meal.url} alt="" />
      </div>
      <div className={classes.mealInfo}>
        <h2 className={classes.mealTitle}>{props.meal.title}</h2>
        <p className={classes.mealDesc}>{props.meal.desc}</p>
        <div className={classes.mealPriceWrap}>
          <span className={classes.mealPrice}>{props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  )
}
export default Meal
