import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BlurText from '@/components/BlurText';

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const verticalVideos = [
    '/videos/vertical-1.mp4',
    '/videos/vertical-2.mp4',
    '/videos/vertical-3.mp4',
  ];

  const allVideos = [
    { src: '/videos/showreel.mp4', isVertical: true },
    { src: '/videos/cyberpunk-ring.mp4', isVertical: false },
    ...verticalVideos.map(src => ({ src, isVertical: true })),
  ];

  const openVideo = (src: string) => {
    setSelectedVideo(src);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const getVideoOrientation = (src: string) => {
    return allVideos.find(v => v.src === src)?.isVertical ?? true;
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <BlurText
          text="AI Видео"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        />

        {/* Main Showreel - Vertical */}
        <div className="max-w-md mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div 
            className="aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border relative cursor-pointer group"
            onClick={() => openVideo('/videos/showreel.mp4')}
          >
            <video
              src="/videos/showreel.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Video */}
        <div className="mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div 
            className="aspect-video rounded-2xl overflow-hidden bg-card border border-border cursor-pointer group"
            onClick={() => openVideo('/videos/cyberpunk-ring.mp4')}
          >
            <div className="relative w-full h-full">
              <video
                src="/videos/cyberpunk-ring.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {verticalVideos.map((video, index) => (
            <div
              key={index}
              className="aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border opacity-0 animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => openVideo(video)}
            >
              <div className="relative w-full h-full">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Link */}
        <div className="text-center">
          <a
            href="https://disk.yandex.ru/d/Fo4qI2QORRGvHw"
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

      {/* Video Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`${getVideoOrientation(selectedVideo) ? 'max-w-md w-full' : 'max-w-5xl w-full'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`${getVideoOrientation(selectedVideo) ? 'aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden bg-black`}>
                <video
                  key={selectedVideo}
                  src={selectedVideo}
                  autoPlay
                  controls
                  playsInline
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default VideoPage;
