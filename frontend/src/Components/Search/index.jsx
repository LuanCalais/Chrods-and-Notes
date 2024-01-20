import styles from "./Search.module.css";

const Search = ({ setValue }) => {
  return (
    <input
      className={styles.inputSearch}
      type="text"
      onChange={(e) => setValue(e.target.value)}
      placeholder="Text something"
    />
  );
};

export default Search;
