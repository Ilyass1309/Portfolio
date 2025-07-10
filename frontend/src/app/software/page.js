import Image from "next/image";

export default function SoftwareProject() {
  return (
    <main className="min-h-screen w-full bg-[hsla(36,31%,90%,1)] pt-32 flex flex-col items-center">
      <section className="max-w-2xl w-full bg-white/80 rounded-3xl shadow-xl p-8 mx-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Projet Software : EasySave</h1>
        {/* Zone image */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-xl aspect-[16/9] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
            {/* Remplace le src par ton image réelle */}
            <Image
              src="/backup3.png"
              alt="Aperçu EasySave"
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
            EasySave est un logiciel de stockage local permettant de sauvegarder, organiser et restaurer facilement vos fichiers sur votre ordinateur.
            Il offre une interface intuitive pour gérer vos données en toute sécurité, sans dépendance au cloud.
            <br /><br />
            Technologies utilisées : <span className="font-medium">Electron, Node.js, React</span>
          </p>
        </div>
        {/* Zone tags */}
        <div className="flex gap-3 flex-wrap mt-4">
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Electron</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Local Storage</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
        </div>
      </section>
    </main>
  );
}