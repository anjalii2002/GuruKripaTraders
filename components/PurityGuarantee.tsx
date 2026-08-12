'use client';

import React, { useState } from 'react';
import { PURITY_STANDARDS } from '@/lib/data';
import { ShieldCheck, Sparkles, Flame, HeartHandshake, FileCheck, CheckCircle2 } from 'lucide-react';

export default function PurityGuarantee() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-[#C85A17]" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-[#DAA520]" />;
      case 'Flame': return <Flame className="w-7 h-7 text-[#C85A17]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-7 h-7 text-[#DAA520]" />;
      default: return <ShieldCheck className="w-7 h-7 text-[#C85A17]" />;
    }
  };

  return (
    <section id="purity" className="w-full py-8 sm:py-12 bg-[#FAF6EE] border-b border-[#E8DDCB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C85A17]/15 border border-[#C85A17]/30 text-[#C85A17] text-xs font-extrabold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#C85A17]" />
              <span>Purity Guarantee & Scriptural Accuracy</span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl text-[#2C1A14] uppercase tracking-wider leading-tight">
              Uncompromising Standards for Eternal Radiance
            </h2>
            <p className="text-[#3D2319] text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              We uphold strict scriptural accuracy and laboratory purity. Our oils, A2 Ghee, and Saffron undergo high-performance liquid chromatography (HPLC) testing to ensure zero chemical dyes, mineral oils, or synthetic paraffin fillers.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={() => setCertModalOpen(true)}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#2C1A14] hover:bg-[#3D2319] border-2 border-[#DAA520] text-white font-extrabold text-sm transition-all shadow-md"
            >
              <FileCheck className="w-5 h-5 text-[#DAA520]" />
              <span>Inspect Lab Certification</span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PURITY_STANDARDS.map((standard, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#E8DDCB] hover:border-[#C85A17] hover:shadow-xl transition-all duration-300 space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F3ECE0] flex items-center justify-center shadow-xs border border-[#E8DDCB] group-hover:scale-110 transition-transform">
                {getIcon(standard.iconName)}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2C1A14] leading-snug">
                {standard.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#3D2319] leading-relaxed font-normal">
                {standard.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scriptural Banner */}
        <div className="mt-16 bg-[#2C1A14] text-white rounded-3xl p-8 sm:p-10 border border-[#DAA520]/40 text-center space-y-4 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="font-serif italic text-[#DAA520] text-sm font-bold tracking-wider">
              — SKANDA PURANA & SHARADA TILAKA TANTRA —
            </span>
            <blockquote className="font-serif font-bold text-xl sm:text-2xl text-white leading-relaxed">
              &quot;दीपो ज्योतिः परंब्रह्म दीपो ज्योतिर्जनार्दनः। दीपोनु हरतु मे पापं संध्यादीप नमोऽस्तुते॥&quot;
            </blockquote>
            <p className="text-xs sm:text-sm text-[#FAF6EE]/80 font-medium">
              &quot;The lamp flame is the supreme divine light. Lighting an immaculate, soot-free lamp dispels darkness, ignorance, and brings health, prosperity, and peace into your home.&quot;
            </p>
          </div>
        </div>

      </div>

      {/* Lab Certificate Modal */}
      {certModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden border border-[#DAA520] shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#E8DDCB] pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#C85A17]" />
                <h3 className="font-serif font-bold text-xl text-[#2C1A14]">Official HPLC Quality Analysis</h3>
              </div>
              <button
                onClick={() => setCertModalOpen(false)}
                className="text-[#2C1A14] font-extrabold text-sm hover:text-[#C85A17]"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#2C1A14]">
              <div className="p-4 rounded-2xl bg-green-50 border border-green-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-green-900 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  <span>Certificate ID: GT-LAB-2026-9812 | Status: PASSED (100% PURE)</span>
                </div>
                <p className="text-green-800 font-medium">
                  Tested by NABL Accredited Chemical Analytics Lab for heavy metals, synthetic colors, mineral oil adulterants, and volatile solvents.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#F3ECE0] rounded-xl border border-[#E8DDCB]">
                  <span className="font-bold block text-[#2C1A14]">Til Tail (Sesame Purity):</span>
                  <span className="text-[#C85A17] font-extrabold">99.98% Cold Pressed Grade A</span>
                </div>
                <div className="p-3 bg-[#F3ECE0] rounded-xl border border-[#E8DDCB]">
                  <span className="font-bold block text-[#2C1A14]">Mineral Oil Additives:</span>
                  <span className="text-green-700 font-extrabold">0.00% (NONE DETECTED)</span>
                </div>
                <div className="p-3 bg-[#F3ECE0] rounded-xl border border-[#E8DDCB]">
                  <span className="font-bold block text-[#2C1A14]">Smoke Index (Akhand Flame):</span>
                  <span className="text-[#C85A17] font-extrabold">Zero Carbon Soot Emission</span>
                </div>
                <div className="p-3 bg-[#F3ECE0] rounded-xl border border-[#E8DDCB]">
                  <span className="font-bold block text-[#2C1A14]">Consecration Status:</span>
                  <span className="text-[#DAA520] font-extrabold">Vedic Chanting Certified</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setCertModalOpen(false)}
                className="w-full py-3.5 rounded-full bg-[#C85A17] text-white font-extrabold text-sm hover:bg-[#B44E11] transition-colors"
              >
                Close Certificate View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
