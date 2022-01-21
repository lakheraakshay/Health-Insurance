import styles from "./MoreDetailsModal.module.css";
import Modal from "react-modal";

import ModalTop from "../ModalTop/ModalTop";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -60%)",
    padding: 0,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const MoreDetailsModal = ({ modalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.modal}>
          <ModalTop title="User Input Data" closeModal={closeModal} />
          <div className={styles.mainModal}>
            <div className={styles.cell}>
              <div className={styles.cellLeft}>
                <p>Buy Policy For</p>
              </div>
              <div className={styles.cellRight}>
                <p>Family</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.cellLeft}>
                <p>Policy Plan</p>
              </div>
              <div className={styles.cellRight}>
                <p>Me+Spouse+1Child</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.cellLeft}>
                <p>Sum Insured</p>
              </div>
              <div className={styles.cellRight}>
                <p>500000</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.cellLeft}>
                <p>Primary Insured Gender</p>
              </div>
              <div className={styles.cellRight}>
                <p>Male</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.cellLeft}>
                <p>Primary Insured Age</p>
              </div>
              <div className={styles.cellRight}>
                <p>30</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.cellLeft}>
                <p>Primary Insured Pincode</p>
              </div>
              <div className={styles.cellRight}>
                <p>30</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.cellLeft}>
                <p>Spouse Age & Gender</p>
              </div>
              <div className={styles.cellRight}>
                <p>19 Years & Female</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.cellLeft}>
                <p>Child 1 Age & Gender</p>
              </div>
              <div className={styles.cellRight}>
                <p>2 Years & Male</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MoreDetailsModal;
