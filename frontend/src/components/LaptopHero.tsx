"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LaptopHero() {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!screenRef.current || !laptopRef.current) return;

    gsap.fromTo(
      screenRef.current,
      { rotateX: -120 },
      { rotateX: -4, duration: 1.8, ease: "power3.out", delay: 0.6 }
    );

    gsap.fromTo(
      laptopRef.current,
      { rotateX: -18, rotateY: 18, scale: 0.85, opacity: 0 },
      { rotateX: -12, rotateY: -8, scale: 1, opacity: 1, duration: 1.4, ease: "power3.out" }
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  const tiltX = -3 + mousePosition.y * 3; // réduire l'inclinaison globale pour garder le clavier horizontal
  const tiltY = -6 + mousePosition.x * 14;
  const reflectionX = 50 + mousePosition.x * 16;
  const reflectionY = 28 + mousePosition.y * 10;
  const reflectionAlpha = 0.08 + Math.min(0.14, Math.abs(mousePosition.x) + Math.abs(mousePosition.y));

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
      onMouseMove={handleMouseMove}
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
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
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
              transform: "rotateX(-130deg)",
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

                <div style={{ textAlign: "center", zIndex: 1 }}>
                  <p style={{ letterSpacing: 2, textTransform: "uppercase", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                    Portfolio 2025
                  </p>
                  <h1 style={{ fontSize: 34, margin: "8px 0 6px", fontWeight: 700 }}>Bienvenue</h1>
                  <p style={{ opacity: 0.85, fontSize: 16 }}>Développeur Full Stack</p>
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
              transform: "rotateX(72deg) translateZ(-10px)",
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
