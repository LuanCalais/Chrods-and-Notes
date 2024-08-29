import styles from "./AvatarOptions.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  PROFILE_PICTURE_AVATARS,
  PROFILE_PICTURE_DETAILS,
} from "../../../constants";
import { useState } from "react";

const AvatarOptions = () => {
  const [selectedPicture, setSelectedPicture] = useState(
    PROFILE_PICTURE_DETAILS.NON
  );

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
    setSelectedPicture(picture);
  };

  return (
    <Carousel
      containerClass={styles.carouselContainer}
      arrows={false}
      minimumTouchDrag={80}
      responsive={responsive}
      swipeable
    >
      {PROFILE_PICTURE_AVATARS.map((picture, index) => (
        <img
          src={picture.path}
          alt={picture.name}
          key={`${picture.name}-${index}`}
          className={styles.carouselItem}
          draggable="false"
          onClick={() => onClick(picture)}
        />
      ))}
    </Carousel>
  );
};

export default AvatarOptions;
