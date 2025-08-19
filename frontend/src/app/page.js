export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-screen overflow-hidden pt-32">
      <div className="text-center px-6">
        <h1
          className="font-extrabold text-center mb-2 flex justify-center items-center"
          style={{
            fontSize: "110px",
            width: "900px", // Augmente la largeur pour tenir sur deux lignes
            height: "105px",
            margin: "10px auto 110px auto",
            letterSpacing: "-2px",
            color: "hsla(172, 95%, 18%, 1)",
            fontFamily: "Sans-serif", // Utilise une police sans-serif pour un look moderne
          }}
        >
          Hi. I'm Ilyass.<br />A Developer
        </h1>
        <p className="mt-6 text-lg max-w-xl text-neutral-600 text-center-description">
          I'm passionate about crafting experiences that are engaging,
          accessible, and user-centric.
        </p>
      </div>

      {/* Section Projets */}
      <section className="w-full max-w-5xl px-6 mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Breezy */}
          <a href="/breezy" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-[1.03] transition-transform border border-neutral-200 group cursor-pointer no-underline">
            <img src="/AI-tchat.png" alt="Breezy" className="w-20 h-20 object-cover rounded-full mb-4 shadow group-hover:opacity-90 transition-opacity" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors">Breezy</h3>
            <p className="text-neutral-600 text-center mb-4">Réseau social web inspiré de Twitter/X, permettant de partager des posts, suivre des utilisateurs et interagir en temps réel.</p>
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Web App</span>
          </a>
          {/* EasySave */}
          <a href="/easysave" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-[1.03] transition-transform border border-neutral-200 group cursor-pointer no-underline">
            <img src="/backup2.png" alt="EasySave" className="w-20 h-20 object-cover rounded-full mb-4 shadow group-hover:opacity-90 transition-opacity" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-green-700 transition-colors">EasySave</h3>
            <p className="text-neutral-600 text-center mb-4">Logiciel de gestion de sauvegarde locale, simple et efficace pour protéger vos fichiers importants.</p>
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Software</span>
          </a>
          {/* IA Stratégie */}
          <a href="/iastrategie" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-[1.03] transition-transform border border-neutral-200 group cursor-pointer no-underline">
            <img src="/globe.svg" alt="Projet IA" className="w-20 h-20 object-cover rounded-full mb-4 shadow group-hover:opacity-90 transition-opacity" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-700 transition-colors">IA Stratégie</h3>
            <p className="text-neutral-600 text-center mb-4">Projet d'apprentissage par IA sur un jeu de stratégie, explorant l'optimisation et la prise de décision autonome.</p>
            <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">IA / Jeu</span>
          </a>
        </div>
      </section>

      {/* Section contacts */}
      <footer className="w-full flex flex-col items-center mt-24 mb-8">
        <div className="flex gap-6 items-center">
          <a href="https://www.linkedin.com/in/ilyass-tran/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="https://github.com/Ilyass1309" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.373-12-12-12z"/></svg>
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV" className="hover:scale-110 transition-transform">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 13.172 2H6zm6 1.414L18.586 10H14a2 2 0 0 1-2-2V3.414zM8 14h8v2H8v-2zm0-4h8v2H8v-2z"/></svg>
          </a>
        </div>
        <div className="mt-2 text-neutral-500 text-sm">Find me on LinkedIn, GitHub or download my resume</div>
      </footer>
    </main>
  );
}
