// components/laptop/Taskbar.tsx
"use client";

type Props = {
  activeApp: string | null;
  onOpenApp: (id: string) => void;
};

export default function Taskbar({ activeApp, onOpenApp }: Props) {
  const appNames = { accueil: "Accueil", projets: "Projets", apropos: "À propos", contact: "Contact" };
  const shortcuts = [
    { id: "projets", icon: "🗂️" },
    { id: "apropos", icon: "👤" },
    { id: "contact", icon: "✉️" },
  ];

  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 25, background: "#eef2f6", color: "#0b0b0b", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 12px", boxShadow: "0 -6px 18px rgba(6,10,15,0.06)", borderTop: "1px solid rgba(11,11,11,0.06)" }}>
      {/* Left: Windows button */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: 120 }}>
        <button onClick={() => onOpenApp('accueil')} style={{ width: 28, height: 28, borderRadius: 6, border: "none", background: "transparent", color: "#0b0b0b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M3 5.5L11 4.2V11.5H3V5.5Z" fill="#0b0b0b" />
            <path d="M13 4.2L21 5.5V11.5H13V4.2Z" fill="#0b0b0b" />
            <path d="M3 12.9L11 12.1V20H3V12.9Z" fill="#0b0b0b" />
            <path d="M13 12.1L21 12.9V20H13V12.1Z" fill="#0b0b0b" />
          </svg>
        </button>
      </div>

      {/* Center: Search + shortcuts */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", background: "#f6f8fb", borderRadius: 16, padding: "4px 8px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
            <path d="M21 21l-4.35-4.35" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
            <circle cx="11" cy="11" r="6" stroke="#4b5563" strokeWidth="2" />
          </svg>
          <input placeholder="Rechercher" style={{ border: "none", outline: "none", background: "transparent", fontSize: 12, width: 160 }} />
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {shortcuts.map(s => (
            <button key={s.id} onClick={() => onOpenApp(s.id)} style={{ width: 28, height: 28, borderRadius: 6, border: "none", background: "transparent", cursor: "pointer", fontSize: 14 }}>{s.icon}</button>
          ))}
        </div>
      </div>

      {/* Right: App name + time */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: 120, justifyContent: "flex-end" }}>
        <div style={{ fontSize: 12 }}>{activeApp ? appNames[activeApp as keyof typeof appNames] : ""}</div>
        <div style={{ width: 1, height: 16, background: "rgba(0,0,0,0.06)" }} />
        <div style={{ fontSize: 12 }}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    </div>
  );
}
