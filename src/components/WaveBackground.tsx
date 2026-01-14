import { useEffect, useRef } from 'react';

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerY = canvas.height * 0.6;
      const waveCount = 8;

      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 + w * 0.015})`;
        ctx.lineWidth = 1;

        for (let x = 0; x <= canvas.width; x += 2) {
          const frequency = 0.002 + w * 0.0003;
          const amplitude = 30 + w * 15;
          const speed = 0.0005 + w * 0.0001;
          const offset = w * 20;

          const y = centerY + offset +
            Math.sin(x * frequency + time * speed) * amplitude +
            Math.sin(x * frequency * 1.5 + time * speed * 0.7) * (amplitude * 0.5) +
            Math.sin(x * frequency * 0.5 + time * speed * 1.3) * (amplitude * 0.3);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      // Glow effect at center
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        centerY,
        0,
        canvas.width / 2,
        centerY,
        canvas.width * 0.4
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time++;
      animationId = requestAnimationFrame(drawWave);
    };

    drawWave();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="wave-canvas"
      aria-hidden="true"
    />
  );
};

export default WaveBackground;
