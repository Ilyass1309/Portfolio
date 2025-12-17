// hooks/useWindowManager.ts
import { useState } from "react";

export function useWindowManager() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [windowOpen, setWindowOpen] = useState(false);
  const [windowState, setWindowState] = useState<'normal' | 'minimized' | 'maximized'>('normal');

  const openApp = (id: string) => {
    if (id === 'cv') {
      try { window.open('/CV-ilyass-2026-(2).pdf', '_blank'); } catch (e) {}
      return;
    }
    setActiveApp(id);
    setWindowOpen(true);
    try { window.location.hash = id; } catch (e) {}
  };

  const closeWindow = () => {
    setWindowOpen(false);
    setActiveApp(null);
    setWindowState('normal');
  };

  const minimizeWindow = () => {
    setWindowOpen(false);
    setWindowState('normal');
  };

  const toggleMaximize = () => {
    setWindowState(prev => prev === 'maximized' ? 'normal' : 'maximized');
    setWindowOpen(true);
  };

  return { activeApp, windowOpen, windowState, openApp, closeWindow, minimizeWindow, toggleMaximize };
}
