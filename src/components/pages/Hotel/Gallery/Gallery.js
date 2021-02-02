import { CurrentImage, Previews, Preview } from "./styled";
import { useState, useEffect } from "react";

const Gallery = ({ images = [], name = "" }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const onPreviewClick = (event) => {
    setCurrentImage(event.target.src);
  };

  useEffect(() => setCurrentImage(images[0]), [images]);

  return (
    <section>
      <h2 className="hidden">Hotel gallery</h2>
      <CurrentImage>
        <img src={currentImage} alt={name} />
      </CurrentImage>
      <Previews>
        {images.map((image, idx) => (
          <Preview key={idx} onClick={onPreviewClick}>
            <img src={image} alt={name} />
          </Preview>
        ))}
      </Previews>
    </section>
  );
};

export default Gallery;
