'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What makes Vardaan Til Tail superior to commercial poojan oils?',
      a: 'Unlike commercial poojan oils that use cheap mineral oils or synthetic paraffin (which emit thick black carbon soot and stain silver idols), Vardaan Til Tail is formulated from 100% cold-pressed sesame oil infused with Bhimseni camphor. It guarantees an immaculate, soot-free flame for up to 36 hours continuous Akhand Jyoti.'
    },
    {
      q: 'How does the Sacred Gotra & Name Sankalp packaging work?',
      a: 'When you select the "+ Sankalp" option during checkout, our temple priests chant traditional mantras in your family name and Gotra prior to dispatching your consignment. A personalized, high-priest signed Sankalp slip is included inside your package.'
    },
    {
      q: 'What are the Free Shipping and Silver Coin offers?',
      a: 'We offer FREE express shipping across India on all orders above ₹999. Orders above ₹2,999 receive a complimentary, temple-blessed energized Silver Coin as our divine prasadam.'
    },
    {
      q: 'What is the shelf life of Shri Kesari Deep Dravya Jars?',
      a: 'All Shri Kesari Dravya Jars and Vardaan Til Tail bottles are packaged in leak-proof, UV-protected airtight containers. They retain full aromatic potency and purity for 24 months from the manufacturing date.'
    },
    {
      q: 'Do you offer bulk rates for temple trusts and festival gifting?',
      a: 'Yes! We supply bulk consignments to major temple trusts, festival committees, and corporate clients across India. Click the "Bulk Rates" button on our marketplace section or WhatsApp us directly for wholesale rates.'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#E8DDCB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C85A17]/15 border border-[#C85A17]/30 text-[#C85A17] text-xs font-extrabold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-[#C85A17]" />
            <span>Retail Help & Support</span>
          </div>
          <h2 className="font-anton text-4xl sm:text-5xl text-[#2C1A14] uppercase tracking-wider leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#3D2319] text-xs sm:text-sm font-medium">
            Everything you need to know about our products, purity certifications, gotra sankalp, and delivery.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DDCB] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#2C1A14] hover:text-[#C85A17] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#C85A17] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#3D2319] leading-relaxed font-normal border-t border-[#E8DDCB]/60 pt-3">
                    {faq.a}
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
