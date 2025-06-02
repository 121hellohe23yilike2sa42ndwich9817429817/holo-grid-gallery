
import React from 'react';
import PhotoGallery from '../components/PhotoGallery';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Photography Portfolio
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover moments captured through the lens, where each image tells a unique story
          </p>
        </header>
        <PhotoGallery />
      </div>
    </div>
  );
};

export default Index;
