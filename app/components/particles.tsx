"use client";

import { useEffect, useMemo, useRef } from "react";

type Props = {
  className?: string;
  quantity?: number;     // how many particles (default 80)
  staticity?: number;    // lower = more pull to the mouse (default 40)
  ease?: number;         // springiness (0–1, default .15)
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
};

export default function Particles({
  className,
  quantity = 90,
  staticity = 40,
  ease = 0.15,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0, has: false });

  // create particles once
  const particles = useMemo<Particle[]>(() => {
    const list: Particle[] = [];
    for (let i = 0; i < quantity; i++) {
      const x = Math.random();
      const y = Math.random();
      list.push({
        x,
        y,
        vx: 0,
        vy: 0,
        size: 0.6 + Math.random() * 1.2,
        baseX: x,
        baseY: y,
      });
    }
    return list;
  }, [quantity]);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { clientWidth, clientHeight } = c.parentElement || c;
      width = clientWidth;
      height = clientHeight;
      c.width = Math.floor(width * dpr);
      c.height = Math.floor(height * dpr);
      c.style.width = width + "px";
      c.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(c.parentElement || c);

    // pointer handlers
    const onMove = (e: PointerEvent) => {
      const rect = c.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / width;
      mouse.current.y = (e.clientY - rect.top) / height;
      mouse.current.has = true;
    };
    const onLeave = () => (mouse.current.has = false);

    c.addEventListener("pointermove", onMove);
    c.addEventListener("pointerdown", onMove);
    c.addEventListener("pointerleave", onLeave);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const maxDist = 0.25; // attraction radius (as fraction of shortest side)
    const linkDist = 0.08; // distance to draw lines between particles

    const loop = () => {
      raf.current = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, width, height);

      // physics
      particles.forEach((p) => {
        // pull each particle back to its base position
        const toBaseX = (p.baseX - p.x) * ease * 0.4;
        const toBaseY = (p.baseY - p.y) * ease * 0.4;

        p.vx += toBaseX;
        p.vy += toBaseY;

        // attraction to mouse
        if (mouse.current.has && !prefersReduced) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * (1 / staticity); // lower staticity = stronger pull
            p.vx += dx * force;
            p.vy += dy * force;
          }
        }

        // damping
        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.vx;
        p.y += p.vy;

        // wrap around edges softly
        if (p.x < -0.05) p.x = 1.05;
        if (p.x > 1.05) p.x = -0.05;
        if (p.y < -0.05) p.y = 1.05;
        if (p.y > 1.05) p.y = -0.05;
      });

      // draw links first (subtle)
      ctx.lineWidth = 1;
      particles.forEach((a, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = 0.18 * (1 - dist / linkDist);
            ctx.strokeStyle = `rgba(200,200,200,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x * width, a.y * height);
            ctx.lineTo(b.x * width, b.y * height);
            ctx.stroke();
          }
        }
      });

      // draw dots
      particles.forEach((p) => {
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    loop();

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      ro.disconnect();
      c.removeEventListener("pointermove", onMove);
      c.removeEventListener("pointerdown", onMove);
      c.removeEventListener("pointerleave", onLeave);
    };
  }, [particles, staticity, ease]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}