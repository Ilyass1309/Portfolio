"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LaptopHero() {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /* ───────── ÉTAT INITIAL : LAPTOP FERMÉ ───────── */
  useEffect(() => {
    if (!screenRef.current || !laptopRef.current) return;

    gsap.set(screenRef.current, {
      rotateX: -90, // écran fermé
    });

    gsap.set(laptopRef.current, {
      rotateX: 70, // vue de haut
      rotateY: -10,
      scale: 0.75,
      y: 120,
      opacity: 1,
    });
  }, []);

  /* ───────── OUVERTURE AU CLIC ───────── */
  useEffect(() => {
    if (!isOpened || !screenRef.current || !laptopRef.current) return;

    const tl = gsap.timeline();

    // Redressement du laptop (caméra devient frontale)
    tl.to(laptopRef.current, {
      rotateX: -15,
      rotateY: -10,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Ouverture de l’écran
    tl.to(
      screenRef.current,
      {
        rotateX: -5,
        duration: 1.4,
        ease: "power3.out",
      },
      "-=0.8"
    );
  }, [isOpened]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isOpened) return; // pas d'effet souris tant que fermé

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        overflow: "hidden",
        cursor: isOpened ? "default" : "pointer",
      }}
      onClick={() => !isOpened && setIsOpened(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <div style={{ perspective: "2000px" }}>
        <div
          ref={laptopRef}
          style={{
            width: 600,
            transform: isOpened
              ? `rotateX(${-15 + mousePosition.y * 10}deg) rotateY(${
                  -10 + mousePosition.x * 15
                }deg)`
              : undefined,
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* ───────── ÉCRAN ───────── */}
          <div
            ref={screenRef}
            style={{
              position: "relative",
              height: 380,
              borderRadius: "22px 22px 0 0",
              background: "linear-gradient(180deg, #1a1a1a, #0a0a0a)",
              border: "3px solid #2a2a2a",
              transformOrigin: "bottom",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              transformStyle: "preserve-3d",
              marginBottom: -6,
            }}
          >
            {/* Épaisseur écran */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, #0c0c0c, #1a1a1a)",
                transform: "translateZ(-8px)",
                borderRadius: "22px 22px 0 0",
              }}
            />

            {/* Bezel + contenu */}
            <div
              style={{
                position: "absolute",
                inset: 16,
                borderRadius: 14,
                background: "#000",
                overflow: "hidden",
                transform: "translateZ(10px)",
              }}
            >
              {/* Reflet */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "30%",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)",
                  pointerEvents: "none",
                }}
              />

              {/* Contenu écran */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #1e3a8a, #312e81, #1e293b)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontFamily: "system-ui",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h1 style={{ fontSize: 32, marginBottom: 8 }}>
                    Bienvenue
                  </h1>
                  <p style={{ opacity: 0.8 }}>
                    Développeur Full Stack
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ───────── CHARNIÈRE ───────── */}
          <div
            style={{
              height: 8,
              background: "linear-gradient(180deg, #111, #000)",
              borderRadius: 4,
              boxShadow: "0 4px 8px rgba(0,0,0,0.6)",
            }}
          />

          {/* ───────── BASE / CLAVIER ───────── */}
          <div
            style={{
              height: isOpened ? 280 : 10, // 👈 fermé tant que pas cliqué
              borderRadius: "0 0 20px 20px",
              background:
                "linear-gradient(180deg, #1a1a1a, #0f0f0f)",
              boxShadow:
                "0 30px 90px rgba(0,0,0,0.7), inset 0 10px 20px rgba(255,255,255,0.04)",
              position: "relative",
              transformOrigin: "top",
              transform: "rotateX(75deg) translateZ(-10px)",
              transformStyle: "preserve-3d",
              transition: "height 0.8s ease-in-out",
              overflow: "hidden",
            }}
          >
            {/* Épaisseur avant */}
            <div
              style={{
                position: "absolute",
                bottom: -12,
                left: 0,
                width: "100%",
                height: 12,
                background: "linear-gradient(180deg, #0a0a0a, #000)",
                borderRadius: "0 0 20px 20px",
              }}
            />

            {/* Surface clavier */}
            {isOpened && (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "85%",
                    height: "calc(100% - 70px)",
                    display: "grid",
                    gridTemplateColumns: "repeat(10, 1fr)",
                    gap: 6,
                    padding: 12,
                  }}
                >
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        background:
                          "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
                        borderRadius: 4,
                        height: 24,
                        gridColumn: [5, 12, 18, 25].includes(i)
                          ? "span 2"
                          : "auto",
                        boxShadow:
                          "0 2px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                      }}
                    />
                  ))}
                </div>

                {/* Trackpad */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 26,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 120,
                    height: 80,
                    borderRadius: 8,
                    background: "rgba(40,40,40,0.8)",
                    boxShadow:
                      "inset 0 2px 8px rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10%",
                      width: "80%",
                      height: 1,
                      background: "rgba(255,255,255,0.05)",
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
