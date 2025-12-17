"use client";

import React from "react";

type Props = {
  onOpen: (id: string) => void;
};

export default function DesktopIcons({ onOpen }: Props) {
  const apps = [
    { id: "accueil", label: "Accueil", icon: "🏠" },
    { id: "projets", label: "Projets", icon: "🗂️" },
    { id: "apropos", label: "À propos", icon: "👤" },
    { id: "contact", label: "Contact", icon: "✉️" },
    { id: "cv", label: "CV", icon: "📄" },
  ];

  return (
    <div style={{ position: "absolute", top: 20, left: 12, display: "grid", gap: 12 }}>
      {apps.map((app) => (
        <button
          key={app.id}
          onClick={() => onOpen(app.id)}
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
  );
}
