import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <div className={`${styles.whatsapp} ${styles.icon}`}>
        <i className="fab fa-whatsapp"></i>
        <p>WHATSAPP</p>
      </div>
      <div className={`${styles.facebook} ${styles.icon}`}>
        <i className="fab fa-facebook"></i>
        <p>FACEBOOK</p>
      </div>
      <div className={`${styles.twitter} ${styles.icon}`}>
        <i className="fab fa-twitter"></i>
        <p>TWITTER</p>
      </div>
      <div className={`${styles.linkedIn} ${styles.icon}`}>
        <i className="fab fa-linkedin"></i>
        <p>LINKEDIN</p>
      </div>
      <div className={`${styles.instagram} ${styles.icon}`}>
        <i className="fab fa-instagram"></i>
        <p>INSTAGRAM</p>
      </div>
      <div className={`${styles.plus} ${styles.icon}`}>
        <i className="fab fa-google-plus"></i>
        <p>GOOGLE+</p>
      </div>
    </div>
  );
};

export default SocialIcons;
