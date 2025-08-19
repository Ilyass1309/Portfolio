export default function IAStrategiePage() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full pt-24 px-4">
      {/* Titre et infos */}
      <h1
        className="font-extrabold text-center mb-2"
        style={{
          fontSize: "82px",
          width: "246px",
          height: "79px",
          margin: "193px auto 0 auto",
          letterSpacing: "-2px",
        }}
      >
        IA Stratégie
      </h1>
      <div className="text-center text-lg text-neutral-500 mb-1">
        Projet IA sur jeu de stratégie
      </div>
      <div className="text-center text-sm text-neutral-400 mb-4">
        Juin 2025
      </div>
      <div className="flex justify-center gap-4 mb-8">
        {/* Ajoute ici les logos de ton équipe */}
        <img
          src="/user1.png"
          alt="Membre 1"
          className="w-10 h-10 rounded-full border"
        />
        <img
          src="/user2.png"
          alt="Membre 2"
          className="w-10 h-10 rounded-full border"
        />
        <img
          src="/user3.png"
          alt="Membre 3"
          className="w-10 h-10 rounded-full border"
        />
      </div>

      {/* Espace images */}
      <div className="w-full max-w-3xl h-56 bg-neutral-100 rounded-lg mb-8 flex items-center justify-center text-neutral-400">
        <span>Images du projet ici</span>
      </div>

      {/* Le problème */}
      <section className="mb-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-2">Le problème</h2>
        <p className="text-neutral-700">
          Comment permettre à une IA d'apprendre et d'optimiser ses décisions dans
          un environnement de jeu de stratégie complexe ?
        </p>
      </section>

      {/* Solution */}
      <section className="mb-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-2">Notre solution</h2>
        <p className="text-neutral-700">
          Développement d'un agent IA utilisant l'apprentissage par renforcement
          pour analyser, anticiper et s'adapter aux stratégies adverses.
        </p>
      </section>

      {/* Fonctionnalités */}
      <section className="mb-8 max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-2">Fonctionnalités principales</h2>
        <ul className="list-disc list-inside text-neutral-700">
          <li>Simulation de parties et analyse des résultats</li>
          <li>Visualisation des décisions IA</li>
          <li>Paramétrage des niveaux de difficulté</li>
          <li>Rapports de performance</li>
        </ul>
      </section>

      {/* Technologies */}
      <section className="mb-8 max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-2">Technologies</h2>
        <div className="flex gap-3 flex-wrap">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
            Python
          </span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
            TensorFlow
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            React
          </span>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mb-8 max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-2">Screenshots</h2>
        <div className="w-full h-32 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-300">
          <span>Captures d'écran ici</span>
        </div>
      </section>

      {/* Lien démo */}
      <section className="mb-2 text-center max-w-3xl w-full">
        <a
          href="https://demo-ia-strategie.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-purple-700 transition-colors"
        >
          Voir la démo
        </a>
      </section>
    </main>
  );
}
