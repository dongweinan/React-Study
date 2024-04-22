import './confirmModal.css';
import ReactDom from 'react-dom';

const ConfirmModel = props => {
    const backDropRoot = document.getElementById('back-drop');
    return ReactDom.createPortal(
        <div className="back-drop">
            <div className="confirm-wrap">
                <div className="confirm-content">{props.confirmText}</div>
                <div className="confirm-btns">
                    <button
                        className="btn ok-btn"
                        onClick={props.okHandle}>
                        确定
                    </button>
                    <button
                        className="btn cancel-btn"
                        onClick={props.cancelHandle}>
                        取消
                    </button>
                </div>
            </div>
        </div>,
        backDropRoot
    );
};
export default ConfirmModel;
