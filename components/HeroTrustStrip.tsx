'use client';

import React from 'react';
import { ShieldCheck, Flame, Truck, Award, Sparkles, MapPin } from 'lucide-react';

export default function HeroTrustStrip() {
  const highlights = [
    {
      icon: Flame,
      title: '36-Hour Akhand Flame',
      desc: 'Infused with Bhimseni camphor for zero soot & pure flame',
      badge: 'Guaranteed',
    },
    {
      icon: ShieldCheck,
      title: '100% Lab Certified',
      desc: 'Free from harmful paraffin, chemical dyes & heavy metals',
      badge: 'ISO 22000',
    },
    {
      icon: Truck,
      title: 'Same-Day Dispatch',
      desc: 'Direct from Hanuman Ganj Road, Jumerati Market, Bhopal',
      badge: 'Fast Delivery',
    },
    {
      icon: Award,
      title: 'Trusted by 10,000+ Mandirs',
      desc: 'Official supplier to temple trusts & daily poojan devotees',
      badge: '4.9 ★ Rating',
    },
  ];

  return (
    <section className="bg-[#1C1310] text-[#FAF6EE] py-8 border-y border-[#DAA520]/30 shadow-inner relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#DAA520_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#2C1A14]/80 border border-[#DAA520]/20 hover:border-[#DAA520]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C85A17]/20 border border-[#DAA520]/40 flex items-center justify-center text-[#DAA520] shrink-0 group-hover:scale-110 group-hover:bg-[#C85A17] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-brand font-bold text-sm text-white tracking-wide">
                      {item.title}
                    </h3>
                    <span className="text-[9px] font-extrabold bg-[#DAA520]/20 text-[#DAA520] px-2 py-0.5 rounded-md border border-[#DAA520]/40 uppercase shrink-0 font-sans">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#FAF6EE]/70 font-sans leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
