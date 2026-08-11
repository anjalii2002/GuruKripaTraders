'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/data';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2C1A14] text-[#FAF6EE] pt-16 pb-10 border-t border-[#DAA520]/40 relative overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-[#3D2319] pb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C85A17] flex items-center justify-center text-white text-xl font-bold border border-[#DAA520]">
                <span className="font-serif">🕉️</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-anton text-xl text-white tracking-wider uppercase">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] font-extrabold text-[#DAA520] tracking-widest uppercase">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF6EE]/80 leading-relaxed font-normal max-w-sm">
              Preserving ancient scriptural purity in cold-pressed sesame oils, A2 bilona ghee, and festival samagri for temples and households worldwide.
            </p>

           
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#DAA520] uppercase tracking-wider">
              Product Lines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FAF6EE]/90 font-medium">
              <li>
                <Link href="#home" className="hover:text-[#DAA520] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-[#DAA520] transition-colors">Vardaan Til Tail Oil</Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-[#DAA520] transition-colors">Shri Kesari Dravya Jars</Link>
              </li>
              <li>
                <Link href="#bundle-builder" className="hover:text-[#DAA520] transition-colors">Kit Builder (15% OFF)</Link>
              </li>
              <li>
                <Link href="#purity" className="hover:text-[#DAA520] transition-colors">Purity Guarantee</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#DAA520] uppercase tracking-wider">
              Sacred Retail Desk
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF6EE]/90 font-medium">
              {SITE_CONFIG.address}
            </p>
            <p className="text-xs sm:text-sm text-[#FAF6EE] font-bold">
              Phone: {SITE_CONFIG.contactPhone} | Email: {SITE_CONFIG.contactEmail}
            </p>
           
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6EE]/60 font-medium">
          <p>© {new Date().getFullYear()} Gurukripa Traders, Inc. All rights reserved.</p>
          
        </div>

      </div>
    </footer>
  );
}
