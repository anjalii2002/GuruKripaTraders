'use client';

import React from 'react';
import { Check, X, Flame, ShieldAlert, Sparkles, Award } from 'lucide-react';

export default function PoojaOilComparison() {
  const comparisonData = [
    {
      feature: 'Sesame Base Purity',
      ordinary: 'Adulterated with Cheap Paraffin & Mineral Oils',
      vardaan: '100% Pure Cold-Pressed Sesame (Til) Oil',
    },
    {
      feature: 'Flame & Flame Duration',
      ordinary: 'Flickers quickly & dies in 4–6 hours',
      vardaan: 'Guaranteed 36-Hour Continuous Akhand Flame',
    },
    {
      feature: 'Smoke & Black Soot Emission',
      ordinary: 'Emits thick black toxic smoke that darkens mandir walls',
      vardaan: 'Zero Black Soot — Clean & Pure Spiritual Combustion',
    },
    {
      feature: 'Natural Aroma & Sanctity',
      ordinary: 'Pungent chemical odor that causes irritation',
      vardaan: 'Infused with Original Bhimseni Camphor for Sacred Fragrance',
    },
    {
      feature: 'Scriptural Compliance',
      ordinary: 'Unspecified industrial blending process',
      vardaan: 'Prepared according to Sanatan Agama & Shastra Canons',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C85A17]/10 border border-[#C85A17]/20 text-[#C85A17] text-[11px] font-extrabold uppercase tracking-widest font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#DAA520]" />
            <span>Scriptural Canons vs Market Adulteration</span>
          </div>
          <h2 className="font-brand text-3xl sm:text-5xl font-extrabold text-[#1C1310] leading-tight uppercase tracking-wider">
            Why Choose Vardaan Til Tail?
          </h2>
          <p className="font-serif text-[#3D2319]/80 text-sm sm:text-base font-medium leading-relaxed">
            See how Gurukripa’s consecrated sesame oil outperforms ordinary market poojan oils in flame duration, air purity, and scriptural sanctity.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <div className="bg-white rounded-3xl border border-[#E8DDCB] shadow-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#2C1A14] text-white p-4 sm:p-6 items-center text-xs sm:text-sm font-extrabold border-b border-[#3D2319]">
            <div className="col-span-4 font-brand uppercase tracking-wider text-[#DAA520]">
              Purity Criteria
            </div>
            <div className="col-span-4 text-center text-[#FAF6EE]/70 font-sans flex items-center justify-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>Ordinary Market Oils</span>
            </div>
            <div className="col-span-4 text-center text-[#DAA520] font-brand uppercase tracking-wider flex items-center justify-center gap-1.5">
              <Flame className="w-4 h-4 text-[#C85A17] animate-pulse" />
              <span>Vardaan Til Tail ✨</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-[#E8DDCB]">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center text-xs sm:text-sm hover:bg-[#FAF6F0]/50 transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-4 font-bold text-[#1C1310] font-sans">
                  {row.feature}
                </div>

                {/* Ordinary Oil */}
                <div className="col-span-4 text-center text-[#3D2319]/80 px-2 flex items-center justify-center gap-1.5 font-sans">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="line-through decoration-red-400/60">{row.ordinary}</span>
                </div>

                {/* Vardaan Til Tail */}
                <div className="col-span-4 text-center text-[#1C1310] font-bold px-2 flex items-center justify-center gap-1.5 bg-[#C85A17]/5 py-2 rounded-xl border border-[#C85A17]/20 font-sans">
                  <Check className="w-4 h-4 text-green-600 shrink-0 font-extrabold" />
                  <span className="text-[#C85A17]">{row.vardaan}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust CTA */}
          <div className="p-6 bg-[#1A0F0B] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#3D2319]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C85A17] flex items-center justify-center text-white shrink-0 border border-[#DAA520]">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-0.5">
                <span className="font-brand font-bold text-white uppercase text-sm block">
                  100% Satisfaction & Purity Refund Guarantee
                </span>
                <p className="text-[#FAF6EE]/70 font-sans">
                  If your Aarti flame leaves black soot, we refund 100% of your order immediately.
                </p>
              </div>
            </div>

            <a
              href="#catalog"
              className="px-6 py-3 rounded-xl bg-[#C85A17] hover:bg-[#B44E11] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0 border border-[#DAA520]/40 font-sans"
            >
              Order Consecrated Vardaan Oil
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
