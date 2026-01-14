import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import BlurText from '@/components/BlurText';

const PhotoPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Photos with varying heights for masonry effect
  const photos = [
    { src: '/images/photo-9.jpg', size: 'tall' },    // Light blue bag with salad
    { src: '/images/photo-10.jpg', size: 'tall' },   // Black/white geometric bag
    { src: '/images/photo-11.jpg', size: 'medium' }, // White/teal bag in cafe
    { src: '/images/photo-1.jpg', size: 'short' },   // Light beige levitating food
    { src: '/images/photo-2.jpg', size: 'tall' },    // Cream jar with candies
    { src: '/images/photo-3.jpg', size: 'medium' },  // Beige/pink product
    { src: '/images/photo-12.jpg', size: 'tall' },   // Gold highlighter compact
    { src: '/images/photo-13.jpg', size: 'short' },  // Gold highlighter closeup
    { src: '/images/photo-14.jpg', size: 'tall' },   // Orange bag street photo
    { src: '/images/photo-5.jpg', size: 'medium' },  // Dark red lipstick
    { src: '/images/photo-6.jpg', size: 'tall' },    // Pink/red tentacles lipstick
    { src: '/images/photo-4.jpg', size: 'short' },   // Brown chocolate truffles
    { src: '/images/photo-15.jpg', size: 'tall' },   // Dark chocolate boxes
    { src: '/images/photo-16.jpg', size: 'tall' },   // Brown boxes with ribbons
    { src: '/images/photo-7.jpg', size: 'medium' },  // Warm golden Christmas
    { src: '/images/photo-8.jpg', size: 'tall' },    // Red/green Christmas tree
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'tall': return 'aspect-[3/4]';
      case 'medium': return 'aspect-square';
      case 'short': return 'aspect-[4/3]';
      default: return 'aspect-[3/4]';
    }
  };

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

        {/* Masonry Photo Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`${getSizeClass(photo.size)} rounded-xl overflow-hidden bg-card cursor-pointer opacity-0 animate-fade-in group break-inside-avoid`}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              onClick={() => setSelectedImage(photo.src)}
            >
              <img
                src={photo.src}
                alt={`AI Фото ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* External Link */}
        <div className="text-center mt-16">
          <a
            href="https://i0z38d3vsvb4.wfolio.pro/disk/ai-portfolio-9fn1bz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="relative">
              <BlurText
                text="Все работы"
                delay={100}
                animateBy="words"
                direction="top"
                className=""
              />
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-px bg-muted-foreground/30 group-hover:bg-primary transition-colors"
                initial={{ scaleX: 0, opacity: 0, filter: 'blur(4px)' }}
                animate={{ scaleX: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{ originX: 0 }}
              />
            </span>
            <motion.span
              initial={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ delay: 0.5, duration: 0.35 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.span>
          </a>
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
