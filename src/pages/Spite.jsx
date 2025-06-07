import React, { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../store/LanguageContextProvider";
import { translations } from "../data/translations";

const images = Object.values(
  import.meta.glob("../assets/img/travnik/*.jpg", { eager: true, as: "url" })
);

function Spite() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const { language } = useLanguage();
  const spite = translations[language].spite;

  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  const openFullscreen = (i) => setFullscreenIndex(i);
  const closeFullscreen = () => setFullscreenIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setFullscreenIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setFullscreenIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="flex flex-col h-screen bg-[#02021e]">
      {/* Back dugme u gornjem levom uglu */}
      <Link to="/" className="absolute top-4 left-4 text-white text-2xl z-50">
        <FontAwesomeIcon icon={faBackwardStep} />
      </Link>
      <div className="h-1/2 w-full bg-black flex items-center justify-center">
        <div className="w-2/3 h-full">
          <iframe
            src="https://drive.google.com/file/d/1dQFAckJe8QKlnNQTOXVa1m66xea0IROz/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="shadow-lg"
          />
        </div>
      </div>

      <div className="h-1/2 flex items-center justify-center p-4">
        <div className="relative w-1/3 cursor-pointer" onClick={openGallery}>
          <img
            src={images[0]}
            alt="Klikni za galeriju"
            className="w-full rounded-lg shadow-md object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black hover:bg-white/30 bg-opacity-30 backdrop-blur-sm text-white text-center px-4 py-2 rounded text-2xl font-semibold hover:text-red-900 transition duration-300 ease-in-out">
              {spite}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeGallery}>
        <h2 className="text-2xl font-semibold mb-4 text-center">{spite}</h2>
        <div className="max-h-[60vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Galerija ${idx + 1}`}
                onClick={() => openFullscreen(idx)}
                className="cursor-pointer w-full h-40 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      </Modal>

      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-4xl z-50 text-red-500 hover:text-red-800"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-3xl z-50 text-red-500 hover:text-red-800"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img
            src={images[fullscreenIndex]}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-3xl z-50 text-red-500 hover:text-red-800"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Spite;
