"use client"

import "../../../public/fonts/gastroe.css";

export default function BreezyPage() {
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
        Breezy
      </h1>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-2xl page-enter-delay-1">
        {/* Timeline */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-1" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Timeline</div>
          <div className="rounded-full px-4 py-2 text-neutral-700" style={{ color: "hsla(172, 95%, 18%, 1)" }}>2025</div>
        </div>
        {/* Team */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-1" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Team</div>
          <div className="flex gap-2">
            <a href="https://github.com/TheoCvg" target="_blank" rel="noopener noreferrer" className="relative group">
              <span
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                style={{
                  background: "hsla(172, 95%, 18%, 1)",
                  minWidth: "120px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                Théo Cavagne
              </span>
              <img src="https://github.com/TheoCvg.png" alt="Théo Cavagne" width={32} height={32} className="rounded-full border-2 border-white" />
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
            <a href="https://github.com/IsAy15" target="_blank" rel="noopener noreferrer" className="relative group">
              <span
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                style={{
                  background: "hsla(172, 95%, 18%, 1)",
                  minWidth: "120px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                Adrien Molina
              </span>
              <img src="https://github.com/IsAy15.png" alt="Adrien Molina" width={32} height={32} className="rounded-full border-2 border-white" />
            </a>
            <a href="https://github.com/JulesBESSON12340" target="_blank" rel="noopener noreferrer" className="relative group">
              <span
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                style={{
                  background: "hsla(172, 95%, 18%, 1)",
                  minWidth: "120px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                Jules BESSON
              </span>
              <img src="https://github.com/JulesBESSON12340.png" alt="Jules Besson" width={32} height={32} className="rounded-full border-2 border-white" />
            </a>
            <a href="https://github.com/Guillaume-Finotto" target="_blank" rel="noopener noreferrer" className="relative group">
              <span
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                style={{
                  background: "hsla(172, 95%, 18%, 1)",
                  minWidth: "120px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                Guillaume Finotto
              </span>
              <img src="https://github.com/Guillaume-Finotto.png" alt="Guillaume Finotto" width={32} height={32} className="rounded-full border-2 border-white" />
            </a>
          </div>
        </div>
        {/* Role */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-1" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Role</div>
          <div className="rounded-full px-4 py-2 text-neutral-700 text-center" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Full-Stack Developer, UI/UX Designer
            <br />
          </div>
        </div>
      </div>

      {/* Brief description */}
      <div className="w-full flex justify-center items-center my-8 page-enter-delay-1">
        <p className="text-center text-xl max-w-4xl" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
          Un réseau social léger et réactif, inspiré de Twitter/X, permettant aux utilisateurs de partager des messages courts appelés <strong>Breezes</strong>.
        </p>
      </div>

      {/* Main interface preview */}
      <div className="w-full flex justify-center items-center my-16 page-enter-delay-2">
        <div
          className="bg-neutral-100 rounded-2xl shadow-lg flex justify-center items-center border-2 border-dashed"
          style={{
            width: "1200px",
            height: "650px",
            minHeight: "400px",
            overflow: "hidden",
            borderColor: "hsla(172, 95%, 18%, 0.3)",
          }}
        >
          <div className="text-center" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-2xl font-semibold mb-2">Interface Breezy</h3>
            <p className="text-lg">Screenshots & démo à venir</p>
          </div>
        </div>
      </div>

      {/* Overview section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-2">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Overview</h2>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Breezy est un projet de réseau social développé en équipe de cinq personnes, mettant l'accent sur une architecture microservices conteneurisée et un déploiement cloud avec Docker et AWS EC2. L'application offre des fonctionnalités sociales essentielles dans une interface moderne et responsive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "hsla(172, 95%, 18%, 1)" }}>🎯 Objectifs</h3>
              <p style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                Créer une plateforme sociale légère et performante avec une architecture moderne et évolutive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "hsla(172, 95%, 18%, 1)" }}>🚀 Déploiement</h3>
              <p style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                Application entièrement conteneurisée et déployée sur AWS EC2 avec Docker Compose.
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
              <div className="text-3xl mb-3">👤</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Comptes utilisateurs</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Création et connexion sécurisée avec JWT et cookies HttpOnly
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Publications</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Messages courts (Breezes), système de tags (#), ajout d'images
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Interactions</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Likes, commentaires (Breaths), système d'abonnements
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Messagerie privée</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Conversations entre utilisateurs, édition et suppression
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="text-3xl mb-3">🔔</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Notifications</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Notifications en temps réel (publications, likes, messages)
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Interface</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                Design responsive, multilingue, thèmes personnalisables
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Architecture Microservices
          </h2>
          <p className="text-xl leading-relaxed mb-8" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Breezy repose sur une architecture microservices orchestrée avec Docker, permettant une évolutivité et une maintenance optimales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold text-sm mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>🔐 Auth Service</h3>
              <p className="text-xs" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>JWT, refresh tokens, sécurité</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold text-sm mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>👥 User Service</h3>
              <p className="text-xs" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Gestion des profils utilisateurs</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold text-sm mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>📄 Post Service</h3>
              <p className="text-xs" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Breezes, création, affichage, tags</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold text-sm mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>💬 Message Service</h3>
              <p className="text-xs" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Messagerie privée, conversations</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold text-sm mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>🔔 Notification Service</h3>
              <p className="text-xs" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Notifications temps réel</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold text-sm mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>🌐 API Gateway</h3>
              <p className="text-xs" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Nginx, point d'entrée unique</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Stack Technologique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Frontend</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Next.js', 'Tailwind CSS', 'FlyonUI', 'next-intl'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-blue-100" style={{ color: "hsla(172, 95%, 18%, 1)", borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Backend</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Node.js', 'Express.js', 'MongoDB'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-green-100" style={{ color: "hsla(172, 95%, 18%, 1)", borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Infrastructure</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Docker', 'Docker Compose', 'Nginx', 'AWS EC2'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-orange-100" style={{ color: "hsla(172, 95%, 18%, 1)", borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Outils</h3>
              <div className="flex flex-wrap gap-2">
                {['GitHub Projects', 'Figma', 'Postman', 'VS Code', 'Notion', 'Discord'].map((tool) => (
                  <span key={tool} className="px-3 py-1 text-sm rounded-full bg-purple-100" style={{ color: "hsla(172, 95%, 18%, 1)", borderColor: "hsla(172, 95%, 18, 0.2)" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organization section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Organisation & Méthodologie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>🔄 Approche Agile</h3>
              <ul className="space-y-2" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                <li>• Backlog structuré</li>
                <li>• Daily meetings</li>
                <li>• Itérations rapides</li>
                <li>• GitHub Projects pour la gestion des tâches</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>👥 Collaboration</h3>
              <ul className="space-y-2" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                <li>• Répartition frontend/backend</li>
                <li>• Collaboration continue</li>
                <li>• Flexibilité des rôles</li>
                <li>• Montée en compétences croisées</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Future improvements */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Améliorations futures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>🔄 Temps réel</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Support complet via WebSockets</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>📷 Médias</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Photos/vidéos dans les Breezes</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>🛡️ Modération</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Outils d'administration avancés</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>@ Mentions</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>Système de mentions utilisateur</p>
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
              href="https://github.com/TheoCvg/breezy-app"
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
              onClick={() => alert('Démo bientôt disponible!')}
            >
              Live Demo (Soon)
            </button>
          </div>
        </div>
      </div>

      {/* Next project button */}
      <div className="w-full flex justify-center my-12">
        <button
          onClick={() => window.location.href = "/iastrategie"}
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
            AI.
          </span>
        </button>
      </div>
    </main>
  );
}
