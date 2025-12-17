"use client";

import React, { useState } from "react";

export default function ContactPanel() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (e) {}
  };

  const contacts = [
    {
      id: "email",
      icon: "✉️",
      label: "Email",
      value: "votre.email@exemple.com",
      color: "#ef4444",
      link: "mailto:votre.email@exemple.com"
    },
    {
      id: "linkedin",
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/votre-profil",
      color: "#0077b5",
      link: "https://linkedin.com/in/votre-profil"
    },
    {
      id: "github",
      icon: "🐙",
      label: "GitHub",
      value: "github.com/votre-username",
      color: "#333",
      link: "https://github.com/votre-username"
    },
    {
      id: "phone",
      icon: "📱",
      label: "Téléphone",
      value: "+33 6 XX XX XX XX",
      color: "#10b981",
      link: "tel:+33600000000"
    }
  ];

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: 16,
      padding: "4px 0"
    }}>
      {/* Header */}
      <div style={{
        textAlign: "center",
        paddingBottom: 12,
        borderBottom: "2px solid rgba(99,102,241,0.1)"
      }}>
        <h3 style={{ 
          margin: 0, 
          fontSize: 18, 
          fontWeight: 800,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px"
        }}>
          Me Contacter
        </h3>
        <p style={{
          margin: "6px 0 0",
          fontSize: 12,
          color: "#64748b"
        }}>
          N'hésitez pas à me contacter pour toute opportunité ou collaboration
        </p>
      </div>

      {/* Carte de contact principale */}
      <div style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.05), rgba(139,92,246,0.05))",
        borderRadius: 12,
        padding: 16,
        border: "1px solid rgba(99,102,241,0.15)",
        textAlign: "center"
      }}>
        <div style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          margin: "0 auto 12px",
          boxShadow: "0 8px 24px rgba(99,102,241,0.3)"
        }}>
          👋
        </div>
        <h4 style={{
          margin: "0 0 4px",
          fontSize: 14,
          fontWeight: 700,
          color: "#1e293b"
        }}>
          Disponible pour des projets
        </h4>
        <p style={{
          margin: 0,
          fontSize: 11,
          color: "#64748b",
          lineHeight: 1.5
        }}>
          Je suis ouvert aux opportunités de stage, alternance et projets freelance
        </p>
      </div>

      {/* Liste des moyens de contact */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 10
      }}>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            {...contact}
            isCopied={copiedField === contact.id}
            onCopy={() => copyToClipboard(contact.value, contact.id)}
          />
        ))}
      </div>

      {/* Message de disponibilité */}
      <div style={{
        background: "rgba(16,185,129,0.08)",
        borderRadius: 10,
        padding: 12,
        border: "1px solid rgba(16,185,129,0.2)",
        display: "flex",
        alignItems: "center",
        gap: 10
      }}>
        <div style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#10b981",
          boxShadow: "0 0 8px rgba(16,185,129,0.6)",
          animation: "pulse 2s infinite"
        }} />
        <p style={{
          margin: 0,
          fontSize: 11,
          color: "#059669",
          fontWeight: 600
        }}>
          Actuellement disponible • Réponse sous 24h
        </p>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}

// Composant ContactCard
function ContactCard({
  id,
  icon,
  label,
  value,
  color,
  link,
  isCopied,
  onCopy
}: {
  id: string;
  icon: string;
  label: string;
  value: string;
  color: string;
  link: string;
  isCopied: boolean;
  onCopy: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        padding: 12,
        border: `2px solid ${isHovered ? color : 'rgba(0,0,0,0.06)'}`,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: isHovered 
          ? `0 8px 20px ${color}20` 
          : "0 2px 8px rgba(0,0,0,0.04)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        display: "flex",
        alignItems: "center",
        gap: 12
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icône */}
      <div style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: `${color}15`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        flexShrink: 0,
        border: `1px solid ${color}30`
      }}>
        {icon}
      </div>

      {/* Contenu */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h5 style={{
          margin: "0 0 2px",
          fontSize: 12,
          fontWeight: 700,
          color: "#1e293b"
        }}>
          {label}
        </h5>
        <p style={{
          margin: 0,
          fontSize: 10,
          color: "#64748b",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}>
          {value}
        </p>
      </div>

      {/* Boutons d'action */}
      <div style={{
        display: "flex",
        gap: 6,
        flexShrink: 0
      }}>
        {/* Bouton Copier */}
        <button
          onClick={onCopy}
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            border: "none",
            background: isCopied ? "#10b981" : `${color}15`,
            color: isCopied ? "white" : color,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            transition: "all 0.2s",
            boxShadow: isCopied ? "0 2px 8px rgba(16,185,129,0.3)" : "none"
          }}
          title="Copier"
        >
          {isCopied ? "✓" : "📋"}
        </button>

        {/* Bouton Ouvrir */}
        <button
          onClick={() => { try { window.open(link, '_blank') } catch (e) {} }}
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            border: "none",
            background: color,
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            transition: "all 0.2s",
            boxShadow: `0 2px 8px ${color}40`
          }}
          title="Ouvrir"
        >
          →
        </button>
      </div>
    </div>
  );
}
