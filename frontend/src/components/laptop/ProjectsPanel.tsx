"use client";

import React from "react";

export default function ProjectsPanel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <h3 style={{ margin: "4px 0 8px", fontSize: 17, fontWeight: 700 }}>Projets</h3>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "stretch" }}>
        <div style={{ width: 200, background: "linear-gradient(180deg,#ffffff,#fbfdff)", borderRadius: 8, padding: 10, boxShadow: "0 10px 22px rgba(2,6,23,0.06)", display: "flex", flexDirection: "column", border: '1px solid rgba(2,6,23,0.03)' }}>
          <div style={{ height: 84, borderRadius: 6, backgroundImage: "linear-gradient(180deg, rgba(99,102,241,0.09), rgba(99,102,241,0.02)), url('/breezy/page-accueil.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <h4 style={{ margin: '8px 0 6px', fontSize: 14 }}>Breezy</h4>
          <div style={{ fontSize: 12, color: '#475569', flex: 1 }}>Messagerie sociale — profils, notifications et thèmes. UI/UX Next.js.</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <button onClick={() => { try { window.open('/projets/breezy', '_blank') } catch (e) {} }} style={{ background: '#0b1220', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>Voir</button>
            <button onClick={() => { try { window.open('/breezy', '_blank') } catch (e) {} }} style={{ background: 'transparent', border: '1px solid rgba(15,23,42,0.06)', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>Détails</button>
          </div>
        </div>

        <div style={{ width: 200, background: "linear-gradient(180deg,#ffffff,#fbfdff)", borderRadius: 8, padding: 10, boxShadow: "0 10px 22px rgba(2,6,23,0.06)", display: "flex", flexDirection: "column", border: '1px solid rgba(2,6,23,0.03)' }}>
          <div style={{ height: 84, borderRadius: 6, backgroundImage: "linear-gradient(180deg, rgba(16,185,129,0.06), rgba(16,185,129,0.02)), url('/easySave/preview.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <h4 style={{ margin: '8px 0 6px', fontSize: 14 }}>EasySave</h4>
          <div style={{ fontSize: 12, color: '#475569', flex: 1 }}>Sauvegarde et restauration — simple, sécurisé, cloud-friendly.</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <button onClick={() => { try { window.open('/projets/easysave', '_blank') } catch (e) {} }} style={{ background: '#0b1220', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>Voir</button>
            <button onClick={() => { try { window.open('/easysave', '_blank') } catch (e) {} }} style={{ background: 'transparent', border: '1px solid rgba(15,23,42,0.06)', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>Détails</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        <h4 style={{ margin: '6px 0 8px', fontSize: 15, fontWeight: 700 }}>Projets personnels</h4>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[
            { id: 'hematomes', title: "Site Hématomes", desc: "Actualités & ressources.", href: '/hematomes', accent: '#ef4444' },
            { id: 'bds', title: "BDS CESI", desc: "Site événementiel du BDS.", href: '/bds-cesi', accent: '#f59e0b' },
            { id: 'game-a', title: "Jeu A", desc: "Prototype Canvas/WebGL.", href: '/games/game-a', accent: '#10b981' },
            { id: 'game-b', title: "Jeu B", desc: "Mini-jeu multijoueur.", href: '/games/game-b', accent: '#6366f1' },
          ].map(p => (
            <div key={p.id} style={{ width: 160, background: '#ffffff', borderRadius: 8, padding: 8, boxShadow: '0 8px 20px rgba(2,6,23,0.05)', border: '1px solid rgba(2,6,23,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 64, borderRadius: 8, background: `linear-gradient(90deg, ${p.accent}22, ${p.accent}11)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a', fontWeight: 700 }}>{p.title}</div>
              <div style={{ marginTop: 8, fontSize: 12, color: '#475569', lineHeight: '1.2' }}>{p.desc}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <button onClick={() => { try { window.open(p.href, '_blank') } catch (e) {} }} style={{ background: '#0b1220', color: 'white', border: 'none', padding: '6px 8px', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>Voir</button>
                <button onClick={() => { try { window.open(p.href, '_blank') } catch (e) {} }} style={{ background: 'transparent', border: '1px solid rgba(15,23,42,0.06)', padding: '6px 8px', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>Détails</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
