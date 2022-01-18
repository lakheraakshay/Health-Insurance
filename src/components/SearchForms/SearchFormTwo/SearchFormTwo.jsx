import React, { useState } from "react";
import styles from "./SearchFormTwo.module.css";
import InputSlider from "../../InputSlider/InputSlider";
import SubAdultForm from "../../SubAdultForm/SubAdultForm";

const SearchFormTwo = ({ setFinalForm }) => {
  const [values, setValues] = React.useState([50, 850]);
  const [adults, setAdults] = useState(0);
  const [daughters, setDaughters] = useState(0);
  const [sons, setSons] = useState(0);

  const handleChange = (e, type) => {
    const value = e.target.value;
    if (type === "adults") {
      setAdults(Number(value));
    } else if (type === "daughters") {
      setDaughters(Number(value));
    } else {
      setSons(Number(value));
    }
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
        <select onChange={(e) => handleChange(e, "adults")}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      {adults > 0 &&
        [...Array(adults)].map((e, i) => <SubAdultForm number={i + 1} key={i} />)}
      <div className={styles.field}>
        <p>Daughter*</p>
        <select onChange={(e) => handleChange(e, "daughters")}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      {daughters > 0 &&
        [...Array(daughters)].map((e, i) => <SubAdultForm number={i + 1} key={i} />)}
      <div className={styles.field}>
        <p>Son*</p>
        <select onChange={(e) => handleChange(e, "sons")}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      {sons > 0 &&
        [...Array(sons)].map((e, i) => <SubAdultForm number={i + 1} key={i} />)}
      <button onClick={() => setFinalForm(true)}>Continue</button>
    </div>
  );
};

export default SearchFormTwo;
