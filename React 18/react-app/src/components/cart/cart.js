import classes from './cart.module.css'
import BagUrl from '../../assets/imgs/bag.png'
import MealStroe from '../../store/mealStore'
import { useContext, useState } from 'react'
import CartDetail from './cartDetail/cartDetail'
import Checkout from './checkout/checkout'

const Cart = () => {
  const ctx = useContext(MealStroe)
  const [showDetail, setShowDetail] = useState(false)
  const [showFinal, setShowFinal] = useState(false)
  const showDetailHandle = () => {
    if (!ctx.items.length > 0) {
      return
    }
    setShowDetail((prevState) => !prevState)
  }
  const showFinalHandle = (e) => {
    if (!ctx.items.length > 0) {
      return
    }
    e.stopPropagation()
    setShowFinal(true)
  }
  const hideFincalHandle = (e) => {
    e.stopPropagation()
    setShowFinal(false)
  }
  return (
    <div className={classes.CartWrap} onClick={showDetailHandle}>
      {showDetail && ctx.totalAmount > 0 && <CartDetail />}
      {showFinal && <Checkout onHide={hideFincalHandle} />}
      <div className={classes.BagWrap}>
        <img src={BagUrl} alt="" className={classes.BagImg} />
        {ctx.totalAmount > 0 ? (
          <span className={classes.BagAmount}>{ctx.totalAmount}</span>
        ) : (
          ''
        )}
      </div>
      {ctx.totalPrice > 0 ? (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      ) : (
        <p className={classes.Tip}>未选购任何商品</p>
      )}
      <button
        className={`${classes.Btn} ${
          ctx.totalPrice > 0 ? '' : classes.Disabled
        }`}
        onClick={showFinalHandle}
      >
        去结算
      </button>
    </div>
  )
}

export default Cart
