import styles from "./Display.module.css";
function Display({ value }) {
  return (
    <>
      <input
        className={styles.inputStyling}
        type="text"
        value={value}
        readOnly
      ></input>
    </>
  );
}
export default Display;
