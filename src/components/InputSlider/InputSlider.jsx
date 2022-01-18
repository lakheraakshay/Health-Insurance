import styles from "./InputSlider.module.css";
import { useRanger } from "react-ranger";

const InputSlider = ({ values, setValues }) => {
  const { getTrackProps, handles } = useRanger({
    min: 50,
    max: 850,
    stepSize: 1,
    values,
    onChange: setValues,
  });

  return (
    <div className={styles.slider}>
      <div
        {...getTrackProps({
          style: {
            height: "4px",
            background: "#00baf3",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
            borderRadius: "2px",
            width: "100%",
          },
        })}
      >
        {handles.map(({ getHandleProps }) => (
          <button
            {...getHandleProps({
              style: {
                width: "10px",
                height: "10px",
                outline: "none",
                borderRadius: "100%",
                background: "#00baf3",
                border: "2px solid #ebebeb",
                marginTop: '0'
              },
            })}
          />
        ))}
      </div>
      <div className={styles.display}>
        <p>{values[0]}₹-{values[1]}₹</p>
      </div>
    </div>
  );
};

export default InputSlider;
