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
      a: `Yes! Gurukripa Traders is located at Hanuman Ganj Road, Near Hanuman Mandir, Jumerati Market, Bhopal, MP - 462001. We are open Monday to Saturday from 10:30 AM to 8:30 PM for retail purchases and wholesale counter orders.`,
      icon: '🏪',
    },
    {
      category: 'Vardaan Deepak Oil Purity',
      q: 'What makes Vardaan Til Tail superior to commercial poojan oils?',
      a: 'Unlike commercial oils that use cheap mineral bases or synthetic paraffin (which emit thick black carbon soot and stain silver idols), Vardaan Til Tail is 100% cold-pressed sesame oil infused with pure Bhimseni camphor. It guarantees an immaculate, soot-free flame for up to 36 hours continuous Akhand Jyoti.',
      icon: '🪔',
    },
    {
      category: 'Orders, Shipping & Wholesale',
      q: 'Do you offer free delivery and bulk wholesale pricing for temple trusts?',
      a: 'Yes! We offer FREE express shipping across India on all orders above ₹999. For temple trusts, festival pandals, and wholesale bulk buyers, Gurukripa Traders provides direct counter wholesale pricing. Call or WhatsApp us at +91 98765 43210.',
      icon: '✨',
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 bg-[#2C1A14] relative overflow-hidden">
      
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C85A17]/10 rounded-3xl blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DAA520]/8 rounded-3xl blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C85A17]/20 border border-[#DAA520]/40 text-[#DAA520] text-[11px] font-extrabold uppercase tracking-widest font-sans">
            <MessageCircleQuestion className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-brand text-3xl sm:text-5xl text-white font-extrabold leading-tight uppercase tracking-wider">
            Clear Answers for Devotees
          </h2>
          <p className="font-serif text-[#FAF6EE]/80 text-sm sm:text-base font-medium">
            Everything you need to know about our consecrated oils, Bhopal store location, and delivery orders.
          </p>
        </div>

        {/* Accordion Items List (Exactly 3) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1C1310] border-[#DAA520]/60 shadow-lg'
                    : 'bg-[#3D2319]/40 border-[#3D2319] hover:border-[#DAA520]/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xl shrink-0">{faq.icon}</span>
                    <span className="font-brand font-bold text-base sm:text-lg text-white tracking-wide">
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#C85A17] text-white rotate-180' : 'bg-[#2C1A14] text-[#DAA520]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#FAF6EE]/85 leading-relaxed font-sans border-t border-[#3D2319]/80 space-y-3">
                    <p>{faq.a}</p>
                    <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#DAA520]">
                      <Flame className="w-3.5 h-3.5 text-[#C85A17]" />
                      <span>{faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Support Strip */}
        <div className="p-5 rounded-2xl bg-[#1C1310] border border-[#DAA520]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C85A17]/20 border border-[#DAA520]/40 flex items-center justify-center text-[#DAA520] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="font-brand font-bold text-white text-sm block">Have Wholesale or Custom Order Questions?</span>
              <p className="text-xs text-[#FAF6EE]/70 font-sans">Contact Gurukripa Traders Bhopal directly on WhatsApp or Call</p>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#C85A17] hover:bg-[#B44E11] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0 border border-[#DAA520]/40 font-sans"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
