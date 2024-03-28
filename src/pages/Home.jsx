import React from "react";
import "../App.css";
import wall from "../assets/img/home01.jpg";
import piano from "../assets/img/home02.jpg";
import bullets from "../assets/img/home03.jpg";
import Carousel from "../components/Carousel";
import CaruselTitel from "../components/CaruselTitel";
import Nav from "../components/Nav";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import { translations } from "../data/translations";
import { useCarousel } from "../hook/useCarousel";
import { useLanguage } from "../store/LanguageContextProvider";

const Home = () => {
  const images = [wall, piano, bullets];
  const { isPlaying, currentIndex } = useCarousel({
    images,
    slideInterval: 4500,
  });
  const { language } = useLanguage();

  const home = translations[language].home;

  return (
    <div className="w-screen flex flex-col relative">
      <Nav />
      <main>
        <div className="home-wrap flex flex-col sm:grid box-border">
          <Carousel currentIndex={currentIndex} images={images} />
          <div className="carusel-description px-6 py-12 overflow-auto scroll-smooth sm:border-l sm:border-gray-700">
            <TextGenerateEffect words={home?.desc} />
          </div>
          <CaruselTitel isPlaying={isPlaying} title={home?.title} />
        </div>
      </main>
    </div>
  );
};

export default Home;
