import { useEffect, useState } from "react";

export const useCarousel = ({ images, slideInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      // If at the last image, stop the interval
      setIsPlaying(false);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsPlaying(true); // Resume playing when going back to a previous image
  };

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        handleNext();
      }, slideInterval);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, isPlaying, slideInterval]);

  return {
    currentIndex,
    handleNext,
    handlePrev,
    isPlaying,
  };
};
