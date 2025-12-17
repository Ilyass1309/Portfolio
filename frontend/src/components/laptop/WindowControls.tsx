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
    <div style={{ 
      height: 32, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '0 12px', 
      background: 'linear-gradient(180deg, #ffffff, #f0f0f0)', 
      color: '#000', 
      borderBottom: '1px solid #d4d4d4',
      userSelect: 'none'
    }}>
      {/* Left: Title with icon */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ 
          width: 16, 
          height: 16, 
          background: 'linear-gradient(135deg, #0078d4, #005a9e)', 
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 10,
          color: 'white',
          fontWeight: 700
        }}>
          {title[0]}
        </div>
        <div style={{ fontSize: 12, fontWeight: 400, color: '#1f1f1f' }}>{title}</div>
      </div>

      {/* Right: Windows buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        {/* Minimize */}
        <button 
          onClick={onMinimize} 
          aria-label="Réduire"
          style={{ 
            width: 46, 
            height: 32, 
            border: 'none', 
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s',
            color: '#1f1f1f'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <svg width="10" height="1" viewBox="0 0 10 1" fill="currentColor">
            <rect width="10" height="1" />
          </svg>
        </button>

        {/* Maximize/Restore */}
        <button 
          onClick={onMaximize} 
          aria-label="Agrandir"
          style={{ 
            width: 46, 
            height: 32, 
            border: 'none', 
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s',
            color: '#1f1f1f'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="0.5" y="0.5" width="9" height="9" />
          </svg>
        </button>

        {/* Close */}
        <button 
          onClick={onClose} 
          aria-label="Fermer"
          style={{ 
            width: 46, 
            height: 32, 
            border: 'none', 
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s, color 0.15s',
            color: '#1f1f1f'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e81123';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#1f1f1f';
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 0L10 10M10 0L0 10" />
          </svg>
        </button>
      </div>
    </div>
  );
}
