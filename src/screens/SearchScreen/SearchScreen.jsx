import { useState } from "react";
import styles from "./SearchScreen.module.css";
import SearchFormOne from "../../components/SearchForms/SearchFormOne/SearchFormOne";
import SearchFormTwo from "../../components/SearchForms/SearchFormTwo/SearchFormTwo";
import SearchFormThree from "../../components/SearchForms/SearchFormThree/SearchFormThree";
import SearchFormFour from "../../components/SearchForms/SearchFormFour/SearchFormFour";
import SearchFormFive from "../../components/SearchForms/SearchFormFive/SearchFromFive";

const SearchScreen = () => {
  const [form, setForm] = useState(1);
  const [finalForm, setFinalForm] = useState(false);

  return (
    <div className={styles.searchScreen}>
      <div className={styles.searchLeft}>
        {finalForm ? (
          <div className={styles.finalForm}>
            <p>CONTACT DETAILS</p>
            <div>
              <div className={styles.field}>
                <p>First Name*</p>
                <input type="text" placeholder="First Name" />
              </div>
              <div className={styles.field}>
                <p>Last Name*</p>
                <input type="text" placeholder="Last Name" />
              </div>
              <div className={styles.field}>
                <p>Phone Number*</p>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className={styles.field}>
                <p>Email*</p>
                <input type="text" placeholder="Email" />
              </div>
              <div className={styles.field}>
                <p>Pincode*</p>
                <input type="text" placeholder="Pincode" />
              </div>
              <div className={styles.field}>
                <div>
                  <button onClick={() => setFinalForm(false)}>Back</button>
                </div>
                <div>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.buttons}>
              <button onClick={() => setForm(1)}>Individual Plan</button>
              <button onClick={() => setForm(2)}>Family Plan</button>
              <button onClick={() => setForm(3)}>Seniour Citizen</button>
              <button onClick={() => setForm(4)}>Critical Illness</button>
              <button onClick={() => setForm(5)}>Top Up</button>
            </div>
            {form === 1 ? (
              <SearchFormOne setFinalForm={setFinalForm} />
            ) : form === 2 ? (
              <SearchFormTwo setFinalForm={setFinalForm} />
            ) : form === 3 ? (
              <SearchFormThree setFinalForm={setFinalForm} />
            ) : form === 4 ? (
              <SearchFormFour setFinalForm={setFinalForm} />
            ) : (
              form === 5 && <SearchFormFive setFinalForm={setFinalForm} />
            )}
          </>
        )}
      </div>
      <div className={styles.searchRight}>
        <img src="/images/banner.png" alt="" />
        <p>CARE (FAMILY)</p>
      </div>
    </div>
  );
};

export default SearchScreen;
