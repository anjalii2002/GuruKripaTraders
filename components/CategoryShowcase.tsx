'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CategoryShowcase() {
  const categories = [
    {
      id: 'oils',
      title: 'Vardaan Til Tail Oils',
      hindi: 'वरदान दीपक जलाने का तेल',
      subtitle: '36-Hour Soot-Free Akhand Flame',
      image: '/images/vardaan-bottles.jpg',
      tag: 'Bestseller • 1L PET Bottles',
      link: '#catalog',
      // badge: '35% OFF PACKS'
    },
    {
      id: 'jars',
      title: 'Shri Kesari Yellow Jars',
      hindi: 'श्री केसरी वंदना दीप द्रव्य',
      subtitle: 'Airtight Jars for Daily Aarti & Deepam',
      image: '/images/kesari-jars.jpg',
      tag: '250ml, 500ml & 1000ml Jars',
      link: '#catalog',
      // badge: 'TEMPLE GRADE'
    },
    {
      id: 'boxes',
      title: 'Kesari Plus Gift Boxes',
      hindi: 'श्री केसरी प्लस वंदना दीप (बॉक्स पैक)',
      subtitle: 'Royal Box Packs for Diwali & Gifting',
      image: '/images/kesari-boxes.jpg',
      tag: 'Royal Gift Box Edition',
      link: '#catalog',
      // badge: 'FESTIVAL SPECIAL'
    },
    {
      id: 'havan-samagri',
      title: 'Shri Dham Havan Samagri',
      hindi: 'शुद्ध सनातनी हवन सामग्री',
      subtitle: 'Pure Sanatani Havan Mix — 40+ Sacred Herbs',
      image: '/images/shridham-havan.png',
      tag: 'Pure Sanatani Havan',
      link: '#catalog',
    }
  ];

  return (
    <section className="w-full py-8 sm:py-12 bg-[#FAF6EE] border-b border-[#E8DDCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C85A17]/10 border border-[#C85A17]/20 text-[#C85A17] text-[11px] font-extrabold uppercase tracking-widest font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#DAA520]" />
            <span>Sacred Collections</span>
          </div>
          <h2 className="font-brand text-3xl sm:text-5xl text-[#1C1310] font-extrabold leading-tight uppercase tracking-wider">
            Explore Poojan Categories
          </h2>
          <p className="font-serif text-[#3D2319]/80 text-sm sm:text-base font-medium leading-relaxed">
            Formulated according to authentic scriptural canons for daily Aarti, Deepam, and festival Yajna rituals.
          </p>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.link}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E8DDCB] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-96"
            >
              {/* Category Badge */}
              {/* <div className="absolute top-4 left-4 z-10 bg-[#C85A17] text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md">
                {cat.badge}
              </div> */}

              {/* Image Background */}
              <div className="relative w-full h-64 bg-white overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A14]/80 via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-5 bg-white flex-1 flex flex-col justify-between space-y-2 border-t border-[#E8DDCB]">
                <div>
                  <span className="text-[11px] font-bold text-[#C85A17] tracking-wide block uppercase">
                    {cat.tag}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#2C1A14] group-hover:text-[#C85A17] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#3D2319] line-clamp-1 font-medium">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#C85A17] group-hover:translate-x-1 transition-transform">
                  <span>Shop Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
