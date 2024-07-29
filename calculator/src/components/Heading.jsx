import { AiFillCalculator } from "react-icons/ai";
import styles from "./Heading.module.css";
const Heading = () => {
  return (
    <>
      <div className={styles.heading}>
        <AiFillCalculator />
        <h1>Calculator</h1>
      </div>
    </>
  );
};
export default Heading;
