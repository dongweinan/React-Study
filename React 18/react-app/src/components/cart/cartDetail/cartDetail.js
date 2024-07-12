import BackDrop from '../../ui/BackDrop/BackDrop'
import classes from './cartDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import MealStroe from '../../../store/mealStore'
import { useContext, useState } from 'react'
import Meal from '../../meals/meal/meal'
import Confirm from '../../ui/Confirm/Confirm'

const CartDetail = (props) => {
  const ctx = useContext(MealStroe)
  const [showConfirm, setShowConfirm] = useState(false)
  const showConfirmHandle = () => {
    setShowConfirm(true)
  }
  const onCancel = (e) => {
    e.stopPropagation()
    setShowConfirm(false)
  }
  const onOk = () => {
    ctx.clearCard()
    setShowConfirm(false)
  }
  return (
    <BackDrop>
      {showConfirm && (
        <Confirm
          confirmText="确定清空购物车吗？"
          onCancel={onCancel}
          onOk={onOk}
        />
      )}
      <div
        className={classes.cartDetailWrap}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.header}>
          <span className={classes.title}>餐品详情</span>
          <div className={classes.btnWrap} onClick={showConfirmHandle}>
            <FontAwesomeIcon icon={faTrash} className={classes.icon} />
            <span className={classes.btnText}>清空购物车</span>
          </div>
        </div>
        {ctx.items.map((item) => (
          <Meal meal={item} key={item.id} />
        ))}
      </div>
    </BackDrop>
  )
}
export default CartDetail
