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

const sarajevoImages = Object.entries(
  import.meta.glob("../assets/img/actualis/sarajevo/*.jpg", { eager: true, as: "url" })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

const zagrebImages = Object.entries(
  import.meta.glob("../assets/img/actualis/zagreb/*.jpg", { eager: true, as: "url" })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

function Memoriam() {
  const [isOpenSarajevo, setIsOpenSarajevo] = useState(false);
  const [isOpenZagreb, setIsOpenZagreb] = useState(false);
  const [fullscreenImages, setFullscreenImages] = useState(null);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  const { language } = useLanguage();
  const galleryLabel = translations[language].galleryLabel;
  const memoriamLabels = translations[language].memoriam;

  const openFullscreen = (images, i) => {
    setFullscreenImages(images);
    setFullscreenIndex(i);
  };
  const closeFullscreen = () => {
    setFullscreenImages(null);
    setFullscreenIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setFullscreenIndex((i) => (i === 0 ? fullscreenImages.length - 1 : i - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setFullscreenIndex((i) => (i === fullscreenImages.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="flex flex-col h-screen bg-[#02021e]">

      {/* Back dugme */}
      <Link to="/" className="absolute top-4 left-4 text-white text-2xl z-50">
        <FontAwesomeIcon icon={faBackwardStep} />
      </Link>

      {/* Video */}
      <div className="h-1/2 w-full bg-black flex items-center justify-center">
        <div className="w-2/3 h-full">
          <iframe
            src="https://drive.google.com/file/d/1Jczm4a5jKYuYIyh_6MLvtO_w9UKxtVDj/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="shadow-lg"
          />
        </div>
      </div>

      {/* Dvije galerije thumbnail */}
      <div className="h-1/2 flex items-center justify-center gap-8 p-4">

        {/* Sarajevo */}
        {sarajevoImages.length > 0 && (
          <div
            className="relative w-1/3 cursor-pointer"
            onClick={() => setIsOpenSarajevo(true)}
          >
            <img
              src={sarajevoImages[0]}
              alt="Sarajevo galerija"
              className="w-full rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="bg-black bg-opacity-30 backdrop-blur-sm text-center px-4 py-2 rounded">
                <p className="text-white/60 uppercase tracking-widest text-2xl mb-1 font-light">
                  {galleryLabel}
                </p>
                <p className="text-white text-2xl font-semibold hover:text-red-900 transition duration-300 ease-in-out">
                  {memoriamLabels.sarajevo}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Zagreb */}
        {zagrebImages.length > 0 && (
          <div
            className="relative w-1/3 cursor-pointer"
            onClick={() => setIsOpenZagreb(true)}
          >
            <img
              src={zagrebImages[0]}
              alt="Zagreb galerija"
              className="w-full rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="bg-black bg-opacity-30 backdrop-blur-sm text-center px-4 py-2 rounded">
                <p className="text-white/60 uppercase tracking-widest text-2xl mb-1 font-light">
                  {galleryLabel}
                </p>
                <p className="text-white text-2xl font-semibold hover:text-red-900 transition duration-300 ease-in-out">
                  {memoriamLabels.zagreb}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Modal Sarajevo */}
      <Modal isOpen={isOpenSarajevo} onClose={() => setIsOpenSarajevo(false)}>
        <h2 className="text-2xl font-semibold mb-4 text-center">{ memoriamLabels.sarajevo }</h2>
        <div className="max-h-[60vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {sarajevoImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Sarajevo ${idx + 1}`}
                onClick={() => openFullscreen(sarajevoImages, idx)}
                className="cursor-pointer w-full h-40 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      </Modal>

      {/* Modal Zagreb */}
      <Modal isOpen={isOpenZagreb} onClose={() => setIsOpenZagreb(false)}>
        <h2 className="text-2xl font-semibold mb-4 text-center">{ memoriamLabels.zagreb }</h2>
        <div className="max-h-[60vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {zagrebImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Zagreb ${idx + 1}`}
                onClick={() => openFullscreen(zagrebImages, idx)}
                className="cursor-pointer w-full h-40 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      </Modal>

      {/* Fullscreen prikaz */}
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
            src={fullscreenImages[fullscreenIndex]}
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

export default Memoriam;