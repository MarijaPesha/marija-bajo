import { useEffect, useState } from "react";

export const useCarousel = ({ images, slideInterval, sceneIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setCurrentIndex(0);
    setIsPlaying(true);
  }, [sceneIndex]);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setIsPlaying(false);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
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