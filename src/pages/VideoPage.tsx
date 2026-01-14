import { ExternalLink } from 'lucide-react';
import BlurText from '@/components/BlurText';
import Masonry from '@/components/Masonry';

const VideoPage = () => {
  const videos = [
    { id: '1', video: '/videos/showreel.mp4', height: 800 },
    { id: '2', img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop', height: 400 },
    { id: '3', img: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&h=700&fit=crop', height: 700 },
    { id: '4', img: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=700&fit=crop', height: 700 },
    { id: '5', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=700&fit=crop', height: 700 },
    { id: '6', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop', height: 400 },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <BlurText
          text="AI Видео"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-5xl font-bold mb-16 text-center justify-center"
        />

        <Masonry
          items={videos}
          ease="power3.out"
          stagger={0.08}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.97}
          blurToFocus={true}
        />

        {/* External Link */}
        <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a
            href="https://disk.yandex.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="border-b border-muted-foreground/30 group-hover:border-foreground/50 transition-colors">
              Смотреть все работы на Яндекс.Диске
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default VideoPage;
