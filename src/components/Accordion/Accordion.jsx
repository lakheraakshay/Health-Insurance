import styles from "./Accordion.module.css";
import { useState, useRef } from "react";

const Accordion = ({ title, children }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef(null);
  const innerContent = useRef();
  const iconRef = useRef();

  const toggleAccordion = () => {
    setActive(active === false ? true : false);
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    if (iconRef.current.style.transform === "") {
      iconRef.current.style.transform = "rotate(180deg)";
    } else {
      iconRef.current.style.transform = "";
    }
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionTop}>
        <div>{title}</div>
        <i
          className="fas fa-chevron-up"
          onClick={toggleAccordion}
          ref={iconRef}
        ></i>
      </div>

      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className={styles.contentSpace}
      >
        <div ref={innerContent} id="answer" className={styles.innerContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
