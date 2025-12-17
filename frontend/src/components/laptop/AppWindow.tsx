"use client";

import React from "react";

type Props = {
  windowState: 'normal' | 'minimized' | 'maximized';
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function AppWindow({ windowState, onClose, onMinimize, onToggleMaximize, title, children }: Props) {
  const containerStyle: React.CSSProperties =
    windowState === 'maximized'
      ? { position: 'absolute', left: 0, top: 0, right: 0, bottom: 25, background: '#ffffff', color: '#111', borderRadius: 0, boxShadow: 'none', transform: 'none', overflow: 'hidden', zIndex: 2, borderBottom: '1px solid rgba(11,11,11,0.06)' }
      : { width: 440, height: 260, background: '#ffffff', color: '#111', borderRadius: 8, boxShadow: '0 18px 50px rgba(0,0,0,0.6)', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', overflow: 'hidden', zIndex: 2 };

  return (
    <div style={containerStyle}>
      <div style={{ height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px', background: 'linear-gradient(90deg,#2b5797,#1e3a78)', color: 'white' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={onClose} aria-label="Fermer" style={{ width: 12, height: 12, borderRadius: 3, background: '#ff605c', border: 'none', padding: 0, cursor: 'pointer' }} />
          <button onClick={onMinimize} aria-label="Réduire" style={{ width: 12, height: 12, borderRadius: 3, background: '#ffbd2e', border: 'none', padding: 0, cursor: 'pointer' }} />
          <button onClick={onToggleMaximize} aria-label="Agrandir" style={{ width: 12, height: 12, borderRadius: 3, background: '#27c93f', border: 'none', padding: 0, cursor: 'pointer' }} />
          <div style={{ marginLeft: 8, fontWeight: 700 }}>{title || 'Fenêtre'}</div>
        </div>
        <div />
      </div>
      <div style={{ padding: 14, height: 'calc(100% - 36px)', overflow: 'auto' }}>{children}</div>
    </div>
  );
}
