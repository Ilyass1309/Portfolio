"use client";

import React, { useState } from "react";

type TabType = "scolaires" | "personnels";

export default function ProjectsPanel() {
  const [activeTab, setActiveTab] = useState<TabType>("scolaires");

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: 16,
      padding: "4px 0"
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", paddingBottom: 8 }}>
        <h3 style={{ 
          margin: 0, 
          fontSize: 18, 
          fontWeight: 800,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px"
        }}>
          Projets
        </h3>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex",
        gap: 8,
        background: "rgba(241,245,249,0.6)",
        padding: 4,
        borderRadius: 10,
        border: "1px solid rgba(148,163,184,0.15)"
      }}>
        <TabButton
          active={activeTab === "scolaires"}
          label="Projets scolaires"
          count={2}
          onClick={() => setActiveTab("scolaires")}
          gradient="linear-gradient(135deg, #6366f1, #8b5cf6)"
          accent="rgba(99,102,241,0.1)"
        />
        <TabButton
          active={activeTab === "personnels"}
          label="Projets personnels"
          count={4}
          onClick={() => setActiveTab("personnels")}
          gradient="linear-gradient(135deg, #ec4899, #f43f5e)"
          accent="rgba(236,72,153,0.1)"
        />
      </div>

      {/* Content */}
      <div style={{ animation: "fadeIn 0.4s ease-out" }}>
        {activeTab === "scolaires" && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 14
          }}>
            <ProjectCard
              title="Breezy"
              description="Messagerie sociale moderne avec profils, notifications et personnalisation."
              technos="React · Node.js · WebSocket"
              image="/breezy/page-accueil.png"
              gradient="linear-gradient(135deg, #6366f1, #8b5cf6)"
              accentColor="rgba(99,102,241,0.12)"
              href="/projets/breezy"
              badge="Featured"
            />

            <ProjectCard
              title="EasySave"
              description="Solution de sauvegarde et restauration sécurisée avec support cloud."
              technos="C# · .NET · Architecture logicielle"
              image="/easySave/EasySave-black.png"
              gradient="linear-gradient(135deg, #10b981, #059669)"
              accentColor="rgba(16,185,129,0.12)"
              href="/projets/easysave"
            />
          </div>
        )}

        {activeTab === "personnels" && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 10
          }}>
            <MiniProjectCard
              title="Site Hématomes"
              desc="Site d’information et de ressources médicales."
              technos="Next.js · SEO"
              href="/hematomes"
              accent="#ef4444"
            />
            <MiniProjectCard
              title="BDS CESI"
              desc="Site événementiel et vitrine associative."
              technos="React · UI Design"
              href="/bds-cesi"
              accent="#f59e0b"
            />
            <MiniProjectCard
              title="Jeu A"
              desc="Prototype de jeu expérimental."
              technos="Canvas · JavaScript"
              href="/games/game-a"
              accent="#10b981"
            />
            <MiniProjectCard
              title="Jeu B"
              desc="Mini-jeu multijoueur."
              technos="WebSocket · Frontend"
              href="/games/game-b"
              accent="#6366f1"
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ==================== COMPONENTS ==================== */

function TabButton({ active, label, count, onClick, gradient, accent }: any) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "8px 16px",
        border: "none",
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        background: active ? gradient : "transparent",
        color: active ? "white" : "#64748b",
        boxShadow: active ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
      }}
    >
      {label}
      <span style={{
        marginLeft: 6,
        fontSize: 10,
        background: active ? "rgba(255,255,255,0.2)" : accent,
        padding: "2px 6px",
        borderRadius: 4
      }}>
        {count}
      </span>
    </button>
  );
}

function ProjectCard({ title, description, technos, image, gradient, accentColor, href, badge }: any) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: 12,
        padding: 12,
        border: `1px solid ${accentColor}`,
        boxShadow: hover ? "0 12px 28px rgba(0,0,0,0.12)" : "0 4px 12px rgba(0,0,0,0.06)",
        transform: hover ? "translateY(-4px)" : "none",
        transition: "all 0.25s ease"
      }}
    >
      {badge && (
        <div style={{
          position: "absolute",
          top: 8,
          right: 8,
          background: gradient,
          color: "white",
          fontSize: 9,
          fontWeight: 700,
          padding: "3px 8px",
          borderRadius: 6
        }}>
          {badge}
        </div>
      )}

      <div style={{
        height: 100,
        borderRadius: 10,
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: 10
      }} />

      <h4 style={{ margin: "0 0 4px", fontSize: 15 }}>{title}</h4>
      <p style={{ fontSize: 11, color: "#64748b", marginBottom: 6 }}>{description}</p>
      <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 10 }}>
        <strong>Technos :</strong> {technos}
      </p>

      <button
        onClick={() => window.open(href, "_blank")}
        style={{
          width: "100%",
          background: gradient,
          color: "white",
          border: "none",
          padding: "8px",
          borderRadius: 8,
          fontSize: 11,
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        Voir le projet →
      </button>
    </div>
  );
}

function MiniProjectCard({ title, desc, technos, accent, href }: any) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff",
        borderRadius: 10,
        padding: 10,
        border: `1px solid ${accent}20`,
        boxShadow: hover ? `0 8px 20px ${accent}20` : "0 2px 10px rgba(0,0,0,0.04)",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "all 0.25s ease"
      }}
    >
      <h5 style={{ margin: "0 0 4px", fontSize: 13 }}>{title}</h5>
      <p style={{ fontSize: 10, color: "#64748b", marginBottom: 4 }}>{desc}</p>
      <p style={{ fontSize: 9, color: "#94a3b8", marginBottom: 8 }}>
        <strong>Technos :</strong> {technos}
      </p>

      <button
        onClick={() => window.open(href, "_blank")}
        style={{
          width: "100%",
          background: accent,
          color: "white",
          border: "none",
          padding: "6px",
          borderRadius: 6,
          fontSize: 10,
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        Explorer →
      </button>
    </div>
  );
}
