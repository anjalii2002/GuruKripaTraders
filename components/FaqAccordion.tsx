'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion, Flame, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Exactly 3 authentic FAQs
  const faqs = [
    {
      category: 'Store Location & Shop Visit',
      q: 'Where is Gurukripa Traders located, and can I buy directly from the shop?',
      a: `Yes! Gurukripa Traders is located at Hanuman Ganj Road, Near Hanuman Mandir, Jumerati Market, Bhopal, MP - 462001. Open Mon–Sat 10:30 AM to 8:30 PM for retail purchases and wholesale counter orders.`,
      icon: '🏪',
    },
    {
      category: 'Vardaan Deepak Oil Purity',
      q: 'What makes Vardaan Til Tail superior to commercial poojan oils?',
      a: 'Unlike commercial oils that use mineral bases or synthetic paraffin (emitting black carbon soot), Vardaan Til Tail is 100% cold-pressed sesame oil infused with pure Bhimseni camphor. Guarantees an immaculate, soot-free flame for up to 36 hours.',
      icon: '🪔',
    },
    {
      category: 'Orders, Shipping & Wholesale',
      q: 'Do you offer free delivery and bulk wholesale pricing for temple trusts?',
      a: 'Yes! FREE express shipping across India on orders above ₹999. For temple trusts and bulk buyers, Gurukripa Traders provides direct counter wholesale pricing. Call/WhatsApp at +91 98765 43210.',
      icon: '✨',
    },
  ];

  return (
    <section className="w-full py-6 sm:py-8 bg-[#2C1A14] relative overflow-hidden">
      
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C85A17]/10 rounded-3xl blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-5">

        {/* Compact Section Header */}
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#C85A17]/20 border border-[#DAA520]/40 text-[#DAA520] text-[10px] font-extrabold uppercase tracking-widest font-sans">
            <MessageCircleQuestion className="w-3 h-3" />
            <span>FAQs</span>
          </div>
          <h2 className="font-brand text-2xl sm:text-3xl text-white font-extrabold leading-tight uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Compact Accordion Items List */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1C1310] border-[#DAA520]/60 shadow-md'
                    : 'bg-[#3D2319]/40 border-[#3D2319] hover:border-[#DAA520]/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between text-left gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base shrink-0">{faq.icon}</span>
                    <span className="font-brand font-bold text-sm sm:text-base text-white tracking-wide">
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#C85A17] text-white rotate-180' : 'bg-[#2C1A14] text-[#DAA520]'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 sm:px-5 text-xs sm:text-sm text-[#FAF6EE]/85 leading-relaxed font-sans border-t border-[#3D2319]/80 space-y-2">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Compact Contact Support Strip */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#1C1310] border border-[#DAA520]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C85A17]/20 border border-[#DAA520]/40 flex items-center justify-center text-[#DAA520] shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-brand font-bold text-white block">Wholesale or Custom Orders?</span>
              <p className="text-[11px] text-[#FAF6EE]/70 font-sans">Contact Gurukripa Traders Bhopal directly</p>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#C85A17] hover:bg-[#B44E11] text-white text-[11px] font-extrabold uppercase tracking-wider transition-all shadow-sm active:scale-95 shrink-0 border border-[#DAA520]/40 font-sans"
          >
            WhatsApp Support
          </a>
        </div>

      </div>
    </section>
  );
}
