import styles from "./Buttons.module.css";

function Buttons({ list, handleBtnClick }) {
  return (
    <>
      <div className={styles.calcBtn}>
        {list.map((item, index) => (
          <div
            className={styles.btn}
            key={index}
            onClick={() => {
              if (index == 18) {
                handleBtnClick("clear");
              } else if (index == 3) {
                handleBtnClick("nochange");
              } else {
                handleBtnClick(item);
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
export default Buttons;
