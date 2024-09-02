/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Button from "../../Components/Button";
import Search from "../../Components/Search";
import styles from "./Musics.module.css";
import { ToastContainer, toast } from "react-toastify";
import { Colorful, hsvaToHex } from "@uiw/react-color";
import Input from "../../Components/Common/CommonInput";
import ModalButton from "../../Components/Common/Button";
import Modal from "../../Components/Common/CommonModal";
import { MusicModel } from "../../Model";
import { UserContext } from "../../Contexts/UserContext";
import SelectCommon from "../../Components/Select";
import BandService from "../../Services/BandService";

const Musics = () => {
  const [search, setSearch] = useState("");
  const [bands, setBands] = useState([]);
  const [show, setShow] = useState(false);
  const [music, setMusic] = useState(new MusicModel());
  const [isProcessing, setIsProcessing] = useState(false);
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  const { contextUser } = useContext(UserContext);

  useEffect(() => {
    getAllBands();
  }, []);

  async function getAllBands() {
    const { data } = await BandService.getBandByUserId(contextUser.id);
    setBands(data);
  }

  useEffect(() => {
    if (bands.length) {
      bands.forEach((band) => {
        band.value = band.id;
        band.label = band.name;
      });
    }
  }, [bands]);

  const searchObject = {
    label: "Add",
    style: {
      backgroundColor: "#012622",
      color: "#ECE5F0",
    },
    action: () => setShow(true),
  };

  function onSearch(value) {
    setSearch(value);
  }

  function handleCloseModal() {
    if (isProcessing) return;
    setMusic(new MusicModel());
    setShow(false);
  }

  async function handleActionMusic() {
    setIsProcessing(true);
    if (
      !music.name.trim() ||
      !music.gender.trim() ||
      !music.bandCreatedAt.trim() ||
      !String(hsva).trim()
    ) {
      toast.error("Insert all required fields", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setIsProcessing(false);
      return;
    }

    music.user = contextUser.id;
    music.color = String(hsvaToHex(hsva));

    const formData = new FormData();

    let res;

    if (music.id) {
      const body = {
        name: music.name,
        gender: music.gender,
        bandCreatedAt: music.bandCreatedAt,
        color: music.color,
        updatedAt: new Date(),
      };

      formData.append("band", JSON.stringify(body));

      // res = await BandService.editBand(formData, band.id);
    } else {
      // formData.append("band", JSON.stringify(band));
      // res = await BandService.createBand(formData);
    }
    // const responseResult = responseRequest(res);

    // if (responseResult) {
    handleCloseModal();
    // getAllBands();
    // }
    setIsProcessing(false);
  }

  function getSelectResult(value) {
    music.artist = value.id;
  }

  return (
    <>
      <div className={styles.musics}>
        <div className={styles.inputs}>
          <Search value={search} setValue={onSearch} />
          <Button {...searchObject} />
        </div>
      </div>
      <Modal title={music.id ? "Edit music" : "Create music"} show={show}>
        <Input
          placeholder="Name"
          handleValue={(value) => {
            music.name = value;
          }}
          type="text"
          currentValue={music.name}
        />

        <div className={styles.colorPicker}>
          <Colorful
            color={hsva}
            disableAlpha
            onChange={(color) => {
              setHsva(color.hsva);
            }}
          />
        </div>

        <SelectCommon getResult={getSelectResult} options={bands} />

        <div className={styles.buttons}>
          <ModalButton
            label={music.id ? "Edit" : "Create"}
            color="var(--light-color)"
            background="var(--deep-dark-green)"
            width="50%"
            height="41px"
            fontSize="14px"
            actionFunction={handleActionMusic}
            disabledButton={isProcessing}
          />

          <ModalButton
            label="Back"
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

export default Musics;
