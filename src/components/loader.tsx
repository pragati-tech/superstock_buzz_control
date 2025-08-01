// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-1000 opacity-100">
      <img
        src="src/assets/brands/Banner.gif" // Update this path as per your project
        alt="Loading..."
        className="w-100 object-contain"
      />
    </div>
  );
};

export default Loader;
