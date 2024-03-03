import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

import React, { useState, useEffect } from "react";

const texts = [".MARIJA_BAJO", ".MCMLXXXIX"];

function Nav() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transformedText, setTransformedText] = useState(texts[currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 8000);

    setTransformedText(texts[currentIndex]);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setTransformedText(texts[currentIndex]);
  }, [currentIndex]);

  const navSection =
    "flex px-8 py-12 border-r border-gray-700 justify-center items-center font-bold";
  const socialLinks = {
    youtube: "https://www.youtube.com/channel/UCORoaaQ7kAH3HMk3aG44fZw",
    linkedin: "https://www.linkedin.com/in/marija-bajo-94749b179/",
  };

  return (
    <nav className="w-full flex border-b border-gray-700 z-10">
      <div
        id="nav-logo-section"
        className="flex px-8 py-12 border-r border-gray-700 justify-center items-center font-bold"
      >
        <Link to="/" className="font-bold text-xl uppercase">
          {transformedText}
        </Link>
      </div>
      <div
        id="nav-social-section"
        className="hidden md:flex px-8 py-12 border-r border-gray-700 justify-center items-center font-bold"
      >
        <a href={socialLinks.youtube} target="_blank">
          <FontAwesomeIcon
            icon={faYoutube}
            size="2x"
            style={{ color: "#bcbcbb" }}
          />
        </a>
        <a href={socialLinks.linkedin} target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            style={{ color: "#bcbcbb" }}
          />
        </a>
      </div>
      <div
        id="nav-link-section"
        className="flex px-8 py-12 border-r border-gray-700 justify-center items-center font-bold"
      >
        <Link to="/about">ABOUT</Link>
      </div>
      <div
        id="nav-contact-section"
        className="flex px-8 py-12 justify-center items-center font-bold"
      >
        <Link to="/get-in-touch">GET IN TOUCH</Link>
      </div>
    </nav>
  );
}

export default Nav;
