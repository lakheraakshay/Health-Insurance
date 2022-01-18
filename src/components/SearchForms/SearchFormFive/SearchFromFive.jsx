import React, { useState } from "react";
import styles from "./SearchFormFive.module.css";
import InputSlider from "../../InputSlider/InputSlider";
import SubAdultForm from "../../SubAdultForm/SubAdultForm";

const SearchFormFive = ({ setFinalForm }) => {
  const [values, setValues] = React.useState([50, 850]);
  const [adults, setAdults] = useState(0);

  const handleChange = (e) => {
    setAdults(Number(e.target.value));
  };

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <p>Sum Insured amount</p>
        <InputSlider values={values} setValues={setValues} />
      </div>
      <div className={styles.field}>
        <div className={styles.radioInput}>
          <div>
            <input type="radio" name="type" />
            <p>Yearly</p>
          </div>
          <div>
            <input type="radio" name="type" />
            <p>claimwise</p>
          </div>
        </div>
        <div className={styles.amount}>
          <select>
            <option value="1000">1000</option>
            <option value="20000">20000</option>
            <option value="30000">30000</option>
            <option value="40000">40000</option>
            <option value="50000">50000</option>
            <option value="60000">60000</option>
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <p>No. Of Adult*</p>
        <select onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      {adults > 0 &&
        [...Array(adults)].map((e, i) => (
          <SubAdultForm number={i + 1} key={i} />
        ))}
      <button onClick={() => setFinalForm(true)}>Continue</button>
    </div>
  );
};

export default SearchFormFive;
