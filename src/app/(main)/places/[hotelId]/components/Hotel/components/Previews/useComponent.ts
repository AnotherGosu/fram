import { useState } from "react";

export const useComponent = (previews: string[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(previews[0]);

  const onOpen = (image: string) => {
    setImage(image);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return { isOpen, image, onOpen, onClose };
};
