import styles from "./Select.module.css";
import Select from "react-select";

const SelectCommon = ({
  options = [],
  getResult = () => {},
  placeholder = "placeholder",
}) => {
  return (
    <div className={styles.selectContainer}>
      <Select
        onChange={getResult}
        defaultValue={options[0]}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectCommon;
