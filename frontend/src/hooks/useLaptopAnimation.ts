// hooks/useLaptopAnimation.ts
import { useRef, useState } from "react";
import gsap from "gsap";

export function useLaptopAnimation() {
  const laptopRef = useRef<HTMLDivElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const onoffRef = useRef<HTMLButtonElement | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [zoomOffset, setZoomOffset] = useState({ x: 0, y: 0 });

  const handlePowerClick = () => {
    if (!laptopRef.current || !screenRef.current || isZoomed) return;

    const onoffEl = onoffRef.current;
    if (onoffEl) {
      const tl = gsap.timeline();
      tl.to(onoffEl, { duration: 0.12, scale: 0.92, ease: "power1.out" });
      tl.to(onoffEl, { duration: 0.32, scale: 1, ease: "power2.out" });
      gsap.to(onoffEl, { boxShadow: "0 8px 20px rgba(126,195,230,0.28)", duration: 0.28, yoyo: true, repeat: 1 });
    }

    setIsAnimating(true);
    const laptopEl = laptopRef.current;
    const screenEl = screenRef.current;
    laptopEl.style.transformOrigin = 'center bottom';

    const vw = window.innerWidth / 2;
    const vh = window.innerHeight / 2;
    const screenRect = screenEl.getBoundingClientRect();
    const deltaX = Math.round(vw - (screenRect.left + screenRect.width / 2));
    const deltaY = Math.round(vh - (screenRect.top + screenRect.height / 2));

    setZoomOffset({ x: deltaX, y: deltaY });

    gsap.to(laptopEl, {
      duration: 0.9,
      ease: "power3.out",
      x: deltaX,
      y: deltaY,
      z: 420,
      scale: 1.22,
      rotateX: 0,
      rotateY: 0,
      onComplete: () => {
        setIsZoomed(true);
        setIsAnimating(false);
      }
    });
  };

  return { laptopRef, screenRef, onoffRef, isZoomed, isAnimating, zoomOffset, handlePowerClick };
}
