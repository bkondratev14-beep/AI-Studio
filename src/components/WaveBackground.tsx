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

    // Flowing curves data
    const curves: Array<{
      startX: number;
      startY: number;
      controlPoints: Array<{ x: number; y: number }>;
      speed: number;
      phase: number;
      intensity: number;
    }> = [];

    // Initialize curves
    for (let i = 0; i < 6; i++) {
      curves.push({
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        controlPoints: Array.from({ length: 4 }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        })),
        speed: 0.0003 + Math.random() * 0.0005,
        phase: Math.random() * Math.PI * 2,
        intensity: 0.3 + Math.random() * 0.7,
      });
    }

    const drawGlowingCurve = (
      points: { x: number; y: number }[],
      intensity: number,
      time: number
    ) => {
      if (points.length < 2) return;

      // Draw multiple layers for glow effect
      const layers = [
        { blur: 80, alpha: 0.05 * intensity },
        { blur: 50, alpha: 0.1 * intensity },
        { blur: 30, alpha: 0.15 * intensity },
        { blur: 15, alpha: 0.25 * intensity },
        { blur: 5, alpha: 0.4 * intensity },
        { blur: 0, alpha: 0.8 * intensity },
      ];

      layers.forEach(({ blur, alpha }) => {
        ctx.save();
        ctx.filter = blur > 0 ? `blur(${blur}px)` : 'none';
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        // Draw smooth bezier curves through points
        for (let i = 1; i < points.length - 2; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        if (points.length > 2) {
          ctx.quadraticCurveTo(
            points[points.length - 2].x,
            points[points.length - 2].y,
            points[points.length - 1].x,
            points[points.length - 1].y
          );
        }

        // Orange gradient for the stroke
        const gradient = ctx.createLinearGradient(
          points[0].x,
          points[0].y,
          points[points.length - 1].x,
          points[points.length - 1].y
        );
        
        const hue = 25 + Math.sin(time * 0.001) * 10;
        gradient.addColorStop(0, `hsla(${hue}, 95%, 55%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(${hue + 5}, 90%, 60%, ${alpha * 1.2})`);
        gradient.addColorStop(1, `hsla(${hue - 5}, 95%, 50%, ${alpha * 0.8})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = blur > 30 ? 40 : blur > 10 ? 20 : 8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        ctx.restore();
      });
    };

    const animate = () => {
      // Fade effect for trails
      ctx.fillStyle = 'rgba(10, 10, 10, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      curves.forEach((curve) => {
        // Animate control points
        const animatedPoints = [
          {
            x: curve.startX + Math.sin(time * curve.speed + curve.phase) * 200,
            y: curve.startY + Math.cos(time * curve.speed * 0.7 + curve.phase) * 150,
          },
          ...curve.controlPoints.map((point, i) => ({
            x: point.x + Math.sin(time * curve.speed * (0.5 + i * 0.2) + curve.phase + i) * 180,
            y: point.y + Math.cos(time * curve.speed * (0.6 + i * 0.15) + curve.phase + i * 0.5) * 180,
          })),
        ];

        drawGlowingCurve(animatedPoints, curve.intensity, time);
      });

      // Add central glow
      const centerGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.5
      );
      centerGradient.addColorStop(0, 'hsla(30, 95%, 50%, 0.08)');
      centerGradient.addColorStop(0.3, 'hsla(25, 90%, 45%, 0.04)');
      centerGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = centerGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time++;
      animationId = requestAnimationFrame(animate);
    };

    // Initial clear
    ctx.fillStyle = 'hsl(0, 0%, 4%)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();

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
