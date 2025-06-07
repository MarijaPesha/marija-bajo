const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="backdrop-blur-md fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className=" p-8 rounded-2xl shadow-lg w-full max-w-4xl max-h-2/3 relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-red-500 hover:text-red-800 text-5xl font-bold z-10"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
