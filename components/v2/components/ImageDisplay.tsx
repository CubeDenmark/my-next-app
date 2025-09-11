import Image from 'next/image';
import React from "react";

const TextOverlayImageCard = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative max-w-xl mx-auto w-full">
        <Image
          className="h-64 w-full object-cover rounded-md"
          src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
          alt="Random image"
          width={600}
          height={256}
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">
            Get Lost in Mountains
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TextOverlayImageCard;
