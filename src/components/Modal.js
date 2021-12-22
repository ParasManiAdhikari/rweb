import App from "../App";

function Modal(param) {
  function Cancel() {
    param.onCancel();
  }
  function Confirm() {
    param.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={Cancel}>
        Cancel
      </button>
      <button className="btn" onClick={Confirm}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
