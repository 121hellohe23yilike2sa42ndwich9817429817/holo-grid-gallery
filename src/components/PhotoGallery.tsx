
import React, { useState } from 'react';
import PhotoCard from './PhotoCard';

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Photos will be loaded from the public/photos folder
  const photos = [
    {
      id: 1,
      src: "/photos/photo1.jpg",
      alt: "Landscape photography",
      height: "h-64"
    },
    {
      id: 2,
      src: "/photos/photo2.jpg", 
      alt: "Portrait photography",
      height: "h-80"
    },
    {
      id: 3,
      src: "/photos/photo3.jpg",
      alt: "Street photography",
      height: "h-56"
    },
    {
      id: 4,
      src: "/photos/photo4.jpg",
      alt: "Nature photography",
      height: "h-72"
    },
    {
      id: 5,
      src: "/photos/photo5.jpg",
      alt: "Urban photography",
      height: "h-64"
    },
    {
      id: 6,
      src: "/photos/photo6.jpg",
      alt: "Abstract photography",
      height: "h-96"
    },
    {
      id: 7,
      src: "/photos/photo7.jpg",
      alt: "Architecture photography",
      height: "h-60"
    },
    {
      id: 8,
      src: "/photos/photo8.jpg",
      alt: "Wildlife photography",
      height: "h-76"
    },
    {
      id: 9,
      src: "/photos/photo9.jpg",
      alt: "Travel photography",
      height: "h-68"
    },
    {
      id: 10,
      src: "/photos/photo10.jpg",
      alt: "Macro photography",
      height: "h-80"
    },
    {
      id: 11,
      src: "/photos/photo11.jpg",
      alt: "Event photography",
      height: "h-64"
    },
    {
      id: 12,
      src: "/photos/photo12.jpg",
      alt: "Fashion photography",
      height: "h-72"
    }
  ];

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {photos.map((photo, index) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          index={index}
          isHovered={hoveredIndex === index}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
