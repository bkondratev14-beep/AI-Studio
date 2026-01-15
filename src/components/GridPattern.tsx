import { motion } from 'motion/react';

const GridPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Animated corner accents */}
      <motion.div
        className="absolute top-32 left-6 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-6 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-primary/40 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
      </motion.div>
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-[8%] w-2 h-2 rotate-45 border border-primary/20"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-[8%] w-3 h-3 rotate-45 border border-primary/20"
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          delay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-[5%] w-1.5 h-1.5 rounded-full bg-primary/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          delay: 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-[5%] w-1.5 h-1.5 rounded-full bg-primary/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          delay: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-[10%] w-4 h-4 rotate-45 border border-primary/15"
        animate={{
          rotate: [45, 90, 45],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-[10%] w-3 h-3 rotate-45 border border-primary/15"
        animate={{
          rotate: [45, 0, 45],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 9,
          delay: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Side accent lines */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-primary/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          width: ['3rem', '4rem', '3rem'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-primary/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          width: ['3rem', '4rem', '3rem'],
        }}
        transition={{
          duration: 5,
          delay: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default GridPattern;
