'use client';

import { useRef, useEffect } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

const SPARK_COLOR  = '#FEBC2E';
const SPARK_SIZE   = 10;
const SPARK_RADIUS = 28;
const SPARK_COUNT  = 12;
const DURATION     = 600;

export default function GlobalClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = (timestamp: number) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter(spark => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= DURATION) return false;

        const t       = elapsed / DURATION;
        const eased   = t * (2 - t);           // ease-out quad
        const dist    = eased * SPARK_RADIUS;
        const len     = SPARK_SIZE * (1 - eased);

        const x1 = spark.x + dist       * Math.cos(spark.angle);
        const y1 = spark.y + dist       * Math.sin(spark.angle);
        const x2 = spark.x + (dist+len) * Math.cos(spark.angle);
        const y2 = spark.y + (dist+len) * Math.sin(spark.angle);

        ctx.strokeStyle = SPARK_COLOR;
        ctx.lineWidth   = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    const handleClick = (e: MouseEvent) => {
      const now = performance.now();
      const newSparks: Spark[] = Array.from({ length: SPARK_COUNT }, (_, i) => ({
        x: e.clientX,
        y: e.clientY,
        angle: (2 * Math.PI * i) / SPARK_COUNT,
        startTime: now,
      }));
      sparksRef.current.push(...newSparks);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('click', handleClick);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, []); // runs once — all functions defined inside, no stale closure issues

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        inset:         0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        zIndex:        9999,
      }}
    />
  );
}
