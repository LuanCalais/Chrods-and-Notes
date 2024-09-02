import styles from "./Select.module.css";
import Select from "react-select";

const SelectCommon = ({ options = [], getResult = () => {} }) => {
  return (
    <div className={styles.selectContainer}>
      <Select onChange={getResult} defaultValue={options[0]} options={options} />
    </div>
  );
};

export default SelectCommon;
