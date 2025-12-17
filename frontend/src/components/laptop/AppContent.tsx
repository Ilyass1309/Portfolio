// components/laptop/AppContent.tsx
"use client";
import ProjectsPanel from "./ProjectsPanel";

type Props = {
  appId: string;
};

export default function AppContent({ appId }: Props) {
  const content = {
    accueil: { title: "Bienvenue", text: "Bienvenue sur mon portfolio — cliquez sur les applications du bureau pour naviguer." },
    apropos: { title: "À propos", text: "Développeur Full Stack passionné par les interfaces et les performances." },
    contact: { title: "Contact", text: "Email: hello@exemple.com" },
  };

  if (appId === "projets") return <ProjectsPanel />;

  const app = content[appId as keyof typeof content];
  if (!app) return null;

  return (
    <div>
      <h3 style={{ margin: "4px 0 8px" }}>{app.title}</h3>
      <p style={{ margin: 0 }}>{app.text}</p>
    </div>
  );
}
