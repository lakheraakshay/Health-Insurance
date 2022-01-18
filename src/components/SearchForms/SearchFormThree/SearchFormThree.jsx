import React, { useState } from "react";
import styles from "./SearchFormThree.module.css";
import InputSlider from "../../InputSlider/InputSlider";
import SubAdultForm from "../../SubAdultForm/SubAdultForm";

const SearchFormThree = ({ setFinalForm }) => {
  const [values, setValues] = React.useState([50, 850]);
  const [adults, setAdults] = useState(0);

  const handleChange = (e) => {
    setAdults(Number(e.target.value));
  };

  console.log(adults === 1);

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <p>Sum Insured amount</p>
        <InputSlider values={values} setValues={setValues} />
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

export default SearchFormThree;
