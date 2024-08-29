import { useState } from "react";
import { PROFILE_PICTURE_DETAILS } from "../../../constants";
import styles from "./Avatar.module.css";
import Modal from "../../../Components/Common/CommonModal";
import AvatarOptions from "../AvatarOptions";
import Button from "../Button";

const Avatar = ({
  currentUser = null,
  children = null,
  hasName = false,
  hasEmail = false,
}) => {
  const [isMouseOn, setIsMouseOn] = useState(false);
  const [show, setShow] = useState(false);

  function openEditProfile() {
    setShow(true);
  }

  return (
    <>
      <span className={styles.bottomContent}>
        <div className={styles.personContent}>
          <div
            onMouseEnter={() => setIsMouseOn(true)}
            onMouseLeave={() => setIsMouseOn(false)}
            className={styles.userPicture}
            title={currentUser.name}
          >
            {isMouseOn && (
              <span onClick={openEditProfile} className={styles.editIcon}>
                <i className="bx bx-edit-alt" />
              </span>
            )}
            <img
              src={PROFILE_PICTURE_DETAILS[currentUser.profilePicture].path}
              alt={PROFILE_PICTURE_DETAILS[currentUser.profilePicture].name}
            />
          </div>
          <div className={styles.personInformation}>
            {hasName && <h3>{currentUser.name}</h3>}
            {hasEmail && <h5>{currentUser.email}</h5>}
          </div>
        </div>
        {children && <span>{children}</span>}
      </span>
      <Modal
        hideModal={() => {
          setShow(false);
        }}
        title="Alterar foto de perfil"
        show={show}
        size="lg"
        centered
        hasCloseButton
      >
        <AvatarOptions />
        <div className={styles.buttons}>
          <Button
            label="Salvar"
            color="var(--light-color)"
            background="var(--deep-dark-green)"
            width="50%"
            height="41px"
            fontSize="14px"
            actionFunction={() => {}}
            disabledButton={false}
          />

          <Button
            label="Back"
            color="var(--deep-dark-green)"
            background="var(--light-color)"
            borderColor="var(--deep-dark-green)"
            width="50%"
            height="41px"
            fontSize="14px"
            actionFunction={() => setShow(false)}
            disabledButton={false}
          />
        </div>
      </Modal>
    </>
  );
};

export default Avatar;
