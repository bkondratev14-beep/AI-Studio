import { useState } from 'react';
import { ExternalLink, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BlurText from '@/components/BlurText';
import FloatingElements from '@/components/FloatingElements';
import GridPattern from '@/components/GridPattern';
import showreelPreview from '@/assets/showreel-preview.jpg';
import horizontalVideoPreview from '@/assets/horizontal-video-preview.jpg';

interface YouTubeVideo {
  id: string;
  youtubeId: string;
  isVertical: boolean;
}

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  const showreel: YouTubeVideo = { id: 'showreel', youtubeId: 'sIjiMHkmKuQ', isVertical: true };
  const horizontalVideo: YouTubeVideo = { id: 'horizontal', youtubeId: '8Lmf2qoExck', isVertical: false };
  
  const verticalVideos: YouTubeVideo[] = [
    { id: 'vertical-1', youtubeId: 'BzpX1AQXcoI', isVertical: true },
    { id: 'vertical-2', youtubeId: 'bRskbj0SdGo', isVertical: true },
    { id: 'vertical-3', youtubeId: '74Kotvy2UrQ', isVertical: true },
    { id: 'vertical-4', youtubeId: 'xoKONSElxXw', isVertical: true },
    { id: 'vertical-5', youtubeId: 'SooTOcW1QHM', isVertical: true },
  ];

  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  const openVideo = (video: YouTubeVideo) => {
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
              src={showreelPreview}
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
                src={horizontalVideoPreview}
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {verticalVideos.map((video, index) => (
            <div
              key={video.id}
              className="aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border opacity-0 animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => openVideo(video)}
            >
              <div className="relative w-full h-full">
                <img
                  src={getYouTubeThumbnail(video.youtubeId)}
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

      {/* Video Lightbox with YouTube Embed */}
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

            {/* YouTube Embed Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`${selectedVideo.isVertical ? 'max-w-md w-full' : 'max-w-5xl w-full'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`${selectedVideo.isVertical ? 'aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden bg-black`}>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
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
