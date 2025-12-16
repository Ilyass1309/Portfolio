"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LaptopHero() {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);
  const onoffRef = useRef<HTMLButtonElement | null>(null);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [zoomOffset, setZoomOffset] = useState({ x: 0, y: 0 });
  const [loadProgress, setLoadProgress] = useState(0);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [windowOpen, setWindowOpen] = useState(false);
  const [windowState, setWindowState] = useState<'normal' | 'minimized' | 'maximized'>('normal');


  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  const handlePowerClick = () => {
    if (!laptopRef.current || !screenRef.current) return;

    const laptopEl = laptopRef.current;
    const screenEl = screenRef.current;

    const onoffEl = onoffRef.current;
    if (onoffEl) {
      // petit feedback tactile : press / release + glow
      const tl = gsap.timeline();
      tl.to(onoffEl, { duration: 0.12, scale: 0.92, ease: "power1.out" });
      tl.to(onoffEl, { duration: 0.32, scale: 1, ease: "power2.out" });
      gsap.to(onoffEl, { boxShadow: "0 8px 20px rgba(126,195,230,0.28)", duration: 0.28, yoyo: true, repeat: 1, ease: "power1.inOut" });
      // marquer le bouton comme allumé (permanent)
      setIsOn(true);
    }

    // Si déjà agrandi, ne rien faire (approche définitive)
    if (isZoomed) return;

    // Approche uniquement sur l'axe Z (plus proche de l'utilisateur)
    setIsAnimating(true);
    // Mettre le point d'origine en bas pour un effet d'avancée plus naturel
    laptopEl.style.transformOrigin = 'center bottom';

    // Calculer le décalage nécessaire pour centrer le centre de l'écran du laptop
    const vw = window.innerWidth / 2;
    const vh = window.innerHeight / 2;
    const screenRect = screenEl.getBoundingClientRect();
    const screenCenterX = screenRect.left + screenRect.width / 2;
    const screenCenterY = screenRect.top + screenRect.height / 2;
    // Remonter légèrement l'écran par rapport au centre de la fenêtre
    const verticalOffset = 0; // px — augmentez pour remonter davantage
    const desiredCenterY = vh - verticalOffset;
    const deltaX = Math.round(vw - screenCenterX);
    const deltaY = Math.round(desiredCenterY - screenCenterY);

    // Mémoriser l'offset pour que le rendu React préserve la translation après animation
    setZoomOffset({ x: deltaX, y: deltaY });

    // Animer l'axe Z, l'échelle, la translation XY et redresser l'ordinateur (rotateX/rotateY -> 0)
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

  const tiltX = isZoomed ? 0 : -3 + mousePosition.y * 3;
  const tiltY = isZoomed ? 0 : -6 + mousePosition.x * 14;
  const reflectionX = 50 + mousePosition.x * 16;
  const reflectionY = 28 + mousePosition.y * 10;
  const reflectionAlpha = 0.08 + Math.min(0.14, Math.abs(mousePosition.x) + Math.abs(mousePosition.y));

  useEffect(() => {
    if (!isZoomed || profileLoaded) return;
    setLoadProgress(0);
    const obj: { p: number } = { p: 0 };
    // animation de progression du chargement
    gsap.to(obj, {
      p: 100,
      duration: 1.8,
      ease: "power1.out",
      onUpdate: () => setLoadProgress(Math.round(obj.p)),
      onComplete: () => setProfileLoaded(true),
    });
  }, [isZoomed, profileLoaded]);


  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at 25% 20%, rgba(198,154,255,0.26), transparent 42%), radial-gradient(circle at 78% 62%, rgba(255,235,255,0.12), transparent 36%), linear-gradient(160deg, #2a1c5c, #1c1242 50%, #120a2d 100%)",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseMove={!isZoomed ? handleMouseMove : undefined}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 110%, rgba(0,0,0,0.45), transparent 52%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          width: 880,
          height: 520,
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse at 50% 50%, rgba(210,150,255,0.22), transparent 60%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.04), transparent 45%), radial-gradient(ellipse at 82% 18%, rgba(120,180,255,0.05), transparent 45%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      <div style={{ perspective: "2000px", padding: "90px 24px", width: "100%", display: "grid", placeItems: "center" }}>
        <div
          ref={laptopRef}
          style={{
            width: 640,
            transform: isAnimating
              ? undefined
              : `rotateX(${tiltX}deg) rotateY(${tiltY}deg) ${isZoomed ? `translate3d(${zoomOffset.x}px, ${zoomOffset.y}px, 420px) scale(1.22)` : ""}`,
            transformStyle: "preserve-3d",
            transition: "transform 0.25s ease-out",
            position: "relative",
          }}
        >
          <div
            aria-label="Desk shadow"
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              width: 620,
              height: 160,
              transform: "translate(-50%, -10%) rotateX(80deg)",
              background: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.38), transparent 70%)",
              filter: "blur(16px)",
              opacity: 0.8,
            }}
          />

          {/* Screen */}
          <div
            ref={screenRef}
            style={{
              position: "relative",
              height: 360,
              borderRadius: "20px 20px 16px 16px",
              background: "#0c0c0f",
              border: "2px solid #171821",
              transformOrigin: "bottom",
              transform: "rotateX(0deg)",
              boxShadow: "0 22px 60px rgba(0,0,0,0.55)",
              transformStyle: "preserve-3d",
              marginBottom: -6,
            }}
          >
            <div
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: "22px 22px 18px 18px",
              background: "linear-gradient(135deg, #0c0c10, #15151b)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 18px 32px rgba(0,0,0,0.6)",
              transform: "translateZ(-10px)",
            }}
          />
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "22px 22px 18px 18px",
                background: "linear-gradient(145deg, rgba(255,255,255,0.06), transparent 45%)",
                mixBlendMode: "screen",
                opacity: 0.7,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 14,
                borderRadius: 14,
                background: "#010101",
                overflow: "hidden",
                transform: "translateZ(12px)",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #252f3d 25%, #0b1220 70%)",
                  boxShadow: "0 0 0 2px rgba(255,255,255,0.06)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: "50%",
                  transform: "translateX(18px)",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #7cffc7 20%, #135e3c 80%)",
                  boxShadow: "0 0 8px rgba(124,255,199,0.4)",
                }}
              />

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(140deg, #0b0b0d, #14121d 60%, #0b0b0d)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  position: "relative",
                }}
              >
                {/* Rim lights pour souligner les bords de l'écran */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-4% -6%",
                    background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent 18%, transparent 82%, rgba(120,180,255,0.08))",
                    filter: "blur(6px)",
                    mixBlendMode: "screen",
                    opacity: 0.8,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at ${reflectionX}% ${reflectionY}%, rgba(255,255,255,${reflectionAlpha}), transparent 45%)`,
                    mixBlendMode: "screen",
                    opacity: 0.9,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(120deg, rgba(255,255,255,0.08), transparent 45%)",
                    opacity: 0.6,
                  }}
                />

                <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
                  {!isOn ? (
                    // écran éteint : rien d'affiché (écran noir)
                    <div style={{ width: "100%", height: "100%" }} />
                  ) : !profileLoaded ? (
                    // chargement centré
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
                      <p style={{ letterSpacing: 2, textTransform: "uppercase", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                        Chargement du profil
                      </p>
                      <div style={{ width: 260, margin: "12px auto 6px", background: "rgba(255,255,255,0.04)", height: 12, borderRadius: 8, overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}>
                        <div style={{ width: `${loadProgress}%`, height: "100%", background: "linear-gradient(90deg,#7ec3e6,#c8f7ff)", transition: "width 0.12s linear" }} />
                      </div>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>{loadProgress}%</p>
                    </div>
                  ) : (
                    <>
                      {/* Bureau avec icônes applicatives */}
                      <div style={{ width: "100%", height: "100%", position: "relative" }}>
                        {/* Icônes bureau (gauche) */}
                        <div style={{ position: "absolute", top: 20, left: 12, display: "grid", gap: 12 }}>
                          {[
                            { id: "accueil", label: "Accueil", icon: "🏠" },
                            { id: "projets", label: "Projets", icon: "🗂️" },
                            { id: "apropos", label: "À propos", icon: "👤" },
                            { id: "contact", label: "Contact", icon: "✉️" },
                          ].map((app) => (
                            <button
                              key={app.id}
                              onClick={() => {
                                setActiveApp(app.id);
                                setWindowOpen(true);
                                try { window.location.hash = app.id; } catch (e) {}
                              }}
                              style={{
                                width: 72,
                                height: 84,
                                border: "none",
                                background: "transparent",
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 8,
                                cursor: "pointer",
                                padding: 6,
                                textAlign: "center",
                              }}
                            >
                              <div style={{ width: 48, height: 48, borderRadius: 8, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}>{app.icon}</div>
                              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.9)" }}>{app.label}</div>
                            </button>
                          ))}
                        </div>

                        {/* Fenêtre Windows simulée */}
                        {windowOpen && activeApp && (
                          <div
                            style={
                              windowState === 'maximized'
                                ? { width: '100%', height: '100%', background: '#ffffff', color: '#111', borderRadius: 0, boxShadow: 'none', position: 'absolute', left: 0, top: 0, transform: 'none', overflow: 'hidden', zIndex: 3 }
                                : { width: 440, height: 260, background: '#ffffff', color: '#111', borderRadius: 8, boxShadow: '0 18px 50px rgba(0,0,0,0.6)', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', overflow: 'hidden' }
                            }
                          >
                            <div style={{ height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px', background: 'linear-gradient(90deg,#2b5797,#1e3a78)', color: 'white' }}>
                              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                <button
                                  onClick={() => {
                                    // close (red)
                                    setWindowOpen(false);
                                    setActiveApp(null);
                                    setWindowState('normal');
                                  }}
                                  aria-label="Fermer"
                                  style={{ width: 12, height: 12, borderRadius: 3, background: '#ff605c', display: 'inline-block', border: 'none', padding: 0, cursor: 'pointer' }}
                                />
                                <button
                                  onClick={() => {
                                    // minimize (yellow)
                                    setWindowOpen(false);
                                    setWindowState('normal');
                                  }}
                                  aria-label="Réduire"
                                  style={{ width: 12, height: 12, borderRadius: 3, background: '#ffbd2e', display: 'inline-block', border: 'none', padding: 0, cursor: 'pointer' }}
                                />
                                <button
                                  onClick={() => {
                                    // maximize / restore (green)
                                    if (windowState === 'maximized') {
                                      setWindowState('normal');
                                    } else {
                                      setWindowState('maximized');
                                      setWindowOpen(true);
                                    }
                                  }}
                                  aria-label="Agrandir"
                                  style={{ width: 12, height: 12, borderRadius: 3, background: '#27c93f', display: 'inline-block', border: 'none', padding: 0, cursor: 'pointer' }}
                                />
                                <div style={{ marginLeft: 8, fontWeight: 700 }}>{({ 'accueil': 'Accueil', 'projets': 'Projets', 'apropos': 'À propos', 'contact': 'Contact' }[activeApp] || 'Fenêtre')}</div>
                              </div>
                              <div />
                            </div>
                            <div style={{ padding: 14, height: "calc(100% - 36px)", overflow: "auto" }}>
                              {activeApp === "accueil" && (
                                <div>
                                  <h3 style={{ margin: "4px 0 8px" }}>Bienvenue</h3>
                                  <p style={{ margin: 0 }}>Bienvenue sur mon portfolio — cliquez sur les applications du bureau pour naviguer.</p>
                                </div>
                              )}
                              {activeApp === "projets" && (
                                <div>
                                  <h3 style={{ margin: "4px 0 8px" }}>Projets</h3>
                                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                                    <li>Projet A — React / Next.js</li>
                                    <li>Projet B — Node / API</li>
                                    <li>Projet C — UI / Animations</li>
                                  </ul>
                                </div>
                              )}
                              {activeApp === "apropos" && (
                                <div>
                                  <h3 style={{ margin: "4px 0 8px" }}>À propos</h3>
                                  <p style={{ margin: 0 }}>Développeur Full Stack passionné par les interfaces et les performances.</p>
                                </div>
                              )}
                              {activeApp === "contact" && (
                                <div>
                                  <h3 style={{ margin: "4px 0 8px" }}>Contact</h3>
                                  <p style={{ margin: 0 }}>Email: hello@exemple.com</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Taskbar (ultra-thin, white, full-width) */}
                        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 25, borderRadius: 0, background: "#ffffff", color: "#0b0b0b", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 12px", boxShadow: "0 -4px 12px rgba(15,15,15,0.05)", pointerEvents: "auto" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 100 }}>
                            <button onClick={() => { setActiveApp('accueil'); setWindowOpen(true); try{window.location.hash='accueil'}catch(e){} }} style={{ width: 28, height: 28, borderRadius: 6, border: "none", background: "transparent", color: "#0b0b0b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 2 }}>
                              {/* Windows logo simplified (smaller) */}
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M3 5.5L11 4.2V11.5H3V5.5Z" fill="#0b0b0b" />
                                <path d="M13 4.2L21 5.5V11.5H13V4.2Z" fill="#0b0b0b" />
                                <path d="M3 12.9L11 12.1V20H3V12.9Z" fill="#0b0b0b" />
                                <path d="M13 12.1L21 12.9V20H13V12.1Z" fill="#0b0b0b" />
                              </svg>
                            </button>
                          </div>

                          {/* Center area: search + centered shortcuts (compact) */}
                          <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, justifyContent: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", background: "#f6f8fb", borderRadius: 16, padding: "4px 8px", boxShadow: "inset 0 1px 0 rgba(0,0,0,0.02)" }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 6 }}>
                                <path d="M21 21l-4.35-4.35" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="11" cy="11" r="6" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <input placeholder="Rechercher" style={{ border: "none", outline: "none", background: "transparent", fontSize: 12, color: "#0b0b0b", width: 160 }} />
                            </div>

                            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                              {[
                                { id: "projets", icon: "🗂️" },
                                { id: "apropos", icon: "👤" },
                                { id: "contact", icon: "✉️" },
                              ].map(i => (
                                <button key={i.id} onClick={() => { setActiveApp(i.id); setWindowOpen(true); try{window.location.hash=i.id}catch(e){} }} style={{ width: 28, height: 28, borderRadius: 6, border: "none", background: "transparent", color: "#0b0b0b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14 }}>{i.icon}</button>
                              ))}
                            </div>
                          </div>

                          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 120, justifyContent: "flex-end" }}>
                            <div style={{ fontSize: 12 }}>{activeApp ? ({"accueil":"Accueil","projets":"Projets","apropos":"À propos","contact":"Contact"}[activeApp]) : ""}</div>
                            <div style={{ width: 1, height: 16, background: "rgba(0,0,0,0.06)" }} />
                            <div style={{ fontSize: 12 }}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              height: 10,
              background: "linear-gradient(180deg, #0d0d12, #050507)",
              borderRadius: 6,
              boxShadow: "0 6px 10px rgba(0,0,0,0.7)",
            }}
          />

          <div
            style={{
              height: 280,
              borderRadius: "0 0 20px 20px",
              background: "linear-gradient(180deg, #0d0d11, #0a0a0d 60%, #060609)",
              boxShadow: "0 34px 90px rgba(0,0,0,0.75), inset 0 12px 22px rgba(255,255,255,0.05)",
              position: "relative",
              transformOrigin: "top",
              transform: "rotateX(65deg) translateZ(-6px)",
              marginTop: -18,
              transformStyle: "preserve-3d",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: -14,
                left: 0,
                width: "100%",
                height: 14,
                background: "linear-gradient(180deg, #07070c, #020203)",
                borderRadius: "0 0 20px 20px",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 10,
                borderRadius: 18,
                background:
                  "linear-gradient(150deg, rgba(255,255,255,0.05), transparent), radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.06), transparent 45%), radial-gradient(ellipse at 80% 35%, rgba(120,180,255,0.05), transparent 45%)",
                mixBlendMode: "screen",
                opacity: 0.55,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 22,
                left: "50%",
                transform: "translateX(-50%)",
                width: "88%",
                height: "calc(100% - 82px)",
                display: "grid",
                gridTemplateColumns: "repeat(14, 1fr)",
                gap: 6,
                padding: 12,
              }}
            >
              {Array.from({ length: 65 }).map((_, i) => {
                const isWide = [13, 27, 41, 53].includes(i);
                const isSpaceBar = i === 60;
                // Place the ON/OFF button at the top right (key 13)
                if (i === 13) {
                  const disabled = isAnimating || isZoomed;
                  // OFF: clearly muted gray (darker than pure white)
                  const bgOff = "linear-gradient(135deg, #d6d8db 60%, #c2c5c8 100%)";
                  // ON: bright white with a subtle cool highlight
                  const bgOn = "linear-gradient(135deg, #ffffff 60%, #f7fbff 100%)";
                  const boxOff = "0 4px 10px rgba(0,0,0,0.28)";
                  const boxOn = "0 8px 22px rgba(126,195,230,0.28)";
                  return (
                    <button
                      key="onoff"
                      ref={onoffRef}
                      onClick={handlePowerClick}
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
                        filter: "none",
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
                      boxShadow:
                        "0 2px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  />
                );
              })}
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 28,
                left: "50%",
                transform: "translateX(-50%)",
                width: 160,
                height: 92,
                borderRadius: 12,
                background: "linear-gradient(160deg, rgba(30,30,34,0.9), rgba(16,16,20,0.95))",
                boxShadow: "inset 0 3px 12px rgba(0,0,0,0.65), 0 3px 10px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.08), transparent)",
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "12%",
                  width: "78%",
                  height: 1,
                  background: "rgba(255,255,255,0.08)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.08), transparent 55%)",
                  opacity: 0.6,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
