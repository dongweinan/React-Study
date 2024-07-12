import BackDrop from '../BackDrop/BackDrop'
import classes from './Confirm.module.css'
const Confirm = (props) => {
  return (
    <BackDrop className={'confirmOut'}>
      <div className={classes.confirmWrap}>
        <p className={classes.title}>{props.confirmText}</p>
        <div className={classes.btnWrap}>
          <button className={classes.cancelBtn} onClick={props.onCancel}>
            取消
          </button>
          <button className={classes.okBtn} onClick={props.onOk}>
            确认
          </button>
        </div>
      </div>
    </BackDrop>
  )
}
export default Confirm
