import { useRef } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navbarRef = useRef();

  const toggleNav = () => {
    if (navbarRef.current.style.height === "70px") {
      navbarRef.current.style.height = "265px";
    } else {
      navbarRef.current.style.height = "70px";
    }
  };

  return (
    <div className={styles.navbar} ref={navbarRef}>
      <img src="/images/day-logo.png" alt="Logo" className={styles.logo} />
      <div className={styles.navLinks}>
        <p>HOME</p>
        <p>Form-1</p>
        <p className={styles.active}>Form-2</p>
        <p>Form-3</p>
        <p>Form-4</p>
        <p>Form-5</p>
      </div>
      <i className={`${styles.menuIcon} fas fa-bars`} onClick={toggleNav}></i>
    </div>
  );
};

export default Navbar;
