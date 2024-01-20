import { useState } from "react";
import styles from "./Bands.module.css";
import Search from "../../Components/Search";

const Bands = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.bands}>
      <Search value={search} setValue={setSearch} />
    </div>
  );
};

export default Bands;
