import ReactDom from 'react-dom'
import classes from './checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import MealStroe from '../../../store/mealStore'
import { useContext } from 'react'
import CheckoutItems from './checkoutItems/checkoutItems'
import Bar from './bar/bar'

const Checkout = (props) => {
  const CheckoutRoot = document.getElementById('checkout-root')
  const ctx = useContext(MealStroe)
  return ReactDom.createPortal(
    <div className={classes.CheckoutWrap}>
      <div className={classes.header}>
        <FontAwesomeIcon
          icon={faXmark}
          className={classes.icon}
          onClick={props.onHide}
        />
      </div>
      <div className={classes.contentWrap}>
        <div className={classes.contentHead}>餐品详情</div>
        <div className={classes.content}>
          {ctx.items.map((item, index) => {
            return <CheckoutItems meal={item} key={index} />
          })}
        </div>
        <div className={classes.contentFooter}>
          <p className={classes.totalPrice}>{ctx.totalPrice}</p>
        </div>
      </div>
      <Bar totalPrice={ctx.totalPrice} />
    </div>,
    CheckoutRoot
  )
}
export default Checkout
