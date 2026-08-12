'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion, Flame, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Store Location & Shop Visit',
      q: 'Where is Gurukripa Traders located, and can I buy directly from the shop?',
      a: `Yes! Gurukripa Traders is located at Hanuman Ganj Road, Near Hanuman Mandir, Jumerati Market, Bhopal, MP - 462001. We are open Monday to Saturday from 10:30 AM to 8:30 PM for retail purchases and wholesale counter orders.`,
      icon: '🏪',
    },
    {
      category: 'Vardaan Deepak Oil',
      q: 'What makes Vardaan Til Tail superior to commercial poojan oils?',
      a: 'Unlike commercial oils that use cheap mineral bases or synthetic paraffin (which emit thick black carbon soot and stain silver idols), Vardaan Til Tail is 100% cold-pressed sesame oil infused with pure Bhimseni camphor. It guarantees an immaculate, soot-free flame for up to 36 hours continuous Akhand Jyoti.',
      icon: '🪔',
    },
    {
      category: 'Shri Kesari Dravya Jars & Boxes',
      q: 'What is the difference between Shri Kesari Dravya Jars and Kesari Plus Gift Boxes?',
      a: 'Shri Kesari Dravya Jars come in airtight, UV-protected 500g and 1kg yellow jars designed for daily temple Aarti. Kesari Plus Gift Boxes are royal embossed festival gift packs containing consecrated Kesari Plus Dravya, brass wicks, and scriptural certificates—ideal for Deepavali, Gruha Pravesh, and corporate gifting.',
      icon: '🎁',
    },
    {
      category: 'Shri Dham Hawan Samagri',
      q: 'What ingredients are included in Shri Dham Shudh Hawan Samagri?',
      a: 'Shri Dham Hawan Samagri is a sacred blend of 40+ natural herbs, pure guggal, dry fruits, Bhimseni kapoor, red chandan, and vedic dravya, prepared fresh under the direct supervision of Vedic Acharyas for Hawan, Yajna, and Agnihotra rituals.',
      icon: '🔥',
    },
    {
      category: 'Free Shipping & Offers',
      q: 'What are the Free Shipping and Silver Coin offers?',
      a: 'We offer FREE express shipping across India on all orders above ₹999. Orders above ₹2,999 receive a complimentary, temple-blessed energized Silver Coin as our divine prasadam.',
      icon: '✨',
    },
    {
      category: 'Wholesale & Temple Bulk Orders',
      q: 'Do you offer wholesale rates for temple trusts and bulk buyers?',
      a: 'Yes! Gurukripa Traders is a primary Kirana & Poojan Wholesaler in Bhopal. We supply bulk consignments to major temple trusts, festival pandals, and retail stores across India. Call or WhatsApp us at +91 98765 43210 for wholesale pricing.',
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
              <span>GURUKRIPA TRADERS FAQ</span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl text-white uppercase tracking-wider leading-none">
              Frequently<br />
              <span className="text-[#C85A17]">Asked</span> Questions
            </h2>
            <p className="text-[#FAF6EE]/60 text-sm font-medium leading-relaxed">
              Everything you need to know about our Vardaan oils, Kesari jars, Hawan Samagri, Bhopal shop counter, and delivery across India.
            </p>
          </div>

          {/* Right CTA Card */}
          <div className="bg-[#C85A17] rounded-2xl p-6 space-y-3 max-w-xs border border-[#DAA520]/30 shadow-xl">
            <Flame className="w-8 h-8 text-[#DAA520]" />
            <p className="text-white font-bold text-base leading-snug">
              Have custom bulk requirement? Contact Gurukripa Traders Bhopal directly.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#2C1A14] text-xs font-extrabold px-4 py-2.5 rounded-xl hover:bg-[#FAF6EE] transition-colors w-fit cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#C85A17]" />
              <span>WhatsApp Shop Counter</span>
            </a>
          </div>
        </div>

        {/* FAQ Accordion List */}
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
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group cursor-pointer"
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
