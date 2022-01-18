import styles from "./SubAdultForm.module.css";

const SubAdultForm = ({ number }) => {
  const ages = [...Array(110 - 18 + 1).keys()].map((x) => x + 18);

  return (
    <div className={styles.form}>
      <p>Adult {number}</p>
      <div className={styles.fields}>
        <div className={styles.formOne}>
          <p>Gender</p>
          <div className={styles.genders}>
            <div>
              <input type="radio" name="gender" />
              <p>Male</p>
            </div>
            <div>
              <input type="radio" name="gender" />
              <p>Female</p>
            </div>
          </div>
        </div>
        <div className={styles.formTwo}>
          <p>Age</p>
          <select>
            {ages.map((e, i) => (
              <option value={e} key={i}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SubAdultForm;
