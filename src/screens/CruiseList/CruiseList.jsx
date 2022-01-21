import React from "react";
import { useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import MoreDetailsModal from "../../components/MoreDetailsModal/MoreDetailsModal";
import styles from "./CruiseList.module.css";
import InputSlider from "../../components/InputSlider/InputSlider";

const CruiseList = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [values, setValues] = React.useState([50, 850]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles.cruiseList}>
      <div className={styles.cruiseLeft}>
        <div className={styles.policyInfo}>
          <p className={styles.policyDetail}>
            Policy For :&nbsp;
            <span className={styles.policyDetailAns}>Family</span>
          </p>
          <p className={styles.policyDetail}>
            Policy Type :&nbsp;
            <span className={styles.policyDetailAns}>Me+Spouse</span>
          </p>
          <p className={styles.policyDetail}>
            Pincode :&nbsp;
            <span className={styles.policyDetailAns}>382425</span>
          </p>
          <p className={styles.moreDetails} onClick={openModal}>
            More Details
          </p>
          <MoreDetailsModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </div>
        <Accordion
          title={
            <p>
              Filter <span className={styles.accordionEmphasis}>Premium</span>
            </p>
          }
        >
          <InputSlider values={values} setValues={setValues} />
        </Accordion>
        <Accordion
          title={
            <p>
              Room Rent <span className={styles.accordionEmphasis}>Limit</span>
            </p>
          }
        >
          <div className={styles.accordionCheck}>
            <input type="checkbox" />
            <p>No Sub Limit</p>
          </div>
        </Accordion>
        <Accordion
          title={
            <p>
              Plan <span className={styles.accordionEmphasis}>Benfit</span>
            </p>
          }
        >
          <div className={styles.accordionCheck}>
            <input type="checkbox" />
            <p>OPD</p>
          </div>
          <div className={styles.accordionCheck}>
            <input type="checkbox" />
            <p>Reinstatement Benefit</p>
          </div>
          <div className={styles.accordionCheck}>
            <input type="checkbox" />
            <p>Maternity Expense</p>
          </div>
        </Accordion>
        <Accordion
          title={
            <p>
              Co-<span className={styles.accordionEmphasis}>Pay</span>
            </p>
          }
        >
          <div className={styles.accordionCheck}>
            <input type="checkbox" />
            <p>No Age Based Co-Pay</p>
          </div>
        </Accordion>
        <Accordion
          title={
            <p>
              Plan <span className={styles.accordionEmphasis}>Benfit</span>
            </p>
          }
        >
          <div className={styles.accordionCheck}>
            <input type="checkbox" />
            <p>Covered after 2 years</p>
          </div>
          <div className={styles.accordionCheck}>
            <input type="checkbox" />
            <p>Covered after 3 years</p>
          </div>
          <div className={styles.accordionCheck}>
            <input type="checkbox" />
            <p>Covered after 4 years</p>
          </div>
        </Accordion>
      </div>
      <div className={styles.cruiseRight}>
        <div className={styles.cruiseRightTop}>
          <div className={styles.cruiseTopUpper}>
            <img src="/images/banner.png" alt="" />
            <img src="/images/banner.png" alt="" />
            <img src="/images/post-icon.png" alt="" />
            <img src="/images/banner.png" alt="" />
            <img src="/images/banner.png" alt="" />
            <img src="/images/banner.png" alt="" />
          </div>
          <div className={styles.cruiseTopLower}>
            <p>Rs 50</p>
            <p>Rs 50</p>
            <p>Rs 50</p>
            <p>Rs 50</p>
            <p>Rs 5004</p>
            <p>Rs 5002</p>
          </div>
          <div className={styles.cruiseTopLower}></div>
        </div>
      </div>
    </div>
  );
};

export default CruiseList;
