"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import DesktopIcons from "./laptop/DesktopIcons";
import Taskbar from "./laptop/Taskbar";
import WindowControls from "./laptop/WindowControls";
import AppContent from "./laptop/AppContent";
import { useLaptopAnimation } from "@/hooks/useLaptopAnimation";
import { useWindowManager } from "@/hooks/useWindowManager";
import { APP_TITLES, KEYBOARD_WIDE_KEYS, KEYBOARD_SPACEBAR_INDEX, KEYBOARD_TOTAL_KEYS } from "@/config/laptop";

export default function LaptopHero() {
  const { laptopRef, screenRef, onoffRef, isZoomed, isAnimating, zoomOffset, handlePowerClick } = useLaptopAnimation();
  const { activeApp, windowOpen, windowState, openApp, closeWindow, minimizeWindow, toggleMaximize } = useWindowManager();
  
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loadProgress, setLoadProgress] = useState(0);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const bodyOverflowRef = useRef<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  const onPowerClick = () => {
    setIsOn(true);
    handlePowerClick();
  };

  const tiltX = isZoomed ? 0 : -3 + mousePosition.y * 3;
  const tiltY = isZoomed ? 0 : -6 + mousePosition.x * 14;
  const reflectionX = 50 + mousePosition.x * 16;
  const reflectionY = 28 + mousePosition.y * 10;
  const reflectionAlpha = 0.08 + Math.min(0.14, Math.abs(mousePosition.x) + Math.abs(mousePosition.y));

  // Animation de chargement du profil
  useEffect(() => {
    if (!isZoomed || profileLoaded) return;
    setLoadProgress(0);
    const obj: { p: number } = { p: 0 };
    gsap.to(obj, {
      p: 100,
      duration: 1.8,
      ease: "power1.out",
      onUpdate: () => setLoadProgress(Math.round(obj.p)),
      onComplete: () => setProfileLoaded(true),
    });
  }, [isZoomed, profileLoaded]);

  // Gestion du scroll de la page
  useEffect(() => {
    if (typeof document === "undefined") return;
    const shouldBlock = isZoomed || windowOpen;
    if (shouldBlock) {
      if (bodyOverflowRef.current === null) bodyOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      if (bodyOverflowRef.current !== null) {
        document.body.style.overflow = bodyOverflowRef.current;
        bodyOverflowRef.current = null;
      } else {
        document.body.style.overflow = "";
      }
    }
    return () => {
      if (bodyOverflowRef.current !== null) {
        document.body.style.overflow = bodyOverflowRef.current;
        bodyOverflowRef.current = null;
      }
    };
  }, [isZoomed, windowOpen]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "radial-gradient(circle at 25% 20%, rgba(198,154,255,0.26), transparent 42%), radial-gradient(circle at 78% 62%, rgba(255,235,255,0.12), transparent 36%), linear-gradient(160deg, #2a1c5c, #1c1242 50%, #120a2d 100%)",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseMove={!isZoomed ? handleMouseMove : undefined}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      {/* Background effects */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 110%, rgba(0,0,0,0.45), transparent 52%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", left: "50%", width: 880, height: 520, transform: "translateX(-50%)", background: "radial-gradient(ellipse at 50% 50%, rgba(210,150,255,0.22), transparent 60%)", filter: "blur(4px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.04), transparent 45%), radial-gradient(ellipse at 82% 18%, rgba(120,180,255,0.05), transparent 45%)", mixBlendMode: "screen", pointerEvents: "none" }} />

      <div style={{ perspective: "2000px", padding: "90px 24px", width: "100%", display: "grid", placeItems: "center" }}>
        <div
          ref={laptopRef}
          style={{
            width: 640,
            transform: isAnimating ? undefined : `rotateX(${tiltX}deg) rotateY(${tiltY}deg) ${isZoomed ? `translate3d(${zoomOffset.x}px, ${zoomOffset.y}px, 650px) scale(1.5)` : ""}`, // ← CHANGÉ ici aussi
            transformStyle: "preserve-3d",
            transition: "transform 0.25s ease-out",
            position: "relative",
          }}
        >
          {/* Desk shadow */}
          <div aria-label="Desk shadow" style={{ position: "absolute", top: "70%", left: "50%", width: 620, height: 160, transform: "translate(-50%, -10%) rotateX(80deg)", background: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.38), transparent 70%)", filter: "blur(16px)", opacity: 0.8 }} />

          {/* Screen */}
          <div ref={screenRef} style={{ position: "relative", height: 360, borderRadius: "20px 20px 16px 16px", background: "#0c0c0f", border: "2px solid #171821", transformOrigin: "bottom", transform: "rotateX(0deg)", boxShadow: "0 22px 60px rgba(0,0,0,0.55)", transformStyle: "preserve-3d", marginBottom: -6 }}>
            <div style={{ position: "absolute", inset: -4, borderRadius: "22px 22px 18px 18px", background: "linear-gradient(135deg, #0c0c10, #15151b)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 18px 32px rgba(0,0,0,0.6)", transform: "translateZ(-10px)" }} />
            <div style={{ position: "absolute", inset: 0, borderRadius: "22px 22px 18px 18px", background: "linear-gradient(145deg, rgba(255,255,255,0.06), transparent 45%)", mixBlendMode: "screen", opacity: 0.7, pointerEvents: "none" }} />

            <div style={{ position: "absolute", inset: 14, borderRadius: 14, background: "#010101", overflow: "hidden", transform: "translateZ(12px)", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
              {/* Camera & LED */}
              <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 12, height: 12, borderRadius: "50%", background: "radial-gradient(circle, #252f3d 25%, #0b1220 70%)", boxShadow: "0 0 0 2px rgba(255,255,255,0.06)" }} />
              <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(18px)", width: 6, height: 6, borderRadius: "50%", background: "radial-gradient(circle, #7cffc7 20%, #135e3c 80%)", boxShadow: "0 0 8px rgba(124,255,199,0.4)" }} />

              <div style={{ width: "100%", height: "100%", background: "linear-gradient(140deg, #0b0b0d, #14121d 60%, #0b0b0d)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "Inter, system-ui, -apple-system, sans-serif", position: "relative" }}>
                {/* Screen effects */}
                <div style={{ position: "absolute", inset: "-4% -6%", background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent 18%, transparent 82%, rgba(120,180,255,0.08))", filter: "blur(6px)", mixBlendMode: "screen", opacity: 0.8 }} />
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${reflectionX}% ${reflectionY}%, rgba(255,255,255,${reflectionAlpha}), transparent 45%)`, mixBlendMode: "screen", opacity: 0.9 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(255,255,255,0.08), transparent 45%)", opacity: 0.6 }} />

                <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
                  {!isOn ? (
                    <div style={{ width: "100%", height: "100%" }} />
                  ) : !profileLoaded ? (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
                      <p style={{ letterSpacing: 2, textTransform: "uppercase", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Chargement du profil</p>
                      <div style={{ width: 260, margin: "12px auto 6px", background: "rgba(255,255,255,0.04)", height: 12, borderRadius: 8, overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}>
                        <div style={{ width: `${loadProgress}%`, height: "100%", background: "linear-gradient(90deg,#7ec3e6,#c8f7ff)", transition: "width 0.12s linear" }} />
                      </div>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>{loadProgress}%</p>
                    </div>
                  ) : (
                    <div style={{ width: "100%", height: "100%", position: "relative" }}>
                      <DesktopIcons onOpen={openApp} />

                      {/* Window */}
                      {windowOpen && activeApp && (
                        <div style={windowState === 'maximized' ? { position: 'absolute', left: 0, top: 0, right: 0, bottom: 25, background: '#ffffff', color: '#111', borderRadius: 0, boxShadow: 'none', overflow: 'hidden', zIndex: 2, borderBottom: '1px solid rgba(11,11,11,0.06)' } : { width: 440, height: 260, background: '#ffffff', color: '#111', borderRadius: 8, boxShadow: '0 18px 50px rgba(0,0,0,0.6)', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', overflow: 'hidden', zIndex: 2 }}>
                          <WindowControls
                            onClose={closeWindow}
                            onMinimize={minimizeWindow}
                            onMaximize={toggleMaximize}
                            title={APP_TITLES[activeApp as keyof typeof APP_TITLES] || 'Fenêtre'}
                          />
                          <div style={{ padding: 14, height: "calc(100% - 36px)", overflow: "auto", display: "flex", flexDirection: "column" }}>
                            <AppContent appId={activeApp} />
                          </div>
                        </div>
                      )}

                      <Taskbar activeApp={activeApp} onOpenApp={openApp} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hinge */}
          <div style={{ height: 10, background: "linear-gradient(180deg, #0d0d12, #050507)", borderRadius: 6, boxShadow: "0 6px 10px rgba(0,0,0,0.7)" }} />

          {/* Keyboard base */}
          <div style={{ height: 280, borderRadius: "0 0 20px 20px", background: "linear-gradient(180deg, #0d0d11, #0a0a0d 60%, #060609)", boxShadow: "0 34px 90px rgba(0,0,0,0.75), inset 0 12px 22px rgba(255,255,255,0.05)", position: "relative", transformOrigin: "top", transform: "rotateX(65deg) translateZ(-6px)", marginTop: -18, transformStyle: "preserve-3d", overflow: "hidden" }}>
            <div style={{ position: "absolute", bottom: -14, left: 0, width: "100%", height: 14, background: "linear-gradient(180deg, #07070c, #020203)", borderRadius: "0 0 20px 20px" }} />
            <div style={{ position: "absolute", inset: 10, borderRadius: 18, background: "linear-gradient(150deg, rgba(255,255,255,0.05), transparent), radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.06), transparent 45%), radial-gradient(ellipse at 80% 35%, rgba(120,180,255,0.05), transparent 45%)", mixBlendMode: "screen", opacity: 0.55, pointerEvents: "none" }} />

            {/* Keyboard keys */}
            <div style={{ position: "absolute", top: 22, left: "50%", transform: "translateX(-50%)", width: "88%", height: "calc(100% - 82px)", display: "grid", gridTemplateColumns: "repeat(14, 1fr)", gap: 6, padding: 12 }}>
              {Array.from({ length: KEYBOARD_TOTAL_KEYS }).map((_, i) => {
                                const isWide = KEYBOARD_WIDE_KEYS.includes(i);
                const isSpaceBar = i === KEYBOARD_SPACEBAR_INDEX;
                
                if (i === 13) {
                  const disabled = isAnimating || isZoomed;
                  const bgOff = "linear-gradient(135deg, #d6d8db 60%, #c2c5c8 100%)";
                  const bgOn = "linear-gradient(135deg, #ffffff 60%, #f7fbff 100%)";
                  const boxOff = "0 4px 10px rgba(0,0,0,0.28)";
                  const boxOn = "0 8px 22px rgba(126,195,230,0.28)";
                  
                  return (
                    <button
                      key="onoff"
                      ref={onoffRef}
                      onClick={onPowerClick}
                      disabled={disabled}
                      style={{
                        gridColumn: "span 2",
                        height: 28,
                        borderRadius: 7,
                        background: isOn ? bgOn : bgOff,
                        color: isOn ? "#0b1220" : "#1b1f23",
                        fontWeight: 700,
                        fontSize: 13,
                        letterSpacing: 1,
                        border: isOn ? "2px solid #7ec3e6" : "1px solid rgba(0,0,0,0.12)",
                        boxShadow: isOn ? boxOn : boxOff,
                        cursor: disabled ? "default" : "pointer",
                        outline: "none",
                        transition: "box-shadow 0.2s, background 0.2s, transform 0.12s, color 0.12s",
                        zIndex: 2,
                        position: "relative",
                        textShadow: isOn ? "0 1px 2px rgba(255,255,255,0.6)" : "none",
                        opacity: disabled ? 0.6 : 1,
                        pointerEvents: disabled ? "none" : "auto",
                        transformOrigin: "center",
                      }}
                    >
                      {isOn ? "ON" : "OFF"}
                    </button>
                  );
                }
                
                return (
                  <div
                    key={i}
                    style={{
                      background: "linear-gradient(135deg, #1f2026, #111118)",
                      borderRadius: 5,
                      height: isSpaceBar ? 30 : 22,
                      gridColumn: isSpaceBar ? "span 6" : isWide ? "span 2" : "auto",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  />
                );
              })}
            </div>

            {/* Trackpad */}
            <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", width: 160, height: 92, borderRadius: 12, background: "linear-gradient(160deg, rgba(30,30,34,0.9), rgba(16,16,20,0.95))", boxShadow: "inset 0 3px 12px rgba(0,0,0,0.65), 0 3px 10px rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0.08), transparent)", opacity: 0.7 }} />
              <div style={{ position: "absolute", top: "50%", left: "12%", width: "78%", height: 1, background: "rgba(255,255,255,0.08)" }} />
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.08), transparent 55%)", opacity: 0.6 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

