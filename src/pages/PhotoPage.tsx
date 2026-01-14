import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import BlurText from '@/components/BlurText';

const PhotoPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Arranged by color palette: cool/light → warm beige/gold → orange → dark brown
  const photos = [
    '/images/photo-9.jpg',   // Light blue bag with salad
    '/images/photo-10.jpg',  // Black/white geometric bag
    '/images/photo-11.jpg',  // White/teal bag in cafe
    '/images/photo-1.jpg',   // Light beige levitating food
    '/images/photo-2.jpg',   // Cream jar with candies
    '/images/photo-3.jpg',   // Beige/pink product
    '/images/photo-12.jpg',  // Gold highlighter compact
    '/images/photo-13.jpg',  // Gold highlighter closeup
    '/images/photo-14.jpg',  // Orange bag street photo
    '/images/photo-5.jpg',   // Dark red lipstick
    '/images/photo-6.jpg',   // Pink/red tentacles lipstick
    '/images/photo-4.jpg',   // Brown chocolate truffles
    '/images/photo-15.jpg',  // Dark chocolate boxes
    '/images/photo-16.jpg',  // Brown boxes with ribbons
    '/images/photo-7.jpg',   // Warm golden Christmas
    '/images/photo-8.jpg',   // Red/green Christmas tree
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
