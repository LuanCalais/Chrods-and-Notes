import { PROFILE_PICTURE } from "../../../constants";
import styles from "./Avatar.module.css";

const Avatar = ({ currentUser = null, children = null, hasName = false, hasEmail = false }) => {
  return (
    <span className={styles.bottomContent}>
      <div className={styles.personContent}>
        <div className={styles.userPicture} title={currentUser.name}>
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
