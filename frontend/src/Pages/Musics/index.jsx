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
import TextArea from "../../Components/TextArea";
import { MusicModel } from "../../Model";
import { UserContext } from "../../Contexts/UserContext";
import SelectCommon from "../../Components/Select";
import { BandService, GeminiService, MusicService } from "../../Services";
import { responseRequest } from "../../utils";
import Card from "../../Components/Card";
import EmptyComponent from "../../Components/EmptyComponent";

const Musics = () => {
  const [search, setSearch] = useState("");
  const [bands, setBands] = useState([]);
  const [musics, setMusics] = useState([]);
  const [filteredMusics, setFilteredMusics] = useState([]);
  const [show, setShow] = useState(false);
  const [music, setMusic] = useState(new MusicModel());
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessingIa, setIsProcessingIa] = useState(false);
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  const { contextUser } = useContext(UserContext);

  useEffect(() => {
    getAllBands();
    getAllMusics();
  }, []);

  async function getAllBands() {
    const { data } = await BandService.getBandByUserId(contextUser.id);
    setBands(data);
  }

  async function getAllMusics() {
    const { data } = await MusicService.getMusicByUserId(contextUser.id);
    setMusics(data);
    setFilteredMusics(data);
  }

  useEffect(() => {
    if (bands.length) {
      bands.forEach((band) => {
        band.value = band.id;
        band.label = band.name;
      });

      if (!music.artist && bands[0]) {
        setMusic((prev) => ({
          ...prev,
          artist: bands[0].id,
          artistName: bands[0].name,
        }));
      }
    }
  }, [bands]);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredMusics(musics);
    } else {
      const filtered = musics.filter((music) =>
        music.name.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredMusics(filtered);
    }
  }, [search, musics]);

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
    setHsva({ h: 0, s: 0, v: 68, a: 1 });
    setShow(false);
  }

  async function deleteMusic(musicId) {
    const res = await MusicService.deleteMusic(musicId);
    const responseResult = responseRequest(res);

    if (responseResult) {
      getAllMusics();
    }
  }

  async function handleGenerateIa() {
    setIsProcessingIa(true);
    const res = await GeminiService.GenerateMusicResume(
      music.name,
      music.artistName,
    );
    if (res) {
      const { text } = res;
      setMusic((prev) => ({ ...prev, resume: text }));
      setIsProcessingIa(false);
    }
  }

  async function handleActionMusic() {
    setIsProcessing(true);

    if (!music.name?.trim() || !music.artist || !hsva) {
      toast.error("Insert all required fields", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setIsProcessing(false);
      return;
    }

    try {
      const body = {
        name: music.name.trim(),
        color: hsvaToHex(hsva),
        artist: music.artist,
        resume: music.resume || "",
        userId: contextUser.id,
      };

      let res;

      if (music.id) {
        body.updatedAt = new Date().toISOString();
        res = await MusicService.editMusic(body, music.id);
      } else {
        body.createdAt = new Date().toISOString();
        body.updatedAt = new Date().toISOString();
        res = await MusicService.createMusic(body);
      }

      const responseResult = responseRequest(res);

      if (responseResult) {
        toast.success(
          music.id
            ? "Music updated successfully"
            : "Music created successfully",
          { position: toast.POSITION.BOTTOM_RIGHT },
        );
        handleCloseModal();
        getAllMusics();
      } else {
        toast.error("Failed to save music", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error saving music:", error);
      toast.error("An error occurred while saving", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } finally {
      setIsProcessing(false);
    }
  }

  function getSelectResult(value) {
    setMusic((prev) => ({
      ...prev,
      artist: value.id,
      artistName: value.name,
    }));
  }

  const isGenerateIaDisabled = !music.name?.trim() || !music.artistName?.trim();
  const isSubmitDisabled =
    isProcessing ||
    !music.name?.trim() ||
    !String(hsva).trim() ||
    !music.artist?.trim();

  const openEditMusic = (id) => {};

  return (
    <>
      <div className={styles.musics}>
        <div className={styles.inputs}>
          <Search value={search} setValue={onSearch} />
          <Button {...searchObject} />
        </div>

        {filteredMusics.length > 0 ? (
          <div className={styles.musicsList}>
            {filteredMusics.map((musicItem, index) => (
              <Card
                key={`music_${index}`}
                {...musicItem}
                additionalContent={musicItem.resume}
                deleteFunction={() => deleteMusic(musicItem.id)}
                editFunction={() => openEditMusic(musicItem)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyContainer}>
            <EmptyComponent />
          </div>
        )}
      </div>

      <Modal title={music.id ? "Edit music" : "Create music"} show={show}>
        <Input
          placeholder="Name"
          handleValue={(value) => {
            setMusic((prev) => ({ ...prev, name: value }));
          }}
          type="text"
          currentValue={music.name}
        />

        <div className={styles.iaContainer}>
          <TextArea
            placeholder="Resume"
            width="100%"
            handleValue={(value) => {
              setMusic((prev) => ({ ...prev, resume: value }));
            }}
            currentValue={music.resume}
          />

          <ModalButton
            label="Generate with AI"
            color="var(--deep-dark-green)"
            background="var(--light-color)"
            borderColor="var(--deep-dark-green)"
            width="50%"
            height="41px"
            fontSize="14px"
            actionFunction={() => handleGenerateIa()}
            disabledButton={isProcessingIa || isGenerateIaDisabled}
          />
        </div>

        <div className={styles.colorPicker}>
          <Colorful
            color={hsva}
            disableAlpha
            onChange={(color) => {
              setHsva(color.hsva);
            }}
          />
        </div>

        <SelectCommon
          getResult={getSelectResult}
          options={bands}
          placeholder="Bands"
          currentValue={music.artist}
        />

        <div className={styles.buttons}>
          <ModalButton
            label={music.id ? "Edit" : "Create"}
            color="var(--light-color)"
            background="var(--deep-dark-green)"
            width="50%"
            height="41px"
            fontSize="14px"
            actionFunction={handleActionMusic}
            disabledButton={isSubmitDisabled}
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
