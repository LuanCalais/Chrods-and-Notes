import { useState } from "react";
import { PROFILE_PICTURE_DETAILS } from "../../../constants";
import styles from "./Avatar.module.css";
import Modal from "../../../Components/Common/CommonModal";
import AvatarOptions from "../AvatarOptions";

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
      <Modal title="Alterar foto de perfil" show={show} hasCloseButton>
        <AvatarOptions />
      </Modal>
    </>
  );
};

export default Avatar;
