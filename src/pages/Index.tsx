import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LiquidEther from '@/components/LiquidEther';
import TeamCard from '@/components/TeamCard';
import ToolsSection from '@/components/ToolsSection';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LiquidEther
            colors={['#db7706', '#b1aab1', '#db7706']}
            mouseForce={28}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Воплощаем любые идеи<br />в жизнь с помощью ИИ
          </h1>
          
          <div 
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <Button variant="hero" asChild>
              <Link to="/order">Оставить заявку</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Команда
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1}>
              <TeamCard
                name="Давид Королев"
                description="AI-креатор с более чем 8-летним опытом в видеопродакшене. Работал монтажёром, видеооператором, сценаристом и VFX-артистом. Сегодня объединяю весь этот опыт в одной профессии — AI-креатор, создавая визуал нового поколения."
                imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <TeamCard
                name="Полина Ландышева"
                description="Фотограф с 2022 года. Прошла весь путь создания продающего визуала для товаров — от предметной съёмки с реальным реквизитом до полностью AI-сгенерированных сцен. Сегодня любой объект, фон или идея создаются с помощью точного промпта."
                imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <ToolsSection />
    </main>
  );
};

export default Index;
