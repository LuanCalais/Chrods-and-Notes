import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Bands.module.css";
import Search from "../../Components/Search";
import Button from "../../Components/Button";
import Input from "../../Components/Common/CommonInput";
import Modal from "../../Components/Common/CommonModal";
import ModalButton from "../../Components/Common/Button";
import { MusicModel } from "../../Model";
import BandService from "../../Services/BandService";
import { responseRequest } from "../../utils";

const Bands = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [band, setBand] = useState(new MusicModel());
  const [isProcessing, setIsProcessing] = useState(false);

  const searchObject = {
    label: "Add",
    style: {
      backgroundColor: "#012622",
      color: "#ECE5F0",
    },
    action: () => setShow(true),
  };

  async function createBand() {
    setIsProcessing(true);
    if (
      !band.name.trim() ||
      !band.gender.trim() ||
      !band.bandCreatedAt.trim()
    ) {
      toast.error("Insert all required fields", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

    const res = await BandService.createBand(band);

    const responseResult = responseRequest(res);

    if (responseResult) {
      handleCloseModal();
    }
    setIsProcessing(false);
  }

  function handleCloseModal() {
    if (isProcessing) return;
    setBand(new MusicModel());
    setShow(false);
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
        <Input
          placeholder="Name"
          handleValue={(value) => {
            band.name = value;
          }}
          type="text"
        />
        <Input
          placeholder="Gender"
          handleValue={(value) => {
            band.gender = value;
          }}
          type="text"
        />
        <Input
          placeholder="Created Year"
          handleValue={(value) => {
            band.bandCreatedAt = value;
          }}
          type="text"
        />
        <div className={styles.buttons}>
          <ModalButton
            label="Criar"
            color="var(--light-color)"
            background="var(--deep-dark-green)"
            width="50%"
            height="41px"
            fontSize="14px"
            actionFunction={createBand}
            disabledButton={isProcessing}
          />

          <ModalButton
            label="Voltar"
            color="var(--deep-dark-green)"
            background="var(--light-color)"
            borderColor="var(--deep-dark-green)"
            width="50%"
            height="41px"
            fontSize="14px"
            actionFunction={() => handleCloseModal()}
            disabledButton={isProcessing}
          />
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Bands;
