import React from "react";
import styles from "./SearchFormOne.module.css";
import InputSlider from "../../InputSlider/InputSlider";

const SearchFormOne = ({ setFinalForm }) => {
  const [values, setValues] = React.useState([50, 850]);

  const ages = [...Array(110 - 18 + 1).keys()].map((x) => x + 18);

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <p>Sum Insured amount</p>
        <InputSlider values={values} setValues={setValues} />
      </div>
      <div className={styles.field}>
        <p>Gender</p>
        <div className={styles.genderInput}>
          <div className={styles.gender}>
            <input type="radio" name="gender" />
            <p>Male</p>
          </div>
          <div className={styles.gender}>
            <input type="radio" name="gender" />
            <p>Female</p>
          </div>
        </div>
      </div>
      <div className={`${styles.field} ${styles.agePicker}`}>
        <p>Age</p>
        <select>
          {ages.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => setFinalForm(true)}>Continue</button>
    </div>
  );
};

export default SearchFormOne;
