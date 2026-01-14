import { ExternalLink } from 'lucide-react';
import BlurText from '@/components/BlurText';

const VideoPage = () => {
  // Placeholder video URLs - replace with actual videos
  const verticalVideos = [
    'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&h=700&fit=crop',
    'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=700&fit=crop',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=700&fit=crop',
  ];

  const horizontalVideo = 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=675&fit=crop';

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
        <div className="max-w-md mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border relative">
            <video
              src="/videos/showreel.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4">Шоурил со всеми работами</p>
        </div>

        {/* Horizontal Video */}
        <div className="mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border">
            <img
              src={horizontalVideo}
              alt="AI Видео работа"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vertical Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {verticalVideos.map((video, index) => (
            <div
              key={index}
              className="aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <img
                src={video}
                alt={`AI Видео ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* External Link */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a
            href="https://disk.yandex.ru/d/Fo4qI2QORRGvHw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="border-b border-muted-foreground/30 group-hover:border-primary transition-colors">
              Все работы
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default VideoPage;
