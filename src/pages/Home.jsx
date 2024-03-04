import React from "react";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import CaruselTitel from "../components/CaruselTitel";
import wall from "../assets/img/image01.jpg";
import piano from "../assets/img/image02.jpg";
import bullets from "../assets/img/image03.jpg";
import { useCarousel } from "../hook/useCarousel";
import "../App.css";

const Home = () => {
  const images = [wall, piano, bullets];
  const text = `Spite the Shadows is a project that speaks, tells a story about the (non)culture of remembrance regarding the war that happened in the
            90’s in Bosnia and Herzegovina through a multimedia performance. This multimedia performance aims to unify a diversity of different
            artistic expressions with music standing out as the most dominant form. Along with the performance of piano pieces, there’s elements of recitation built from factual historic documentation of war
            crimes, a projection of a beautiful yet terrifying set of photographs, and audio samples of established artists. The idea for
            the project was conceived in Bonn during Beethoven’s 250th birthday anniversary. “I was inspired by Beethoven’s struggle. Having
            suffered deafness and yet written the Ode of Joy I had found his journey to be a deeply human story that was, perhaps at that moment
            especially, strangely mirrored in the thoughts and feelings I had for both the modern history of my country, but also the human
            condition at large. His suffering opened my eyes to the importance of pointing out historical facts through music in a new way. After
            that, I followed the “signs on the road” such as meeting Josip Magdic in Zagreb who gave me the music sheet for War Picture
            Postcards from Sarajevo and explained how the piece came to be. Slowly but surely my performance had been molded by these
            interactions taking the shape in which it lives now.`;

  const { isPlaying, currentIndex } = useCarousel({
    images,
    slideInterval: 3000,
  });

  return (
    <div className="w-screen flex flex-col relative">
      <Nav />
      <main>
        <div className="home-wrap flex flex-col sm:grid box-border">
          <Carousel currentIndex={currentIndex} images={images} />
          <div className="carusel-description px-6 py-12 overflow-auto scroll-smooth border-l border-gray-700">
            <TextGenerateEffect words={text} />
          </div>
          <CaruselTitel isPlaying={isPlaying} />
        </div>
      </main>
    </div>
  );
};

export default Home;
