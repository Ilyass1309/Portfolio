// components/laptop/WindowControls.tsx
"use client";

type Props = {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  title: string;
};

export default function WindowControls({ onClose, onMinimize, onMaximize, title }: Props) {
  return (
    <div style={{ height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px', background: 'linear-gradient(90deg,#2b5797,#1e3a78)', color: 'white' }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={onClose} aria-label="Fermer" style={{ width: 12, height: 12, borderRadius: 3, background: '#ff605c', border: 'none', padding: 0, cursor: 'pointer' }} />
        <button onClick={onMinimize} aria-label="Réduire" style={{ width: 12, height: 12, borderRadius: 3, background: '#ffbd2e', border: 'none', padding: 0, cursor: 'pointer' }} />
        <button onClick={onMaximize} aria-label="Agrandir" style={{ width: 12, height: 12, borderRadius: 3, background: '#27c93f', border: 'none', padding: 0, cursor: 'pointer' }} />
        <div style={{ marginLeft: 8, fontWeight: 700 }}>{title}</div>
      </div>
    </div>
  );
}
