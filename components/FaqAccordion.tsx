'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion, Flame, Phone } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Product',
      q: 'What makes Vardaan Til Tail superior to commercial poojan oils?',
      a: 'Unlike commercial poojan oils that use cheap mineral oils or synthetic paraffin (which emit thick black carbon soot and stain silver idols), Vardaan Til Tail is formulated from 100% cold-pressed sesame oil infused with Bhimseni camphor. It guarantees an immaculate, soot-free flame for up to 36 hours continuous Akhand Jyoti.',
      icon: '🪔',
    },
    {
      category: 'Ritual',
      q: 'How does the Sacred Gotra & Name Sankalp packaging work?',
      a: 'When you select the "+ Sankalp" option during checkout, our temple priests chant traditional mantras in your family name and Gotra prior to dispatching your consignment. A personalized, high-priest signed Sankalp slip is included inside your package.',
      icon: '🕉️',
    },
    {
      category: 'Offers',
      q: 'What are the Free Shipping and Silver Coin offers?',
      a: 'We offer FREE express shipping across India on all orders above ₹999. Orders above ₹2,999 receive a complimentary, temple-blessed energized Silver Coin as our divine prasadam.',
      icon: '🎁',
    },
    {
      category: 'Product',
      q: 'What is the shelf life of Shri Kesari Deep Dravya Jars?',
      a: 'All Shri Kesari Dravya Jars and Vardaan Til Tail bottles are packaged in leak-proof, UV-protected airtight containers. They retain full aromatic potency and purity for 24 months from the manufacturing date.',
      icon: '⏳',
    },
    {
      category: 'Bulk',
      q: 'Do you offer bulk rates for temple trusts and festival gifting?',
      a: 'Yes! We supply bulk consignments to major temple trusts, festival committees, and corporate clients across India. Click the "Bulk Rates" button on our marketplace section or WhatsApp us directly for wholesale rates.',
      icon: '🏛️',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#2C1A14] relative overflow-hidden">
      
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C85A17]/10 rounded-3xl blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DAA520]/8 rounded-3xl blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C85A17]/20 border border-[#C85A17]/30 text-[#C85A17] text-xs font-extrabold uppercase tracking-widest">
              <MessageCircleQuestion className="w-4 h-4" />
              <span>GOT QUESTIONS?</span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl text-white uppercase tracking-wider leading-none">
              Frequently<br />
              <span className="text-[#C85A17]">Asked</span> Questions
            </h2>
            <p className="text-[#FAF6EE]/60 text-sm font-medium leading-relaxed">
              Everything you need to know about our products, purity certifications, gotra sankalp, and delivery.
            </p>
          </div>

          {/* Right CTA Card */}
          <div className="bg-[#C85A17] rounded-2xl p-6 space-y-3 max-w-xs border border-[#DAA520]/30 shadow-xl">
            <Flame className="w-8 h-8 text-[#DAA520]" />
            <p className="text-white font-bold text-base leading-snug">
              Still have questions? Talk to our Vedic Experts directly.
            </p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#2C1A14] text-xs font-extrabold px-4 py-2.5 rounded-xl hover:bg-[#FAF6EE] transition-colors w-fit"
            >
              <Phone className="w-4 h-4 text-[#C85A17]" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#FAF6EE] border-[#DAA520]/50 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl flex-shrink-0">{faq.icon}</span>
                    <div className="space-y-0.5">
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest block ${isOpen ? 'text-[#C85A17]' : 'text-[#DAA520]/60'}`}>
                        {faq.category}
                      </span>
                      <span className={`font-bold text-sm sm:text-base leading-snug block ${isOpen ? 'text-[#2C1A14]' : 'text-white'}`}>
                        {faq.q}
                      </span>
                    </div>
                  </div>
                  <div className={`w-8 h-8 flex-shrink-0 rounded-xl flex items-center justify-center transition-all ${isOpen ? 'bg-[#C85A17] rotate-180' : 'bg-white/10 group-hover:bg-[#C85A17]/30'}`}>
                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-[#DAA520]'}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="ml-12 pl-4 border-l-2 border-[#C85A17]/40">
                      <p className="text-sm text-[#3D2319] leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
