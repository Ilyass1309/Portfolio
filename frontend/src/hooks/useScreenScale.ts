// hooks/useScreenScale.ts
"use client";

import { useState, useEffect } from "react";

export function useScreenScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      // Dimensions de référence (écran "standard")
      const baseWidth = 1920;
      const baseHeight = 1080;
      
      // Calculer le scale basé sur la plus petite dimension
      const scaleX = vw / baseWidth;
      const scaleY = vh / baseHeight;
      const optimalScale = Math.min(scaleX, scaleY);
      
      // Limiter entre 0.5 et 1.5 pour éviter les extrêmes
      const clampedScale = Math.max(0.5, Math.min(optimalScale, 1.5));
      
      setScale(clampedScale);
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  return scale;
}
