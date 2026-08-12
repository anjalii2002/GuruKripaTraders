'use client';

import React from 'react';

export default function ScriptureQuoteBanner() {
  return (
    <section className="py-8 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C1A14] text-[#FAF6EE] rounded-3xl sm:rounded-4xl p-8 sm:p-12 text-center border border-[#3D2319] shadow-xl relative overflow-hidden space-y-4">
          
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#DAA520_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Scripture Source */}
          <p className="font-serif italic text-xs sm:text-sm text-[#DAA520] tracking-widest uppercase font-semibold">
            — SKANDA PURANA & SHARADA TILAKA TANTRA —
          </p>

          {/* Sanskrit Shloka */}
          <h2 className="font-hindi text-xl sm:text-3xl lg:text-4xl text-white font-bold leading-relaxed tracking-wide max-w-4xl mx-auto">
            "दीपो ज्योतिः परंब्रह्म दीपो ज्योतिर्जनार्दनः। दीपोनु हरतु मे पापं संध्यादीप नमोऽस्तुते ॥"
          </h2>

          {/* English Translation */}
          <p className="font-sans text-xs sm:text-sm text-[#FAF6EE]/80 max-w-3xl mx-auto font-medium leading-relaxed">
            "The lamp flame is the supreme divine light. Lighting an immaculate, soot-free lamp dispels darkness, ignorance, and brings health, prosperity, and peace into your home."
          </p>

        </div>
      </div>
    </section>
  );
}
