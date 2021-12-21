import { useState } from "react";
import App from "../App";

function Modal() {
  const [modalOpen, setModalBoolean] = useState(false);

  function removeModal() {
    setModalBoolean(false);
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={removeModal}>
        Cancel
      </button>
      <button className="btn" onClick={removeModal}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
