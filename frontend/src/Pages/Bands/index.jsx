import { useState } from "react";
import styles from "./Bands.module.css";
import Search from "../../Components/Search";
import Button from "../../Components/Button";

const Bands = () => {
  const [search, setSearch] = useState("");

  const searchObject = {
    label: "Add",
    style: {
      backgroundColor: "#012622",
      color: "#ECE5F0",
    },
    action: addBand,
  };

  function addBand() {
    alert("TODO: handle add band");
  }

  return (
    <div className={styles.bands}>
      <div className={styles.inputs}>
        <Search value={search} setValue={setSearch} />
        <Button {...searchObject} />
      </div>
    </div>
  );
};

export default Bands;
