import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Module(param) {
  const [openModal, setModalBoolean] = useState(false);
  function addSch() {
    setModalBoolean(true);
  }
  function closeModal() {
    setModalBoolean(false);
  }
  return (
    <div className="card">
      <h2>{param.text}</h2>
      <div className="actions">
        <button className="btn" onClick={addSch}>
          Add to Schedule
        </button>
        {openModal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
        {openModal && <Backdrop onCancel={closeModal} />}
      </div>
    </div>
  );
}
export default Module;
