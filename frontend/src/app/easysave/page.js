"use client";

import { useState } from "react";

export default function EasySavePage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="flex flex-col items-center min-h-screen w-full pt-24 px-4 relative page-enter">
      {/* Title */}
      <h1
        className="font-extrabold text-center mb-2 flex justify-center items-center dtgetai-title page-enter-delay-1"
        style={{
          fontSize: "clamp(48px, 8vw, 110px)",
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          margin: "10px auto 60px auto",
          letterSpacing: "clamp(-1px, -0.1vw, -2px)",
          color: "hsla(172, 95%, 18%, 1)",
          lineHeight: "0.9",
        }}
      >
        EasySave
      </h1>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-2xl page-enter-delay-1">
        {/* Timeline */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-1" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Timeline</div>
          <div className="rounded-full px-4 py-2 text-neutral-700" style={{ color: "hsla(172, 95%, 18%, 1)" }}>2024</div>
        </div>
        {/* Team */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-1" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Team</div>
          <div className="flex gap-2">
            <a href="https://github.com/paulin-dev" target="_blank" rel="noopener noreferrer" className="relative group">
              <span
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                style={{
                  background: "hsla(172, 95%, 18%, 1)",
                  minWidth: "120px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                Paulin Renault
              </span>
              <img src="https://github.com/paulin-dev.png" alt="Paulin Renault" width={32} height={32} className="rounded-full border-2 border-white" />
            </a>
            <a href="https://github.com/Ilyass1309" target="_blank" rel="noopener noreferrer" className="relative group">
              <span
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                style={{
                  background: "hsla(172, 95%, 18%, 1)",
                  minWidth: "120px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                Ilyass Tran
              </span>
              <img src="https://github.com/Ilyass1309.png" alt="Ilyass Tran" width={32} height={32} className="rounded-full border-2 border-white" />
            </a>
            <a href="https://github.com/UltimateAsh" target="_blank" rel="noopener noreferrer" className="relative group">
              <span
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                style={{
                  background: "hsla(172, 95%, 18%, 1)",
                  minWidth: "120px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                Ashraf
              </span>
              <img src="https://github.com/UltimateAsh.png" alt="Ashraf" width={32} height={32} className="rounded-full border-2 border-white" />
            </a>
            <a href="https://github.com/adam31-7" target="_blank" rel="noopener noreferrer" className="relative group">
              <span
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                style={{
                  background: "hsla(172, 95%, 18%, 1)",
                  minWidth: "120px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                Adam
              </span>
              <img src="https://github.com/adam31-7.png" alt="Adam" width={32} height={32} className="rounded-full border-2 border-white" />
            </a>
            <a href="https://github.com/valentinsiadoux" target="_blank" rel="noopener noreferrer" className="relative group">
              <span
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                style={{
                  background: "hsla(172, 95%, 18%, 1)",
                  minWidth: "120px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                Valentin Siadoux
              </span>
              <img src="https://github.com/valentinsiadoux.png" alt="Valentin Siadoux" width={32} height={32} className="rounded-full border-2 border-white" />
            </a>
          </div>
        </div>
        {/* Role */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-1" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Role</div>
          <div className="rounded-full px-4 py-2 text-neutral-700 text-center" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Software Engineer, UI Designer
            <br />
          </div>
        </div>
      </div>

      {/* Brief description */}
      <div className="w-full flex justify-center items-center my-8 page-enter-delay-1">
        <p className="text-center text-xl max-w-4xl" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
          Application de sauvegarde complète et différentielle développée en <strong>C# WPF</strong> pour ProSoft, offrant une interface ergonomique et des fonctionnalités avancées de gestion de données.
        </p>
      </div>

      {/* Main interface preview */}
      <div className="w-full flex justify-center items-center my-16 page-enter-delay-2">
        <div
          className="bg-neutral-100 rounded-2xl shadow-lg flex justify-center items-center"
          style={{
            width: "1200px",
            height: "650px",
            minHeight: "400px",
            overflow: "hidden",
          }}
        >
          <img
            src="/easySave/EasySave-white.png"
            alt="EasySave interface preview"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Overview section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-2">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Overview</h2>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            EasySave est un projet scolaire développé en équipe de 4 personnes pour ProSoft, visant à créer un logiciel de sauvegarde de fichiers sous Windows. L'application propose une solution complète avec interface WPF ergonomique, gestion des sauvegardes différentielles et fonctionnalités avancées de journalisation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Objectif</h3>
              <p style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                Développer une application de sauvegarde fiable et simple d'utilisation avec interface graphique moderne.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Approche</h3>
              <p style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                Développement itératif en 3 versions avec méthode Agile et livraisons progressives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Fonctionnalités principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M9 17H7A5 5 0 017 7h2m6 0v1a3 3 0 11-6 0V7a5 5 0 1110 0v1a2 2 0 01-2 2H9"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Sauvegarde complète</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Copie intégrale de tous les fichiers source vers la destination
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Sauvegarde différentielle</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Copie uniquement des fichiers modifiés depuis la dernière sauvegarde
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke="currentColor" strokeWidth="1.5" d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Gestion des jobs</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Création, modification et exécution de tâches de sauvegarde multiples
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10V9a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Interface WPF</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Application desktop ergonomique avec barres de progression et logs
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Journalisation</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Logs détaillés et journalisation complète des opérations
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Multi-jobs</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Exécution simultanée de plusieurs tâches configurables
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Development timeline */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Évolution par versions
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">V1</span>
                <h3 className="text-xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Moteur de sauvegarde</h3>
              </div>
              <p style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Application console avec fonctionnalités de base : sauvegarde complète et différentielle
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="flex items-center mb-3">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">V2</span>
                <h3 className="text-xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Interface graphique</h3>
              </div>
              <p style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Ajout de l'interface WPF avec formulaires de configuration et feedback utilisateur
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="flex items-center mb-3">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">V3</span>
                <h3 className="text-xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Version finale</h3>
              </div>
              <p style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Enrichissement avec logs détaillés, gestion avancée des jobs et UX optimisée
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture & Technologies */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Architecture & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['C#', '.NET Framework', 'WPF', 'MVVM'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-blue-100" style={{ color: "hsla(172, 95%, 18%, 1)", borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Outils</h3>
              <div className="flex flex-wrap gap-2">
                {['Visual Studio', 'Git', 'Trello/Jira'].map((tool) => (
                  <span key={tool} className="px-3 py-1 text-sm rounded-full bg-green-100" style={{ color: "hsla(172, 95%, 18%, 1)", borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Architecture</h3>
              <ul className="space-y-2" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                <li>• Séparation logique métier / interface</li>
                <li>• Pattern MVVM inspiré</li>
                <li>• Modularité et maintenabilité</li>
                <li>• Gestion d'erreurs robuste</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* My contributions */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Mes contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Développement</h3>
              <ul className="space-y-2" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                <li>• Implémentation sauvegarde différentielle</li>
                <li>• Développement interface WPF</li>
                <li>• Optimisation des performances</li>
                <li>• Tests et validation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Documentation</h3>
              <ul className="space-y-2" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                <li>• Documentation technique</li>
                <li>• Guide utilisateur</li>
                <li>• Architecture système</li>
                <li>• Participation aux 3 versions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Défis & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Performance</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Algorithmes optimisés pour copies rapides et comparaison efficace</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Différentiel</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Comparaison intelligente par dates et tailles de fichiers</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>UX ergonomique</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Interface WPF intuitive avec feedback temps réel</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Organisation</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Méthode Agile avec user stories et itérations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Interface & Démonstrations
          </h2>
          <div className="grid grid-cols-1 gap-12 max-w-7xl w-full">
            {/* GIFs one below the other */}
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center">
                <img src="/easySave/backup.gif" alt="Backup in action" style={{ width: "100%", maxWidth: "1400px", borderRadius: "32px" }} />
                <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Sauvegarde en action</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/easySave/create-job.gif" alt="Create job demo" style={{ width: "100%", maxWidth: "1400px", borderRadius: "32px" }} />
                <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Création d'un job de sauvegarde</span>
              </div>
            </div>
            {/* Images side by side */}
            <div className="flex flex-row items-center justify-center gap-12">
              <div className="flex flex-col items-center">
                <img src="/easySave/settings1.png" alt="Settings interface" style={{ width: "100%", maxWidth: "900px", borderRadius: "32px" }} />
                <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Interface de paramétrage</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/easySave/settings2.png" alt="Advanced settings" style={{ width: "100%", maxWidth: "900px", borderRadius: "32px" }} />
                <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Paramètres avancés</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results & Future improvements */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                Résultats
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                <ul className="space-y-3" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Application fonctionnelle avec interface utilisateur
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Gestion multi-sauvegardes efficace et robuste
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    3 livraisons itératives réussies
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Expérience technique et organisationnelle enrichissante
                  </li>
                </ul>
              </div>
            </div>

            {/* Future improvements */}
            <div>
              <h2 className="text-3xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                Améliorations futures
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Sauvegarde incrémentale</h3>
                  <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Encore plus fine que la différentielle</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Intégration cloud</h3>
                  <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>OneDrive, Google Drive, AWS S3</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Planifications</h3>
                  <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Exécution automatique programmée</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>UI moderne</h3>
                  <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Interface Material Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="w-full flex flex-col items-center my-8">
        <div className="max-w-2xl w-full flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold mb-4 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Liens du projet
          </h2>
          <div className="flex flex-row gap-6">
            <a
              href="https://github.com/adam31-7/EasySave"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold text-white shadow transition hover:scale-105"
              style={{
                background: "hsla(172, 95%, 18%, 1)",
                fontSize: "18px",
              }}
            >
              View on GitHub
            </a>
            <button
              className="px-6 py-3 rounded-lg font-semibold shadow transition hover:scale-105 border-2"
              style={{
                background: "transparent",
                color: "hsla(172, 95%, 18%, 1)",
                borderColor: "hsla(172, 95%, 18%, 1)",
                fontSize: "18px",
              }}
              onClick={() => alert('Documentation technique disponible sur demande!')}
            >
              Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Next project button */}
      <div className="w-full flex justify-center my-12">
        <button
          onClick={() => setModalOpen(true)}
          className="font-bold text-8xl transition-all duration-300 hover:border-white hover:border-2 hover:rounded-xl relative group"
          style={{
            background: "none",
            border: "none",
            color: "hsla(172, 95%, 18%, 1)",
            cursor: "pointer",
            padding: 0,
            outline: "none",
          }}
        >
          <span
            className="block transition-transform duration-300 group-hover:-translate-y-1"
            style={{
              fontFamily: "inherit",
            }}
          >
            IA.
          </span>
        </button>
      </div>
      <NotAvailableModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

// Ajout d'une page d'indisponibilité temporaire pour la page IA
function NotAvailableModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.7)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fff',color:'#0d5952',padding:'2rem 2.5rem',borderRadius:'1.5rem',boxShadow:'0 4px 32px #0002',maxWidth:400,textAlign:'center',position:'relative'}}>
        <h2 style={{fontSize:'2rem',fontWeight:700,marginBottom:'1rem'}}>Bientôt disponible !</h2>
        <p style={{marginBottom:'1.5rem'}}>La page IA n'est pas encore terminée.<br/>Revenez plus tard pour découvrir ce projet.</p>
        <button onClick={onClose} style={{background:'#0d5952',color:'#fff',border:'none',borderRadius:'0.5rem',padding:'0.7rem 1.5rem',fontWeight:600,cursor:'pointer'}}>Fermer</button>
      </div>
    </div>
  );
}
