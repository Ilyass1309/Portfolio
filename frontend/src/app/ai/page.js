import Image from "next/image";

export default function AIProject() {
  return (
    <main className="min-h-screen w-full bg-[hsla(36,31%,90%,1)] pt-32 flex flex-col items-center">
      <section className="max-w-2xl w-full bg-white/80 rounded-3xl shadow-xl p-8 mx-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Projet IA : Création d'une IA par apprentissage</h1>
        {/* Zone image */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-xl aspect-[16/9] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
            {/* Remplace le src par ton image réelle */}
            <Image
              src="/Ai-tchat.png"
              alt="Aperçu IA"
              width={600}
              height={340}
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Zone description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-lg text-gray-700">
            Ce projet consiste à créer une intelligence artificielle capable d'apprendre à partir de données fournies. 
            L'IA utilise des techniques d'apprentissage supervisé pour s'améliorer au fil du temps et fournir des réponses pertinentes.
            <br /><br />
            Technologies utilisées : <span className="font-medium">Python, TensorFlow, React</span>
          </p>
        </div>
        {/* Zone tags */}
        <div className="flex gap-3 flex-wrap mt-4">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Supervisé</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
        </div>
      </section>
    </main>
  );
}