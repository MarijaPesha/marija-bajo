import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

import React, { useState, useEffect } from "react";

const texts = [".MARIJA_BAJO", ".MCMLXXXIX"];

function Nav() {
  const socialLinks = {
    youtube: "https://www.youtube.com/channel/UCORoaaQ7kAH3HMk3aG44fZw",
    linkedin: "https://www.linkedin.com/in/marija-bajo-94749b179/",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transformedText, setTransformedText] = useState(texts[currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4500);

    setTransformedText(texts[currentIndex]);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setTransformedText(texts[currentIndex]);
  }, [currentIndex]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="w-full flex border-b border-gray-700 z-10">
      <Link
        to="/"
        id="nav-logo-section"
        className="flex px-4 py-6 sm:px-8 sm:py-12 border-r border-gray-700 justify-center items-center text-sm sm:font-bold sm:text-xl uppercase hover:text-red-900 transition duration-300 ease-in-out"
      >
        {transformedText}
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
      </div>
      <Link
        to="/about"
        id="nav-link-section"
        className="flex px-4 py-6 sm:px-8 sm:py-12 border-r border-gray-700 justify-center items-center font-bold hover:text-red-900 transition duration-300 ease-in-out"
      >
        ABOUT
      </Link>
      <Link
        to="/get-in-touch"
        id="nav-contact-section"
        className="flex px-4 py-6 sm:px-8 sm:py-12 justify-center items-center font-bold hover:text-red-900 transition duration-300 ease-in-out"
      >
        GET IN TOUCH
      </Link>
    </nav>
  );
}

export default Nav;
