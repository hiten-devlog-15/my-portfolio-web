import { useEffect, useRef, useCallback } from 'react';

import manifest from '../frameManifest.json';

const FRAME_URLS: string[] = manifest.frames;
const TOTAL_FRAMES = manifest.totalFrames;

// ─── Component ────────────────────────────────────────────────────────────────
export default function ScrollVideoBackground() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const imagesRef   = useRef<HTMLImageElement[]>([]);
  const loadedRef   = useRef(0);
  const frameRef    = useRef(0);           // current displayed frame index
  const rafRef      = useRef<number | null>(null);
  const readyRef    = useRef(false);       // true once ≥1 frame decoded

  // ── Cover-draw one frame on the canvas ─────────────────────────────────────
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // background-size: cover equivalent
    const scale = Math.max(cw / iw, ch / ih);
    const dw    = iw * scale;
    const dh    = ih * scale;
    const dx    = (cw - dw) / 2;
    const dy    = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // ── Sync canvas pixel dimensions to viewport ───────────────────────────────
  const syncSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    if (readyRef.current) drawFrame(frameRef.current);
  }, [drawFrame]);

  // ── Schedule a render via rAF (de-bounces rapid scroll events) ────────────
  const scheduleRender = useCallback((target: number) => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      frameRef.current = target;
      if (readyRef.current) drawFrame(target);
    });
  }, [drawFrame]);

  // ── Scroll → frame index ───────────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    const scrollTop  = window.scrollY;
    const maxScroll  = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const progress   = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    const target     = Math.min(Math.round(progress * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1);
    scheduleRender(target);
  }, [scheduleRender]);

  // ── Preload all frames ─────────────────────────────────────────────────────
  useEffect(() => {
    if (TOTAL_FRAMES === 0) return;

    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const onLoad = () => {
      loadedRef.current += 1;
      if (!readyRef.current) {
        // Become ready as soon as ANY frame finishes loading
        readyRef.current = true;
        syncSize();          // set canvas dimensions first
        drawFrame(frameRef.current);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src     = FRAME_URLS[i];
      img.onload  = onLoad;
      img.onerror = onLoad; // never stall on a 404
      images[i]   = img;
    }
    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
      loadedRef.current = 0;
      readyRef.current  = false;
    };
  }, [drawFrame, syncSize]);

  // ── Attach scroll + resize listeners ──────────────────────────────────────
  useEffect(() => {
    syncSize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', syncSize,      { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', syncSize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll, syncSize]);

  // ── Render ─────────────────────────────────────────────────────────────────
  // z-index: 0  →  sits behind the content wrapper (z-index: 1)
  // position: fixed  →  never takes up document-flow space
  // pointer-events: none  →  all clicks pass through to the content
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        width:         '100vw',
        height:        '100vh',
        zIndex:        0,
        pointerEvents: 'none',
        display:       'block',
      }}
    />
  );
}
