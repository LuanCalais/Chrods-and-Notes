import styles from "./AvatarOptions.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PROFILE_PICTURE_AVATARS } from "../../../constants";

const AvatarOptions = ({
  selectedPicture = {},
  setSelectedPicture = () => {},
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const onClick = (picture) => {
    if (picture.code === selectedPicture.code) return;
    setSelectedPicture(picture);
  };

  return (
    <Carousel
      containerClass={styles.carouselContainer}
      arrows={false}
      minimumTouchDrag={80}
      responsive={responsive}
      swipeable
      centerMode={true}
    >
      {PROFILE_PICTURE_AVATARS.map((picture, index) => (
        <span
          key={`${picture.name}-${index}`}
          className={
            picture.code === selectedPicture.code ? styles.selected : ""
          }
          onClick={() => onClick(picture)}
        >
          <img
            src={picture.path}
            alt={picture.name}
            className={styles.carouselItem}
            draggable="false"
          />
        </span>
      ))}
    </Carousel>
  );
};

export default AvatarOptions;
