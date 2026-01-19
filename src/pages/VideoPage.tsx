import { useState } from 'react';
import { ExternalLink, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BlurText from '@/components/BlurText';
import FloatingElements from '@/components/FloatingElements';
import GridPattern from '@/components/GridPattern';
import showreelPreview from '@/assets/showreel-preview.jpg';
import horizontalVideoPreview from '@/assets/horizontal-video-preview.jpg';
import vertical1Preview from '@/assets/vertical-1-preview.jpg';
import vertical2Preview from '@/assets/vertical-2-preview.jpg';
import vertical3Preview from '@/assets/vertical-3-preview.jpg';
import vertical4Preview from '@/assets/vertical-4-preview.jpg';
import vertical5Preview from '@/assets/vertical-5-preview.jpg';
import vertical6Preview from '@/assets/vertical-6-preview.jpg';

interface LocalVideo {
  id: string;
  videoSrc: string;
  previewSrc: string;
  isVertical: boolean;
}

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<LocalVideo | null>(null);

  const showreel: LocalVideo = { 
    id: 'showreel', 
    videoSrc: '/videos/showreel.mp4',
    previewSrc: showreelPreview,
    isVertical: true 
  };
  
  const horizontalVideo: LocalVideo = { 
    id: 'horizontal', 
    videoSrc: '/videos/horizontal.mp4',
    previewSrc: horizontalVideoPreview,
    isVertical: false 
  };
  
  const verticalVideos: LocalVideo[] = [
    { id: 'vertical-1', videoSrc: '/videos/vertical-1.mp4', previewSrc: vertical1Preview, isVertical: true },
    { id: 'vertical-2', videoSrc: '/videos/vertical-2.mp4', previewSrc: vertical2Preview, isVertical: true },
    { id: 'vertical-3', videoSrc: '/videos/vertical-3.mp4', previewSrc: vertical3Preview, isVertical: true },
    { id: 'vertical-4', videoSrc: '/videos/vertical-4.mp4', previewSrc: vertical4Preview, isVertical: true },
    { id: 'vertical-5', videoSrc: '/videos/vertical-5.mp4', previewSrc: vertical5Preview, isVertical: true },
    { id: 'vertical-6', videoSrc: '/videos/vertical-6.mp4', previewSrc: vertical6Preview, isVertical: true },
  ];

  const openVideo = (video: LocalVideo) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <main className="pt-24 pb-16 relative min-h-screen">
      {/* Background Effects */}
      <FloatingElements variant="circles" />
      <GridPattern />

      <div className="container mx-auto px-6 relative z-10">
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
            onClick={() => openVideo(showreel)}
          >
            <img
              src={showreel.previewSrc}
              alt="Showreel"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Video */}
        <div className="mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div 
            className="aspect-video rounded-2xl overflow-hidden bg-card border border-border cursor-pointer group"
            onClick={() => openVideo(horizontalVideo)}
          >
            <div className="relative w-full h-full">
              <img
                src={horizontalVideo.previewSrc}
                alt="Horizontal Video"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-9 h-9 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Videos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {verticalVideos.map((video, index) => (
            <div
              key={video.id}
              className="aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border opacity-0 animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => openVideo(video)}
            >
              <div className="relative w-full h-full">
                <img
                  src={video.previewSrc}
                  alt={`Video ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 md:w-7 md:h-7 text-white ml-0.5" fill="white" />
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

      {/* Video Lightbox with Local Video Player */}
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

            {/* Local Video Player Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`${selectedVideo.isVertical ? 'max-w-md w-full' : 'max-w-5xl w-full'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`${selectedVideo.isVertical ? 'aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden bg-black`}>
                <video
                  src={selectedVideo.videoSrc}
                  autoPlay
                  controls
                  playsInline
                  controlsList="nodownload"
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
