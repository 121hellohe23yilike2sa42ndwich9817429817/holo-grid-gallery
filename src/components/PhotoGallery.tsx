
import React, { useState } from 'react';
import PhotoCard from './PhotoCard';

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Using direct Picsum URLs for placeholder images
  const photos = [
    {
      id: 1,
      src: "https://picsum.photos/800/600?random=1",
      alt: "Landscape photography",
      height: "h-64"
    },
    {
      id: 2,
      src: "https://picsum.photos/800/800?random=2", 
      alt: "Portrait photography",
      height: "h-80"
    },
    {
      id: 3,
      src: "https://picsum.photos/800/500?random=3",
      alt: "Street photography",
      height: "h-56"
    },
    {
      id: 4,
      src: "https://picsum.photos/800/700?random=4",
      alt: "Nature photography",
      height: "h-72"
    },
    {
      id: 5,
      src: "https://picsum.photos/800/600?random=5",
      alt: "Urban photography",
      height: "h-64"
    },
    {
      id: 6,
      src: "https://picsum.photos/800/900?random=6",
      alt: "Abstract photography",
      height: "h-96"
    },
    {
      id: 7,
      src: "https://picsum.photos/800/550?random=7",
      alt: "Architecture photography",
      height: "h-60"
    },
    {
      id: 8,
      src: "https://picsum.photos/800/750?random=8",
      alt: "Wildlife photography",
      height: "h-76"
    },
    {
      id: 9,
      src: "https://picsum.photos/800/650?random=9",
      alt: "Travel photography",
      height: "h-68"
    },
    {
      id: 10,
      src: "https://picsum.photos/800/800?random=10",
      alt: "Macro photography",
      height: "h-80"
    },
    {
      id: 11,
      src: "https://picsum.photos/800/600?random=11",
      alt: "Event photography",
      height: "h-64"
    },
    {
      id: 12,
      src: "https://picsum.photos/800/700?random=12",
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
