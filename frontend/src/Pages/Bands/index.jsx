import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Bands.module.css";
import Search from "../../Components/Search";
import Button from "../../Components/Button";
import Input from "../../Components/Common/CommonInput";
import Modal from "../../Components/Common/CommonModal";
import ModalButton from "../../Components/Common/Button";
import Dropzone from "../../Components/Dropzone";
import { BandModel } from "../../Model";
import BandService from "../../Services/BandService";
import { responseRequest } from "../../utils";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Colorful, hsvaToHex } from "@uiw/react-color";
import Card from "../../Components/Card";

const Bands = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [band, setBand] = useState(new BandModel());
  const [banner, setBanner] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bands, setBands] = useState(["Item 1", "Item 2", "Item 3"]);
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });

  const { contextUser } = useContext(UserContext);

  useEffect(() => {
    getAllBands();
  }, []);

  const searchObject = {
    label: "Add",
    style: {
      backgroundColor: "#012622",
      color: "#ECE5F0",
    },
    action: () => setShow(true),
  };

  async function getAllBands() {
    const res = await BandService.getBandByUserId(contextUser.id);
    setBands(res);
  }

  function onUpload(file) {
    setBanner(file);
  }

  async function createBand() {
    setIsProcessing(true);
    if (
      !band.name.trim() ||
      !band.gender.trim() ||
      !band.bandCreatedAt.trim() ||
      !banner?.path.trim() ||
      !String(hsva).trim()
    ) {
      toast.error("Insert all required fields", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setIsProcessing(false);
      return;
    }

    band.user = contextUser.id;
    band.color = String(hsvaToHex(hsva));

    const formData = new FormData();

    formData.append("file", banner);
    formData.append("band", JSON.stringify(band));

    const res = await BandService.createBand(formData);

    const responseResult = responseRequest(res);

    if (responseResult) {
      handleCloseModal();
      getAllBands();
    }
    setIsProcessing(false);
  }

  function handleCloseModal() {
    if (isProcessing) return;
    setBand(new BandModel());
    setShow(false);
  }

  async function deleteBand(id) {
    const res = await BandService.deleteBand(id);

    const responseResult = responseRequest(res);

    if (responseResult) {
      getAllBands();
    }
  }

  return (
    <>
      <div className={styles.bands}>
        <div className={styles.inputs}>
          <Search value={search} setValue={setSearch} />
          <Button {...searchObject} />
        </div>

        {bands?.data?.length > 0 && (
          <div className={styles.bandsContainer}>
            {bands.data.map((item, index) => (
              <Card
                key={`band_${index}`}
                {...item}
                deleteFunction={() => deleteBand(item.id)}
              />
            ))}
          </div>
        )}
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
        <Dropzone
          message="Acceped files: .png, jpg, jpeg"
          maxFilesSize={3 * 1024 * 1024}
          acceptedTypeFiles="image/png, image/jpeg, image/jpg"
          onUpload={onUpload}
          setBanner={setBanner}
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
