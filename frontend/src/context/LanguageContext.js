"use client";

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LanguageContext = createContext({
  lang: 'fr',
  toggle: () => {},
  setLang: () => {},
  t: (key) => key,
});

// Dictionnaires minimalistes (exemple; étendre selon besoin)
const DICT = {
  fr: {
    work: 'Projets',
    about: 'À propos',
    contact: 'Contact',
    hiTitle: "Salut. Je suis Ilyass.\nDéveloppeur",
    intro: "Étudiant en ingénierie informatique et apprenti Analyste IT chez Continental, passionné par l'IA, le développement logiciel et la création de solutions numériques innovantes.",
    projects: 'Mes Projets',
    breezyDesc: 'Réseau social inspiré de Twitter/X : posts courts, interactions et temps réel.',
    easysaveDesc: 'Logiciel de sauvegarde locale simple et efficace pour protéger vos fichiers.',
    iaDesc: 'Apprentissage par IA sur un jeu de stratégie (recherche, heuristiques, RL).',
    iaWipTitle: 'En cours de développement',
    iaWipBody: "Ce projet IA Stratégie est actuellement en construction. Reviens bientôt pour la page détaillée et la démo.",
    close: 'Fermer',
    seeOther: 'Voir un autre projet',
    footerLine: 'Retrouve‑moi sur LinkedIn, GitHub ou télécharge mon CV',
  // Breezy page
  breezy_title: 'Breezy',
  breezy_timeline: 'Chronologie',
  breezy_team: 'Équipe',
  breezy_role_label: 'Rôle',
  breezy_role_value: 'Développeur Full‑Stack, UI/UX Designer',
  breezy_brief_before: 'Un réseau social léger et réactif, inspiré de Twitter/X, permettant aux utilisateurs de partager des messages courts appelés ',
  breezy_breezes: 'Breezes',
  breezy_brief_after: '.',
  breezy_gallery_title: "Galerie d'écrans",
  breezy_gallery_hint: "Cliquez sur une capture pour l'agrandir. Navigation clavier : ← → Échap.",
  // Screenshots
  breezy_sc_home_title: "Page d'accueil",
  breezy_sc_home_desc: 'Flux principal et navigation',
  breezy_sc_msg_title: 'Messagerie',
  breezy_sc_msg_desc: 'Conversations privées entre utilisateurs',
  breezy_sc_conversation_title: 'Conversation',
  breezy_sc_conversation_desc: "Fil d'échange en temps réel",
  breezy_sc_notif_title: 'Notifications',
  breezy_sc_notif_desc: 'Alertes en temps réel',
  breezy_sc_comments_title: 'Commentaires',
  breezy_sc_comments_desc: "Ajout d'un commentaire sous un Breeze",
  breezy_sc_profile_title: 'Profil',
  breezy_sc_profile_desc: "Informations et activités de l'utilisateur",
  breezy_sc_search_title: 'Recherche & Profil',
  breezy_sc_search_desc: 'Exploration et profils utilisateurs',
  breezy_sc_lang_title: 'Multilingue',
  breezy_sc_lang_desc: 'Sélection dynamique des langues',
  breezy_sc_themes_title: 'Thèmes',
  breezy_sc_themes_desc: "Personnalisation de l'apparence",
  breezy_sc_commentui_title: 'Commenter un post',
  breezy_sc_commentui_desc: 'Interface de commentaire pour les utilisateurs',
  // Overview
  breezy_overview: 'Aperçu',
  breezy_overview_paragraph: "Breezy est un projet de réseau social développé en équipe de cinq personnes, mettant l'accent sur une architecture microservices conteneurisée et un déploiement cloud avec Docker et AWS EC2. L'application offre des fonctionnalités sociales essentielles dans une interface moderne et responsive.",
  breezy_goals: 'Objectifs',
  breezy_goals_desc: 'Créer une plateforme sociale légère et performante avec une architecture moderne et évolutive.',
  breezy_deployment: 'Déploiement',
  breezy_deployment_desc: 'Application entièrement conteneurisée et déployée sur AWS EC2 avec Docker Compose.',
  // Features
  breezy_features_title: 'Fonctionnalités principales',
  breezy_feat_accounts_title: 'Comptes utilisateurs',
  breezy_feat_accounts_desc: 'Création et connexion sécurisée avec JWT et cookies HttpOnly',
  breezy_feat_posts_title: 'Publications',
  breezy_feat_posts_desc: "Messages courts (Breezes), système de tags (#), ajout d'images",
  breezy_feat_engagement_title: 'Interactions',
  breezy_feat_engagement_desc: "Likes, commentaires (Breaths), système d'abonnements",
  breezy_feat_messages_title: 'Messagerie privée',
  breezy_feat_messages_desc: 'Conversations entre utilisateurs, édition et suppression',
  breezy_feat_notifications_title: 'Notifications',
  breezy_feat_notifications_desc: 'Notifications en temps réel (publications, likes, messages)',
  breezy_feat_interface_title: 'Interface',
  breezy_feat_interface_desc: 'Design responsive, multilingue, thèmes personnalisables',
  // Architecture
  breezy_arch_title: 'Architecture Microservices',
  breezy_arch_intro: 'Breezy repose sur une architecture microservices orchestrée avec Docker, permettant une évolutivité et une maintenance optimales.',
  breezy_arch_auth: 'JWT, refresh tokens, sécurité',
  breezy_arch_user: 'Gestion des profils utilisateurs',
  breezy_arch_post: 'Breezes, création, affichage, tags',
  breezy_arch_message: 'Messagerie privée, conversations',
  breezy_arch_notification: 'Notifications temps réel',
  breezy_arch_gateway: "Nginx, point d'entrée unique",
  // Stack
  breezy_stack_title: 'Stack Technologique',
  breezy_stack_infrastructure: 'Infrastructure',
  breezy_stack_tools: 'Outils',
  // Organization
  breezy_org_title: 'Organisation & Méthodologie',
  breezy_org_agile_title: 'Approche Agile',
  breezy_org_agile_backlog: '• Backlog structuré',
  breezy_org_agile_daily: '• Daily meetings',
  breezy_org_agile_iterations: '• Itérations rapides',
  breezy_org_agile_tasks: '• GitHub Projects pour la gestion des tâches',
  breezy_org_collab_title: 'Collaboration',
  breezy_org_collab_split: '• Répartition frontend/backend',
  breezy_org_collab_continuous: '• Collaboration continue',
  breezy_org_collab_flex: '• Flexibilité des rôles',
  breezy_org_collab_growth: '• Montée en compétences croisées',
  // Future
  breezy_future_title: 'Améliorations futures',
  breezy_future_moderation_title: 'Modération',
  breezy_future_moderation_desc: "Outils d'administration avancés",
  breezy_future_mentions_title: 'Mentions',
  breezy_future_mentions_desc: 'Système de mentions utilisateur',
  // Links
  breezy_links_title: 'Liens du projet',
  breezy_view_github: 'Voir sur GitHub',
  breezy_try_online: 'Essayer en ligne',
  // Aria / misc
  breezy_aria_open_image: "Voir l'image en grand",
  breezy_aria_previous: 'Précédent',
  breezy_aria_next: 'Suivant',
  breezy_aria_close: 'Fermer',
  breezy_aria_go_to: 'Aller à',
  },
  en: {
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    hiTitle: "Hi. I'm Ilyass.\nA Developer",
    intro: 'Computer Engineering student and IT Analyst Apprentice at Continental, passionate about AI, software development, and creating innovative digital solutions.',
    projects: 'My Projects',
    breezyDesc: 'Social network inspired by Twitter/X: short posts, interactions, realtime.',
    easysaveDesc: 'Local backup software to protect important files easily.',
    iaDesc: 'AI learning project on a strategy game (search, heuristics, RL).',
    iaWipTitle: 'Work in progress',
    iaWipBody: 'This AI Strategy project is under construction. Come back soon for the detailed page and demo.',
    close: 'Close',
    seeOther: 'See another project',
    footerLine: 'Find me on LinkedIn, GitHub or download my resume',
  // Breezy page
  breezy_title: 'Breezy',
  breezy_timeline: 'Timeline',
  breezy_team: 'Team',
  breezy_role_label: 'Role',
  breezy_role_value: 'Full-Stack Developer, UI/UX Designer',
  breezy_brief_before: 'A lightweight and responsive social network inspired by Twitter/X where users share short posts called ',
  breezy_breezes: 'Breezes',
  breezy_brief_after: '.',
  breezy_gallery_title: 'Screens Gallery',
  breezy_gallery_hint: 'Click a screenshot to enlarge. Keyboard: ← → Esc.',
  // Screenshots
  breezy_sc_home_title: 'Home feed',
  breezy_sc_home_desc: 'Main feed & navigation',
  breezy_sc_msg_title: 'Messaging',
  breezy_sc_msg_desc: 'Private user conversations',
  breezy_sc_conversation_title: 'Conversation thread',
  breezy_sc_conversation_desc: 'Real-time message thread',
  breezy_sc_notif_title: 'Notifications',
  breezy_sc_notif_desc: 'Real-time alerts',
  breezy_sc_comments_title: 'Comments',
  breezy_sc_comments_desc: 'Add a comment under a Breeze',
  breezy_sc_profile_title: 'Profile',
  breezy_sc_profile_desc: 'User info & activity',
  breezy_sc_search_title: 'Search & Profile',
  breezy_sc_search_desc: 'User discovery & profiles',
  breezy_sc_lang_title: 'Multilingual',
  breezy_sc_lang_desc: 'Dynamic language switch',
  breezy_sc_themes_title: 'Themes',
  breezy_sc_themes_desc: 'Appearance customization',
  breezy_sc_commentui_title: 'Comment a post',
  breezy_sc_commentui_desc: 'Comment UI for users',
  // Overview
  breezy_overview: 'Overview',
  breezy_overview_paragraph: 'Breezy is a social network project built by a team of five, focusing on a containerized microservices architecture and cloud deployment with Docker & AWS EC2. It provides essential social features in a modern, responsive interface.',
  breezy_goals: 'Goals',
  breezy_goals_desc: 'Create a lightweight, performant social platform with a modern, scalable architecture.',
  breezy_deployment: 'Deployment',
  breezy_deployment_desc: 'Fully containerized app deployed to AWS EC2 using Docker Compose.',
  // Features
  breezy_features_title: 'Key Features',
  breezy_feat_accounts_title: 'User accounts',
  breezy_feat_accounts_desc: 'Secure signup & login with JWT + HttpOnly cookies',
  breezy_feat_posts_title: 'Posts',
  breezy_feat_posts_desc: 'Short posts (Breezes), hashtag system, image upload',
  breezy_feat_engagement_title: 'Engagement',
  breezy_feat_engagement_desc: 'Likes, comments (Breaths), follow system',
  breezy_feat_messages_title: 'Private messaging',
  breezy_feat_messages_desc: 'User conversations, edit & delete',
  breezy_feat_notifications_title: 'Notifications',
  breezy_feat_notifications_desc: 'Real-time notifications (posts, likes, messages)',
  breezy_feat_interface_title: 'Interface',
  breezy_feat_interface_desc: 'Responsive design, multilingual, customizable themes',
  // Architecture
  breezy_arch_title: 'Microservices Architecture',
  breezy_arch_intro: 'Breezy uses a Docker-orchestrated microservices architecture enabling scalability and easy maintenance.',
  breezy_arch_auth: 'JWT, refresh tokens, security',
  breezy_arch_user: 'User profile management',
  breezy_arch_post: 'Breezes creation, display, tagging',
  breezy_arch_message: 'Private messaging, conversations',
  breezy_arch_notification: 'Realtime notifications',
  breezy_arch_gateway: 'Nginx, single entry point',
  // Stack
  breezy_stack_title: 'Technology Stack',
  breezy_stack_infrastructure: 'Infrastructure',
  breezy_stack_tools: 'Tools',
  // Organization
  breezy_org_title: 'Organization & Methodology',
  breezy_org_agile_title: 'Agile Approach',
  breezy_org_agile_backlog: '• Structured backlog',
  breezy_org_agile_daily: '• Daily standups',
  breezy_org_agile_iterations: '• Fast iterations',
  breezy_org_agile_tasks: '• GitHub Projects for task management',
  breezy_org_collab_title: 'Collaboration',
  breezy_org_collab_split: '• Frontend / backend split',
  breezy_org_collab_continuous: '• Continuous collaboration',
  breezy_org_collab_flex: '• Role flexibility',
  breezy_org_collab_growth: '• Cross skill growth',
  // Future
  breezy_future_title: 'Future Improvements',
  breezy_future_moderation_title: 'Moderation',
  breezy_future_moderation_desc: 'Advanced admin tools',
  breezy_future_mentions_title: 'Mentions',
  breezy_future_mentions_desc: 'User mention system',
  // Links
  breezy_links_title: 'Project Links',
  breezy_view_github: 'View on GitHub',
  breezy_try_online: 'Try online',
  // Aria / misc
  breezy_aria_open_image: 'Open image full size',
  breezy_aria_previous: 'Previous',
  breezy_aria_next: 'Next',
  breezy_aria_close: 'Close',
  breezy_aria_go_to: 'Go to',
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr');

  // Charger préférence locale
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    if (stored && (stored === 'fr' || stored === 'en')) setLang(stored);
  }, []);

  // Persister
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === 'fr' ? 'en' : 'fr')), []);

  const t = useCallback((key) => {
    return (DICT[lang] && DICT[lang][key]) || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export const AVAILABLE_LANGS = ['fr', 'en'];