import { faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { translations } from "../data/translations";
import { useLanguage } from "../store/LanguageContextProvider";
import ToggleLanguage from "./ToggleLanguage";

function Nav() {
  const { language } = useLanguage();
  const nav = translations?.[language]?.nav;

  const socialLinks = {
    youtube: "https://www.youtube.com/channel/UCORoaaQ7kAH3HMk3aG44fZw",
    linkedin: "https://www.linkedin.com/in/marija-bajo-94749b179/",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transformedText, setTransformedText] = useState(
    nav.at(0)[currentIndex]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % nav.at(0).length);
    }, 4500);

    setTransformedText(nav.at(0)[currentIndex]);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setTransformedText(nav.at(0)[currentIndex]);
  }, [currentIndex]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="w-full flex border-b border-gray-700 z-10">
      <Link
        to="/"
        id="nav-logo-section"
        className="flex px-4 py-6 sm:px-8 sm:py-12 border-r border-gray-700 justify-center items-center text-sm font-bold sm:text-xl uppercase hover:text-red-900 transition duration-300 ease-in-out"
      >
        <span className="block w-[115px] md:w-auto"> {transformedText}</span>
      </Link>
      <div
        id="nav-social-section"
        className="hidden md:flex px-4 py-6 sm:px-8 sm:py-12 border-r border-gray-700 justify-center items-center font-bold"
      >
        <a href={socialLinks.youtube} target="_blank">
          <FontAwesomeIcon
            icon={faYoutube}
            size="2x"
            style={{
              color: isHovered === "Youtube" ? "rgb(127 29 29)" : "#bcbcbb",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={() => setIsHovered("Youtube")}
            onMouseLeave={() => setIsHovered(false)}
          />
        </a>
        <a href={socialLinks.linkedin} target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            style={{
              color: isHovered === "Linkedin" ? "rgb(127 29 29)" : "#bcbcbb",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={() => setIsHovered("Linkedin")}
            onMouseLeave={() => setIsHovered(false)}
          />
        </a>
        <ToggleLanguage />
      </div>
      <Link
        to="/about"
        id="nav-link-section"
        className="hidden md:flex px-4 py-6 sm:px-8 sm:py-12 border-r border-gray-700 justify-center items-center font-bold hover:text-red-900 transition duration-300 ease-in-out uppercase  whitespace-nowrap"
      >
        {nav.at(1)}
      </Link>
      <Link
        to="/get-in-touch"
        id="nav-contact-section"
        className="hidden md:flex px-4 py-6 sm:px-8 sm:py-12 justify-center items-center font-bold hover:text-red-900 transition duration-300 ease-in-out uppercase"
      >
        {nav.at(2)}
      </Link>
      <div className="flex w-full justify-center items-center gap-6 md:hidden">
        <Link to="/about" className="block md:hidden">
          <FontAwesomeIcon
            size="lg"
            icon={faUser}
            style={{
              color: "#bcbcbb",
            }}
          />
        </Link>
        <Link to="/get-in-touch" className="block md:hidden">
          <FontAwesomeIcon
            size="lg"
            icon={faEnvelope}
            style={{
              color: "#bcbcbb",
            }}
          />
        </Link>
        <a href={socialLinks.youtube} target="_blank">
          <FontAwesomeIcon
            icon={faYoutube}
            size="lg"
            style={{
              color: "#bcbcbb",
            }}
          />
        </a>
        <a href={socialLinks.linkedin} target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            style={{
              color: "#bcbcbb",
            }}
          />
        </a>
        <ToggleLanguage />
      </div>
    </nav>
  );
}

export default Nav;
