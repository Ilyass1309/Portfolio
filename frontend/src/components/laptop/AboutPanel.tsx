"use client";

import React, { useState, useEffect } from "react";

export default function AboutPanel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: 20,
      padding: "8px 0",
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateY(0)" : "translateY(10px)",
      transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    }}>
      <ProfileHeader />
      <BioSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <InterestsSection />
    </div>
  );
}

// ==================== PROFILE HEADER ====================
function ProfileHeader() {
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 16,
      paddingBottom: 16,
      borderBottom: "1px solid rgba(15,23,42,0.08)"
    }}>
      <div style={{
        width: 72,
        height: 72,
        borderRadius: 12,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 32,
        fontWeight: 700,
        color: "white",
        flexShrink: 0
      }}>
        I
      </div>
      
      <div>
        <h2 style={{
          margin: 0,
          fontSize: 22,
          fontWeight: 700,
          color: "#0f172a"
        }}>
          Ilyass Tran
        </h2>
        
        <p style={{
          margin: "6px 0 0",
          fontSize: 13,
          color: "#64748b",
          fontWeight: 500
        }}>
          Apprenti Analyste & Développeur — Toulouse, France
        </p>

        <div style={{
          marginTop: 10,
          fontSize: 11,
          fontWeight: 600,
          color: "#059669"
        }}>
          Recherche de stage pour l'été 2026 à l'étranger
        </div>
      </div>
    </div>
  );
}

// ==================== BIO SECTION ====================
function BioSection() {
  return (
    <div style={{
      background: "rgba(248,250,252,0.8)",
      borderRadius: 10,
      padding: 16,
      border: "1px solid rgba(15,23,42,0.06)"
    }}>
      <h3 style={{
        margin: "0 0 10px",
        fontSize: 14,
        fontWeight: 700,
        color: "#0f172a"
      }}>
        À propos
      </h3>
      <p style={{
        margin: 0,
        fontSize: 12,
        color: "#475569",
        lineHeight: 1.7
      }}>
        Apprenti analyste et développeur basé à Toulouse, je travaille actuellement
        dans le secteur automobile en parallèle de mes études d’ingénieur.
        Mon profil combine une formation solide en mathématiques et informatique
        avec une approche pragmatique du développement logiciel.
        Je m’intéresse aux projets importants, aux défis techniques
        et à la découverte de différents domaines de l’informatique.
        J’aime expérimenter, apprendre en continu
        et développer de nouvelles compétences au fil des projets.
      </p>
    </div>
  );
}

// ==================== SKILLS SECTION ====================
function SkillsSection() {
  const skills = [
    { category: "Langages", items: ["C", "C++", "C#", "Java", "JavaScript"], color: "#3b82f6" },
    { category: "Web", items: ["React", "Next.js", "AngularJS", "REST APIs"], color: "#10b981" },
    { category: "Backend & Data", items: ["Node.js", "JAX-RS", "JSON / XML", "SQL"], color: "#f59e0b" },
    { category: "Méthodologies", items: ["Agile / Scrum", "Clean Code", "Tests", "Conception logicielle"], color: "#8b5cf6" }
  ];

  return (
    <div>
      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>
        Compétences techniques
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {skills.map(skill => (
          <div key={skill.category} style={{
            background: "white",
            borderRadius: 8,
            padding: 12,
            border: "1px solid rgba(15,23,42,0.06)"
          }}>
            <h4 style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 700 }}>
              {skill.category}
            </h4>
            <ul style={{ margin: 0, paddingLeft: 14, fontSize: 11, color: "#64748b" }}>
              {skill.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== EXPERIENCE SECTION ====================
function ExperienceSection() {
  const experiences = [
    {
    period: "09/2025 – Présent",
    title: "Apprenti Analyste & Développeur",
    company: "AUMOVIO",
    description:
        "Poursuite de la migration d’une application interne à grande échelle, utilisée par plus de 1 000 utilisateurs réguliers."
    },
    {
      period: "2024 – 08/2025",
      title: "Apprenti Analyste & Développeur",
      company: "Continental Automotive",
      description: "Démarrage et contribution active à la migration d’une application interne, avec des enjeux de continuité de service et de fiabilité."
    },
    {
      period: "2021",
      title: "Stagiaire Recherche & Développement",
      company: "IRIT – Institut de Recherche en Informatique de Toulouse",
      description: "Développement d’un outil d’analyse par eye-tracking pour l’évaluation de claviers."
    }
  ];

  return (
    <div>
      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>
        Expérience professionnelle
      </h3>
      {experiences.map(exp => (
        <div key={exp.period} style={{ marginBottom: 12 }}>
          <strong style={{ fontSize: 12 }}>{exp.title}</strong>
          <div style={{ fontSize: 11, color: "#6366f1" }}>{exp.company}</div>
          <div style={{ fontSize: 10, color: "#94a3b8" }}>{exp.period}</div>
          <p style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
}

// ==================== EDUCATION SECTION ====================
function EducationSection() {
  return (
    <div>
      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>
        Formation
      </h3>

      <ul style={{ fontSize: 11, color: "#64748b", paddingLeft: 16 }}>
        <li>
          <strong>CESI Toulouse</strong> — Diplôme d’ingénieur informatique (2024 – 2027)
        </li>
        <li>
          <strong>Université Toulouse III – Paul Sabatier</strong> — Double diplôme Mathématiques & Informatique (2021 – 2023)
        </li>
      </ul>
    </div>
  );
}

// ==================== INTERESTS SECTION ====================
function InterestsSection() {
  return (
    <div>
      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>
        Centres d’intérêt
      </h3>
      <p style={{ fontSize: 11, color: "#64748b" }}>
        Volleyball, Jeux vidéos et Lecture.
      </p>
    </div>
  );
}
