import { motion } from 'motion/react';

interface FloatingElementsProps {
  variant?: 'circles' | 'lines' | 'dots';
}

const FloatingElements = ({ variant = 'circles' }: FloatingElementsProps) => {
  // Generate random positions for elements
  const elements = [
    { x: '5%', y: '15%', size: 120, delay: 0, duration: 20 },
    { x: '85%', y: '25%', size: 80, delay: 2, duration: 25 },
    { x: '10%', y: '45%', size: 60, delay: 1, duration: 18 },
    { x: '90%', y: '55%', size: 100, delay: 3, duration: 22 },
    { x: '15%', y: '75%', size: 90, delay: 0.5, duration: 24 },
    { x: '80%', y: '85%', size: 70, delay: 1.5, duration: 19 },
    { x: '50%', y: '30%', size: 40, delay: 2.5, duration: 21 },
    { x: '70%', y: '70%', size: 50, delay: 4, duration: 23 },
  ];

  const lines = [
    { x1: '0%', y1: '20%', x2: '15%', y2: '20%', delay: 0 },
    { x1: '85%', y1: '35%', x2: '100%', y2: '35%', delay: 1 },
    { x1: '0%', y1: '60%', x2: '10%', y2: '60%', delay: 2 },
    { x1: '90%', y1: '75%', x2: '100%', y2: '75%', delay: 1.5 },
    { x1: '0%', y1: '90%', x2: '8%', y2: '90%', delay: 0.5 },
  ];

  const dots = [
    { x: '3%', y: '10%', delay: 0 },
    { x: '97%', y: '15%', delay: 0.5 },
    { x: '5%', y: '30%', delay: 1 },
    { x: '95%', y: '40%', delay: 1.5 },
    { x: '2%', y: '55%', delay: 2 },
    { x: '98%', y: '65%', delay: 2.5 },
    { x: '4%', y: '80%', delay: 3 },
    { x: '96%', y: '88%', delay: 3.5 },
  ];

  if (variant === 'lines') {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              left: line.x1,
              top: line.y1,
              width: '15%',
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Vertical accent lines */}
        <motion.div
          className="absolute left-[5%] top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[5%] top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, delay: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{ left: dot.x, top: dot.y }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              delay: dot.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Connecting lines between dots */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.line
            x1="3%" y1="10%"
            x2="5%" y2="30%"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            strokeOpacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.line
            x1="97%" y1="15%"
            x2="95%" y2="40%"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            strokeOpacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }

  // Default: circles variant
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-primary/10"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.1, 0.8],
            y: [0, -20, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        style={{ left: '10%', top: '20%' }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-primary/5 blur-3xl"
        style={{ right: '10%', bottom: '30%' }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          delay: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default FloatingElements;
