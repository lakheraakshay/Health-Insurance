import styles from './ModalTop.module.css'

const ModalTop = ({ title, closeModal }) => {
  return (
    <div className={styles.modalTop}>
      <div>
        <p>{title}</p>
      </div>
      <i className="fas fa-times" onClick={closeModal}></i>
    </div>
  );
};

export default ModalTop;
