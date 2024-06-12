import React from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen flex inset-0 items-center justify-center bg-black bg-opacity-50 z-[200]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 z-[200]">
        <div className="flex justify-between items-center mb-3 ">
        <h2 className="text-2xl font-bold">Contact Information</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-4xl mb-1">
            &times;
          </button>
        </div>
        <div className="mb-4">
			Aidan McDonald
        </div>
        <div className="mb-4"><a href="mailto:am.mcdonald00@gmail.com">am.mcdonald00@gmail.com</a>
        </div>
        <div className="mb-4">
			<a href="+61401341779">0401 341 779</a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
