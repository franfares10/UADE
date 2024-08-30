import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <button 
      onClick={handleNavigate} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Go to About Page
    </button>
  );
};

export default NavigateButton;