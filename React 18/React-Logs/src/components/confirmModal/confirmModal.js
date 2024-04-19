import './confirmModal.css'
const ConfirmModel = (props) => {
  return (
    <div className="back-drop">
      <div className="confirm-wrap">
        <div className="confirm-content">{props.confirmText}</div>
        <div className="confirm-btns">
          <button className="btn ok-btn" onClick={props.okHandle}>
            确定
          </button>
          <button className="btn cancel-btn" onClick={props.cancelHandle}>
            取消
          </button>
        </div>
      </div>
    </div>
  )
}
export default ConfirmModel
