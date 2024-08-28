import { useState } from "react";
import { PROFILE_PICTURE } from "../../../constants";
import styles from "./Avatar.module.css";

const Avatar = ({
  currentUser = null,
  children = null,
  hasName = false,
  hasEmail = false,
}) => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  return (
    <span className={styles.bottomContent}>
      <div className={styles.personContent}>
        <div
          onMouseEnter={() => setIsMouseOn(true)}
          onMouseLeave={() => setIsMouseOn(false)}
          className={styles.userPicture}
          title={currentUser.name}
        >
          {isMouseOn && (
            <span className={styles.editIcon}>
              <i className="bx bx-edit-alt" />
            </span>
          )}
          <img
            src={PROFILE_PICTURE[currentUser.profilePicture].path}
            alt={PROFILE_PICTURE[currentUser.profilePicture].name}
          />
        </div>
        <div className={styles.personInformation}>
          {hasName && <h3>{currentUser.name}</h3>}
          {hasEmail && <h5>{currentUser.email}</h5>}
        </div>
      </div>
      {children && <span>{children}</span>}
    </span>
  );
};

export default Avatar;
