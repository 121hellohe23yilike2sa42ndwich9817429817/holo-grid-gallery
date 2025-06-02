
import React, { useState } from 'react';
import PhotoCard from './PhotoCard';

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      alt: "Foggy mountain summit",
      height: "h-64"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=800&fit=crop",
      alt: "Ocean wave at beach",
      height: "h-80"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800&h=500&fit=crop",
      alt: "Mountain alps landscape",
      height: "h-56"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&h=700&fit=crop",
      alt: "River surrounded by rocks",
      height: "h-72"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop",
      alt: "Forest lit by sunbeam",
      height: "h-64"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=900&fit=crop",
      alt: "Yellow lights between trees",
      height: "h-96"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=550&fit=crop",
      alt: "Body of water surrounded by trees",
      height: "h-60"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=750&fit=crop",
      alt: "Bird's eye view of green mountains",
      height: "h-76"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=650&fit=crop",
      alt: "Green grass and rocky mountain",
      height: "h-68"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=800&fit=crop",
      alt: "Trees near rocky mountain",
      height: "h-80"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      alt: "Orange tabby cat",
      height: "h-64"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&h=700&fit=crop",
      alt: "Grey tabby kitten",
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
