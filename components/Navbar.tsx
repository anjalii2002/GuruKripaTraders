'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, Menu, X, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar() {
  const { setIsCartOpen, totalItemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#1A0F0B] text-[#FAF6EE] text-xs font-semibold py-2 px-4 border-b border-[#3D2319]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="bg-[#C85A17]/30 text-[#DAA520] px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase border border-[#DAA520]/40">
              Lab Certified
            </span>
            <span className="text-[#FAF6EE]/90 truncate">
              {SITE_CONFIG.bannerAnnouncement}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[#FAF6EE]/70 text-[11px] shrink-0 font-sans">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#DAA520]" />
              <span>Jumerati Market, Bhopal</span>
            </span>
            <span>•</span>
            <span className="text-[#DAA520] font-bold">⭐ {SITE_CONFIG.rating}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#2C1A14] text-[#FAF6EE] shadow-xl border-b border-[#3D2319] transition-all">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo Section */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-[#C85A17] flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:bg-[#B44E11] transition-colors border border-[#DAA520]">
                <span className="font-serif leading-none select-none">🕉️</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-brand font-bold text-xl sm:text-2xl text-white tracking-widest uppercase select-none group-hover:text-[#DAA520] transition-colors">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] font-extrabold text-[#DAA520] tracking-widest uppercase font-sans">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 font-sans font-semibold text-sm text-[#FAF6EE]">
              <Link href="#home" className="hover:text-[#DAA520] transition-colors py-1 font-bold text-[#DAA520] border-b-2 border-[#C85A17]">
                Home
              </Link>
              <Link href="#catalog" className="hover:text-[#DAA520] transition-colors py-1">
                Poojan Oils & Hawan Samagri
              </Link>
              <Link href="#bundle-builder" className="hover:text-[#DAA520] transition-colors py-1 flex items-center gap-1.5">
                <span>Kit Builder</span>
                <span className="bg-[#C85A17] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md border border-[#DAA520]/40">
                  15% OFF
                </span>
              </Link>
              <Link href="#purity" className="hover:text-[#DAA520] transition-colors py-1">
                Purity Guarantee
              </Link>
            </nav>

            {/* Cart & Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#C85A17] hover:bg-[#B44E11] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md active:scale-95 group cursor-pointer border border-[#DAA520]/40 font-sans"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-[#DAA520]" />
                  {totalItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-[#2C1A14] text-[9px] font-extrabold rounded-md px-1.5 py-0.2 animate-pulse">
                      {totalItemCount}
                    </span>
                  )}
                </div>
                <span>Sacred Cart</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform hidden sm:inline" />
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-white hover:bg-[#3D2319] transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#DAA520]" /> : <Menu className="w-6 h-6 text-[#DAA520]" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1A0F0B] border-b border-[#3D2319] px-6 py-4 space-y-3 text-white font-sans">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-[#DAA520]"
            >
              Home
            </Link>
            <Link
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#DAA520]"
            >
              Poojan Oils & Hawan Samagri
            </Link>
            <Link
              href="#bundle-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#DAA520]"
            >
              Kit Builder (15% OFF)
            </Link>
            <Link
              href="#purity"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#DAA520]"
            >
              Purity Guarantee
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
