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
            Software Engineer, Master UI-UX Designer
            <br />
          </div>
        </div>
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
      <div className="w-full flex flex-col items-center my-8 page-enter-delay-2">
        <div className="grid grid-cols-1 max-w-2xl w-full gap-4 text-left">
          <h2 className="text-4xl font-bold mb-4 title-font" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Overview</h2>
          <p className="text-2xl" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            EasySave is a simple and powerful backup application, designed to make managing your local, external, or network backups easy. It offers an intuitive interface, precise disk space monitoring, and fast setup for all your backup needs.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="w-full flex flex-col items-center my-8 page-enter-delay-3">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-xl" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            <li>Incremental backup</li>
            <li>Backup scheduling</li>
            <li>Disk space visualization</li>
            <li>Cross-platform interface</li>
            <li>Data encryption</li>
          </ul>
        </div>
      </div>

      {/* GIFs & Images section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="grid grid-cols-1 gap-12 max-w-7xl w-full">
          {/* GIFs one below the other */}
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center">
              <img src="/easySave/backup.gif" alt="Demo GIF 1" style={{ width: "100%", maxWidth: "1400px", borderRadius: "32px" }} />
              <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Backup in action</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/easySave/create-job.gif" alt="Demo GIF 2" style={{ width: "100%", maxWidth: "1400px", borderRadius: "32px" }} />
              <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Create a job</span>
            </div>
          </div>
          {/* Images side by side */}
          <div className="flex flex-row items-center justify-center gap-12">
            <div className="flex flex-col items-center">
              <img src="/easySave/settings1.png" alt="Screenshot 1" style={{ width: "100%", maxWidth: "900px", borderRadius: "32px" }} />
              <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Settings</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/easySave/settings2.png" alt="Screenshot 2" style={{ width: "100%", maxWidth: "900px", borderRadius: "32px" }} />
              <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>Advanced settings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="w-full flex flex-col items-center my-8">
        <div className="max-w-2xl w-full flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            Link
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
          </div>
        </div>
      </div>

      {/* Next project button */}
      <div className="w-full flex justify-center my-12">
        <button
          onClick={() => window.location.href = "/plugins"}
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
