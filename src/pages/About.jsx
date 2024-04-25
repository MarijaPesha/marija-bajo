import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";
import aboutPiano from "../assets/img/about_02.jpg";
import Nav from "../components/Nav";
import { MaskContainer } from "../components/SvgMaskEffect";
import { translations } from "../data/translations";
import { useLanguage } from "../store/LanguageContextProvider";

const About = () => {
  const { language } = useLanguage();

  const containerStyle = {
    backgroundImage: `url(${aboutPiano})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const aboutDescs = translations?.[language]?.about?.desc;
  const aboutHidden = translations?.[language]?.about?.hidden;

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
            <p className="mt-10 mx-auto max-w-screen-lg text-center xl:text-xl font-bold text-base flex flex-col gap-12 2xl:gap-28">
              {aboutDescs?.map((desc, idx) => (
                <span key={desc + idx} className="">
                  {desc}
                </span>
              ))}
              <FontAwesomeIcon
                size="2x"
                className=" 2xl:mt-28"
                style={{
                  color: "rgb(127 29 29)",
                }}
                icon={faMagnifyingGlass}
              />
            </p>
          }
        >
          <blockquote>
            <q className="">
              {aboutHidden?.map((hiddenText, idx) => (
                <span
                  key={hiddenText + idx}
                  className="even:text-red-500 even:font-extrabold"
                >
                  {hiddenText}
                </span>
              ))}
            </q>
          </blockquote>
        </MaskContainer>
      </div>
    </div>
  );
};

export default About;
