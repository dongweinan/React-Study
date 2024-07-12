import classes from './checkoutItems.module.css'
import Counter from '../../../ui/counter/counter'
const CheckoutItems = (props) => {
  return (
    <div className={classes.itemWrap}>
      <img src={props.meal.url} alt="" className={classes.img} />
      <div className={classes.descWrap}>
        <span className={classes.title}>{props.meal.title}</span>
        <div className={classes.priceWrap}>
          <Counter meal={props.meal} />
          <p className={classes.price}>
            {props.meal.price * props.meal.amount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default CheckoutItems
