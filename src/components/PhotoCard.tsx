
import React from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  height: string;
}

interface PhotoCardProps {
  photo: Photo;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index, isHovered, onHover, onLeave }) => {
  return (
    <div
      className="break-inside-avoid mb-6 group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden rounded-xl">
        {/* Holographic border effect */}
        <div 
          className={`absolute inset-0 rounded-xl transition-all duration-500 ${
            isHovered 
              ? 'bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 via-green-500 to-purple-500 p-1 animate-gradient-x' 
              : 'bg-gray-800 p-px'
          }`}
        >
          <div className="relative overflow-hidden rounded-xl bg-black">
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full object-cover transition-all duration-700 ${photo.height} ${
                isHovered 
                  ? 'scale-110 brightness-110 contrast-110' 
                  : 'scale-100'
              }`}
            />
            
            {/* Holographic overlay */}
            <div 
              className={`absolute inset-0 transition-all duration-500 ${
                isHovered 
                  ? 'bg-gradient-to-tr from-purple-500/20 via-transparent via-pink-500/20 via-transparent to-blue-500/20 opacity-100' 
                  : 'opacity-0'
              }`}
            />
            
            {/* Shimmer effect */}
            <div 
              className={`absolute inset-0 transition-all duration-700 ${
                isHovered 
                  ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-full' 
                  : 'translate-x-[-100%]'
              }`}
            />
          </div>
        </div>
        
        {/* Pop-out shadow effect */}
        <div 
          className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
            isHovered 
              ? 'transform translate-y-2 scale-105 shadow-2xl shadow-purple-500/50' 
              : 'transform translate-y-0 scale-100'
          }`}
        />
      </div>
    </div>
  );
};

export default PhotoCard;
