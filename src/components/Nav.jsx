import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../App.css";
import { translations } from "../data/translations";
import { useLanguage } from "../store/LanguageContextProvider";
import ToggleLanguage from "./ToggleLanguage";

function Nav() {
  const { language } = useLanguage();
  const nav = translations?.[language]?.nav || [];

  const socialLinks = {
    youtube: "https://www.youtube.com/channel/UCORoaaQ7kAH3HMk3aG44fZw",
    linkedin: "https://www.linkedin.com/in/marija-bajo-94749b179/",
    instagram:
      "https://www.instagram.com/rija.ba?igsh=a3VmZTl6Mnl6eHQ4&utm_source=qr",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transformedText, setTransformedText] = useState(nav[0] || "");

  useEffect(() => {
    if (!nav.length) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % nav[0].length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, [nav]);

  useEffect(() => {
    if (nav.length) {
      setTransformedText(nav[0][currentIndex]);
    }
  }, [currentIndex, nav]);

  const [isHovered, setIsHovered] = useState("");

  const renderSocialIcon = (platform, icon, size) => (
    <a
      href={socialLinks[platform]}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(platform)}
      onMouseLeave={() => setIsHovered("")}
    >
      <FontAwesomeIcon
        icon={icon}
        size={size}
        style={{
          color: isHovered === platform ? "rgb(127 29 29)" : "#bcbcbb",
          transition: "color 0.3s ease",
        }}
      />
    </a>
  );

  return (
    <nav className="w-full flex border-b border-gray-700 z-10">
      <Link
        to="/"
        id="nav-logo-section"
        className="flex px-2 py-6 sm:px-8 sm:py-12 border-r border-gray-700 justify-center items-center text-sm font-bold sm:text-xl uppercase hover:text-red-900 transition duration-300 ease-in-out"
      >
        <span className="block w-[115px] md:w-auto">{transformedText}</span>
      </Link>
      <div
        id="nav-social-section"
        className="hidden md:flex px-4 py-6 sm:px-8 sm:py-12 border-r border-gray-700 justify-center items-center font-bold"
      >
        {renderSocialIcon("youtube", faYoutube, "2x")}
        {renderSocialIcon("linkedin", faLinkedin, "2x")}
        {renderSocialIcon("instagram", faInstagram, "2x")}
        <ToggleLanguage />
      </div>
      <Link
        to="/about"
        id="nav-link-section"
        className="hidden md:flex px-4 py-6 sm:px-8 sm:py-12 border-r border-gray-700 justify-center items-center font-bold hover:text-red-900 transition duration-300 ease-in-out uppercase whitespace-nowrap"
      >
        {nav[1]}
      </Link>
      <Link
        to="/get-in-touch"
        id="nav-contact-section"
        className="hidden md:flex px-4 py-6 sm:px-8 sm:py-12 justify-center items-center font-bold hover:text-red-900 transition duration-300 ease-in-out uppercase"
      >
        {nav[2]}
      </Link>
      <div className="flex w-full justify-center items-center gap-6 md:hidden">
        <Link to="/about" className="block md:hidden">
          <FontAwesomeIcon
            size="lg"
            icon={faUser}
            style={{ color: "#bcbcbb" }}
          />
        </Link>
        <Link to="/get-in-touch" className="block md:hidden">
          <FontAwesomeIcon
            size="lg"
            icon={faEnvelope}
            style={{ color: "#bcbcbb" }}
          />
        </Link>
        {renderSocialIcon("youtube", faYoutube, "lg")}
        {renderSocialIcon("linkedin", faLinkedin, "lg")}
        {renderSocialIcon("instagram", faInstagram, "lg")}
        <ToggleLanguage />
      </div>
    </nav>
  );
}

export default Nav;
