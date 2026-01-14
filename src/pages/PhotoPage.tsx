import { useState } from 'react';
import BlurText from '@/components/BlurText';

const PhotoPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1634017839464-5c339bbe3c06?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1633186223173-c5e0e8760c40?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=800&fit=crop',
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <BlurText
          text="AI Фото"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        />

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-[3/4] rounded-xl overflow-hidden bg-card cursor-pointer opacity-0 animate-fade-in group"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo}
                alt={`AI Фото ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Полный размер"
            className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
          />
        </div>
      )}
    </main>
  );
};

export default PhotoPage;
