"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { createPortal } from "react-dom";

export default function EasySavePage() {
  const { t, lang } = useLanguage();
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
  {t('easysave_title')}
      </h1>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-2xl page-enter-delay-1">
        {/* Timeline */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-1" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_timeline')}</div>
          <div className="rounded-full px-4 py-2 text-neutral-700" style={{ color: "hsla(172, 95%, 18%, 1)" }}>2024</div>
        </div>
        {/* Team */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-1" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_team')}</div>
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
          <div className="text-lg font-semibold mb-1" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_role_label')}</div>
          <div className="rounded-full px-4 py-2 text-neutral-700 text-center" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            {t('easysave_role_value')}
            <br />
          </div>
        </div>
      </div>

      {/* Brief description */}
      <div className="w-full flex justify-center items-center my-8 page-enter-delay-1">
        <p className="text-center text-xl max-w-4xl" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
          {t('easysave_brief_before')}<strong>C# WPF</strong>{t('easysave_brief_after')}
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
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_overview')}</h2>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            {t('easysave_overview_paragraph')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_goal')}</h3>
              <p style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                {t('easysave_goal_desc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_approach')}</h3>
              <p style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                {t('easysave_approach_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            {t('easysave_features_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M9 17H7A5 5 0 017 7h2m6 0v1a3 3 0 11-6 0V7a5 5 0 1110 0v1a2 2 0 01-2 2H9"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_feat_full_title')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                {t('easysave_feat_full_desc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_feat_diff_title')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                {t('easysave_feat_diff_desc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke="currentColor" strokeWidth="1.5" d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_feat_jobs_title')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                {t('easysave_feat_jobs_desc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10V9a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_feat_ui_title')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                {t('easysave_feat_ui_desc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_feat_logs_title')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                {t('easysave_feat_logs_desc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border transition hover:scale-105" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <path stroke="currentColor" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_feat_multi_title')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                {t('easysave_feat_multi_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Development timeline */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            {t('easysave_versions_title')}
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">V1</span>
                <h3 className="text-xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_v1_title')}</h3>
              </div>
              <p style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                {t('easysave_v1_desc')}
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="flex items-center mb-3">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">V2</span>
                <h3 className="text-xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_v2_title')}</h3>
              </div>
              <p style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                {t('easysave_v2_desc')}
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <div className="flex items-center mb-3">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">V3</span>
                <h3 className="text-xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_v3_title')}</h3>
              </div>
              <p style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                {t('easysave_v3_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture & Technologies */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            {t('easysave_archi_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_technologies')}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['C#', '.NET Framework', 'WPF', 'MVVM'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-blue-100" style={{ color: "hsla(172, 95%, 18%, 1)", borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_tools')}</h3>
              <div className="flex flex-wrap gap-2">
                {['Visual Studio', 'Git', 'Trello/Jira'].map((tool) => (
                  <span key={tool} className="px-3 py-1 text-sm rounded-full bg-green-100" style={{ color: "hsla(172, 95%, 18%, 1)", borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_architecture')}</h3>
              <ul className="space-y-2" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                <li>{t('easysave_arch_list1')}</li>
                <li>{t('easysave_arch_list2')}</li>
                <li>{t('easysave_arch_list3')}</li>
                <li>{t('easysave_arch_list4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* My contributions */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            {t('easysave_contrib_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_contrib_dev')}</h3>
              <ul className="space-y-2" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                <li>{t('easysave_contrib_dev_1')}</li>
                <li>{t('easysave_contrib_dev_2')}</li>
                <li>{t('easysave_contrib_dev_3')}</li>
                <li>{t('easysave_contrib_dev_4')}</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_contrib_doc')}</h3>
              <ul className="space-y-2" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>
                <li>{t('easysave_contrib_doc_1')}</li>
                <li>{t('easysave_contrib_doc_2')}</li>
                <li>{t('easysave_contrib_doc_3')}</li>
                <li>{t('easysave_contrib_doc_4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            {t('easysave_challenges_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_ch_perf')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>{t('easysave_ch_perf_desc')}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_ch_diff')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>{t('easysave_ch_diff_desc')}</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_ch_ux')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>{t('easysave_ch_ux_desc')}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_ch_org')}</h3>
              <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>{t('easysave_ch_org_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots section */}
      <div className="w-full flex flex-col items-center my-12 page-enter-delay-3">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
            {t('easysave_screens_title')}
          </h2>
          <div className="grid grid-cols-1 gap-12 max-w-7xl w-full">
            {/* GIFs one below the other */}
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center">
                <img src="/easySave/backup.gif" alt="Backup in action" style={{ width: "100%", maxWidth: "1400px", borderRadius: "32px" }} />
                <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_screen_backup')}</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/easySave/create-job.gif" alt="Create job demo" style={{ width: "100%", maxWidth: "1400px", borderRadius: "32px" }} />
                <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_screen_create')}</span>
              </div>
            </div>
            {/* Images side by side */}
            <div className="flex flex-row items-center justify-center gap-12">
              <div className="flex flex-col items-center">
                <img src="/easySave/settings1.png" alt="Settings interface" style={{ width: "100%", maxWidth: "900px", borderRadius: "32px" }} />
                <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_screen_settings')}</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/easySave/settings2.png" alt="Advanced settings" style={{ width: "100%", maxWidth: "900px", borderRadius: "32px" }} />
                <span className="mt-6 text-3xl font-semibold" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_screen_settings_adv')}</span>
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
                {t('easysave_results_title')}
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                <ul className="space-y-3" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('easysave_result_1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('easysave_result_2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('easysave_result_3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('easysave_result_4')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Future improvements */}
            <div>
              <h2 className="text-3xl font-bold mb-6 dtgetai-title" style={{ color: "hsla(172, 95%, 18%, 1)" }}>
                {t('easysave_future_title')}
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_future_inc_title')}</h3>
                  <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>{t('easysave_future_inc_desc')}</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_future_cloud_title')}</h3>
                  <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>{t('easysave_future_cloud_desc')}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_future_sched_title')}</h3>
                  <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>{t('easysave_future_sched_desc')}</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border" style={{ borderColor: "hsla(172, 95%, 18%, 0.2)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "hsla(172, 95%, 18%, 1)" }}>{t('easysave_future_ui_title')}</h3>
                  <p className="text-sm" style={{ color: "hsla(172, 95%, 18%, 0.8)" }}>{t('easysave_future_ui_desc')}</p>
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
            {t('easysave_links_title')}
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
              {lang === 'fr' ? t('easysave_view_github') : 'View on GitHub'}
            </a>
            <button
              className="px-6 py-3 rounded-lg font-semibold shadow transition hover:scale-105 border-2"
              style={{
                background: "transparent",
                color: "hsla(172, 95%, 18%, 1)",
                borderColor: "hsla(172, 95%, 18%, 1)",
                fontSize: "18px",
              }}
              onClick={() => alert(t('easysave_doc_alert'))}
            >
              {t('easysave_documentation')}
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
  <NotAvailableModal open={modalOpen} setOpen={setModalOpen} />
    </main>
  );
}

// Ajout d'une page d'indisponibilité temporaire pour la page IA
function NotAvailableModal({ open, setOpen }) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!open) return;
    // Mémorise la position de scroll et verrouille le scroll
    scrollYRef.value = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    // Empêche le jump quand on restaure
    body.style.position = 'fixed';
    body.style.top = `-${scrollYRef.value}px`;
    body.style.left = '0';
    body.style.right = '0';
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      window.scrollTo(0, scrollYRef.value);
    };
  }, [open]);

  if (!open) return null;

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-indispo-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(2px)' }}
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
            color: '#0d5952',
            padding: '2rem 2.2rem',
            borderRadius: '1.5rem',
            boxShadow: '0 6px 40px -4px rgba(0,0,0,0.25)',
            maxWidth: 480,
            width: '100%',
            textAlign: 'center',
            position: 'relative',
        }}
      >
        <h2 id="modal-indispo-title" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>{t('easysave_modal_soon_title')}</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.5 }}>
          {t('easysave_modal_soon_body').split('\n').map((line, i) => (<span key={i}>{line}<br/></span>))}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => setOpen(false)}
            style={{
              background: '#0d5952',
              color: '#fff',
              border: 'none',
              borderRadius: '0.7rem',
              padding: '0.75rem 1.6rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.95rem',
            }}
          >
            {t('easysave_modal_close')}
          </button>
        </div>
        <button
          aria-label={t('easysave_modal_close')}
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#0d5952'
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  );

  return createPortal(overlay, typeof document !== 'undefined' ? document.body : undefined);
}
