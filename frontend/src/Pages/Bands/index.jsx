import { useState } from "react";
import styles from "./Bands.module.css";
import Search from "../../Components/Search";
import Button from "../../Components/Button";
import Input from "../../Components/Common/CommonInput";
import Modal from "../../Components/Common/CommonModal";
import ModalButton from "../../Components/Common/Button";

const Bands = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [band, setBand] = useState();

  const searchObject = {
    label: "Add",
    style: {
      backgroundColor: "#012622",
      color: "#ECE5F0",
    },
    action: () => setShow(true),
  };

  function createBand() {
    alert("Criando banda");
  }

  return (
    <>
      <div className={styles.bands}>
        <div className={styles.inputs}>
          <Search value={search} setValue={setSearch} />
          <Button {...searchObject} />
        </div>
      </div>
      <Modal title="Create band" show={show}>
        <Input placeholder="Name" handleValue={() => {}} type="text" />
        <Input placeholder="Gender" handleValue={() => {}} type="text" />
        <Input placeholder="Created Year" handleValue={() => {}} type="text" />
        <div className={styles.buttons}>
          <ModalButton
            label="Criar"
            color="var(--light-color)"
            background="var(--deep-dark-green)"
            width="50%"
            height="41px"
            fontSize="14px"
            actionFunction={() => createBand}
          />

          <ModalButton
            label="Voltar"
            color="var(--deep-dark-green)"
            background="var(--light-color)"
            borderColor="var(--deep-dark-green)"
            width="50%"
            height="41px"
            fontSize="14px"
            actionFunction={() => setShow(false)}
          />
        </div>
      </Modal>
    </>
  );
};

export default Bands;
