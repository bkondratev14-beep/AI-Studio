import { useEffect, useState } from 'react';

const ScrollLines = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate line positions based on scroll
  const line1Offset = (scrollY * 0.3) % 100;
  const line2Offset = (scrollY * 0.2) % 100;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Left line - moves down on scroll */}
      <div 
        className="absolute left-4 md:left-8 lg:left-12 w-0.5 h-32 md:h-48 rounded-full"
        style={{
          top: `${10 + line1Offset}%`,
          background: 'linear-gradient(180deg, transparent 0%, hsl(24 100% 50%) 30%, hsl(24 100% 50%) 70%, transparent 100%)',
          boxShadow: '0 0 15px 2px hsl(24 100% 50% / 0.6), 0 0 30px 4px hsl(24 100% 50% / 0.3)',
          filter: 'blur(0.5px)',
          transition: 'top 0.1s linear',
        }}
      />
      
      {/* Right line - moves up on scroll */}
      <div 
        className="absolute right-4 md:right-8 lg:right-12 w-0.5 h-24 md:h-36 rounded-full"
        style={{
          top: `${60 - line2Offset}%`,
          background: 'linear-gradient(180deg, transparent 0%, hsl(24 100% 50%) 30%, hsl(24 100% 50%) 70%, transparent 100%)',
          boxShadow: '0 0 15px 2px hsl(24 100% 50% / 0.6), 0 0 30px 4px hsl(24 100% 50% / 0.3)',
          filter: 'blur(0.5px)',
          transition: 'top 0.1s linear',
        }}
      />
    </div>
  );
};

export default ScrollLines;
