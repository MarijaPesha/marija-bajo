import React from "react";
import Nav from "../components/Nav";
import { MaskContainer } from "../components/SvgMaskEffect";
import aboutPiano from "../assets/img/about_02.jpg";
import "../App.css";

const About = () => {
  const containerStyle = {
    backgroundImage: `url(${aboutPiano})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="w-screen flex flex-col items-center justify-center overflow-hidden">
      <Nav />
      <div className="w-screen h-full sm:h-screen sm:calc-[100vh-130px] flex">
        <div
          className="hidden md:block w-[calc(100%/3)] md:w-[50%] 2xl:w-2/3 "
          style={containerStyle}
        ></div>
        <MaskContainer
          revealText={
            <p className="mx-auto max-w-screen-lg text-center xl:text-xl font-bold text-base">
              <span className="hidden sm:block text-5xl">...</span>
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Marija Bajo is a performing artist, dedicated to bringing creative
              concepts to life on stage. As an artist, her intention is to bring
              a fresh perspective to the classical and contemporary realms of
              music.
              <br />
              <br />
              She comes from a small place in Bosnia and Herzegovina (BiH) where
              her upbringing was closely tied to music education. Growing up
              there, she hardly cared for the harsh post-war surroundings,
              focusing solely on the imagination she had for art.
              <br />
              <br />
              Marija Bajo works in the field of culture as an organizer, event
              manager, pianist, dance accompanist and piano teacher. Her
              specialty is work in festival organization. She actively worked in
              a variety of festivals for more than ten years, and from 2022 she
              dedicated herself to her own art and production.
            </p>
          }
        >
          <blockquote>
            <q className="">
              A change in cadence. The inside was visible on our faces, if we
              knew
              <span className="text-red-500 font-bold"> where to look</span>.
              But we’ve caked the mirrors, aren’t we pretty?
            </q>
          </blockquote>
        </MaskContainer>
      </div>
    </div>
  );
};

export default About;
