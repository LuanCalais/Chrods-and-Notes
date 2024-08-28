import styles from "./AvatarOptions.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PROFILE_PICTURE_AVATARS } from "../../../constants";

const AvatarOptions = () => {
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
        />
      ))}
    </Carousel>
  );
};

export default AvatarOptions;
