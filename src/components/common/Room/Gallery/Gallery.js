import { Container, LeftArrowButton, RightArrowButton } from "./styled";
import { useState, useEffect } from "react";
import { CgArrowLeftO, CgArrowRightO } from "react-icons/cg";

const Gallery = ({ images, type }) => {
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => setCurrentImage(images[currentIndex]), [
    images,
    currentIndex,
  ]);

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <Container>
      <LeftArrowButton
        Icon={<CgArrowLeftO />}
        size={35}
        color="#1a1a1a"
        onClick={showPrevImage}
      />
      <img src={currentImage} alt={type} />
      <RightArrowButton
        Icon={<CgArrowRightO />}
        size={35}
        color="#1a1a1a"
        onClick={showNextImage}
      />
    </Container>
  );
};

export default Gallery;
