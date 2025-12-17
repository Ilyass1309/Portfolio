"use client";
import ProjectsPanel from "./ProjectsPanel";
import AboutPanel from "./AboutPanel";
import ContactPanel from "./ContactPanel";

type Props = {
  appId: string;
};

export default function AppContent({ appId }: Props) {
  const content = {
    accueil: { 
      title: "Bienvenue", 
      text: "Bienvenue sur mon portfolio — cliquez sur les applications du bureau pour naviguer." 
    },
  };

  // Panels spéciaux
  if (appId === "projets") return <ProjectsPanel />;
  if (appId === "apropos") return <AboutPanel />;
  if (appId === "contact") return <ContactPanel />;

  const app = content[appId as keyof typeof content];
  if (!app) return null;

  return (
    <div>
      <h3 style={{ margin: "4px 0 8px" }}>{app.title}</h3>
      <p style={{ margin: 0 }}>{app.text}</p>
    </div>
  );
}
