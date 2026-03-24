import React, { useState } from "react";
import "../App.css";
import Carousel from "../components/Carousel";
import CaruselTitel from "../components/CaruselTitel";
import Nav from "../components/Nav";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import { scenes } from "../data/scenes";
import { useCarousel } from "../hook/useCarousel";
import { useLanguage } from "../store/LanguageContextProvider";

const Home = () => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { language } = useLanguage();

  const currentScene = scenes[sceneIndex];
  const content = currentScene[language];
  const images = currentScene.images;

  const { isPlaying, currentIndex } = useCarousel({
    images,
    slideInterval: 4500,
    sceneIndex,
  });

  const handleNextScene = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSceneIndex((prev) => (prev + 1) % scenes.length);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="w-screen flex flex-col relative">
      <Nav />
      <main>
        <div className="home-wrap flex flex-col sm:grid box-border">
          <Carousel currentIndex={currentIndex} images={images} />

          <div
            className="carusel-description px-6 py-12 overflow-auto scroll-smooth sm:border-l sm:border-gray-700"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 400ms ease-in-out",
            }}
          >
            <TextGenerateEffect words={content?.desc} />
          </div>

          <div
            className="carusel-titel flex items-center gap-4 px-4 py-6 sm:px-8 sm:py-12 w-full"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 400ms ease-in-out",
            }}
          >
            <div className="flex-1 min-w-0">
              <CaruselTitel isPlaying={isPlaying} title={content?.title} />
            </div>
            <button
              onClick={handleNextScene}
              className="shrink-0 flex items-center gap-2 text-gray-600 text-xs tracking-widest hover:text-gray-300 transition duration-300 ease-in-out whitespace-nowrap group"
            >
              <span className="w-3 h-px bg-gray-600 group-hover:bg-gray-300 group-hover:w-6 transition-all duration-300" />
              {scenes[(sceneIndex + 1) % scenes.length][language].title} →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;