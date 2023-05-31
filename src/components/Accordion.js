import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 flex flex-col items-center">
      <button
        className="flex items-center justify-between w-full md:w-[420px] px-4 py-2 text-lg font-medium bg-gray-200 rounded-md focus:outline-none"
        onClick={handleToggle}
        style={{ backgroundColor: '#a99478' }}
      >
        <span style={{color:'#eae6de'}} ><i className="mr-3 fa-sharp fa-solid fa-list-ul" style={{color:'#908168'}}></i>Your Todos</span>
        <span className={`transition-transform ${isOpen ? 'rotate-90' : ''}`}>
          <i className="fa-solid fa-angle-right" style={{color:"#907f67"}}></i>
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 md:w-[420px] md:max-h-[300px]
        max-h-[350px] w-full
        scrollbar scrollbar-thin scrollbar-thumb-gray-500
        overflow-y-auto rounded-md" style={{backgroundColor: '#d4cfca'}}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
