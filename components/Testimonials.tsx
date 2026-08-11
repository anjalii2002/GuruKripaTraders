'use client';

import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/data';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-[#E8DDCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
        
          <h2 className="font-anton text-4xl sm:text-5xl text-[#2C1A14] uppercase tracking-wider leading-tight">
            Loved by Temples & Families Across India
          </h2>
          <p className="text-[#3D2319] text-base sm:text-lg font-medium">
            Hear from revered temple trusts, Vedic scholars, and households who rely on Gurukripa Traders for immaculate daily worship.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAF6EE] rounded-3xl p-8 border border-[#E8DDCB] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              
              <div className="space-y-4">
              
                {/* Quote icon & stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#DAA520]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#DAA520] text-[#DAA520]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C85A17] opacity-40" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#2C1A14] leading-relaxed font-normal italic">
                  &quot;{testimonial.comment}&quot;
                </p>

              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#E8DDCB] flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-2xl overflow-hidden border border-[#DAA520] shrink-0">
                  <Image src={testimonial.avatar} alt={testimonial.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C1A14] flex items-center gap-1">
                    <span>{testimonial.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-700 inline" />
                  </h4>
                  <p className="text-[11px] text-[#C85A17] font-extrabold">{testimonial.role}</p>
                  <p className="text-[10px] text-[#3D2319] font-semibold">{testimonial.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
