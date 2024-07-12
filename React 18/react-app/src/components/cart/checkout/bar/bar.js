import classes from './bar.module.css'

const Bar = (props) => {
  return (
    <div className={classes.CartWrap}>
      <p className={classes.Price}>{props.totalPrice}</p>
      <button className={classes.Btn}>去支付</button>
    </div>
  )
}
export default Bar
