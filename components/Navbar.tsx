'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const { setIsCartOpen, totalItemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#2C1A14] text-[#FAF6EE] shadow-md border-b border-[#3D2319] transition-all">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-[#C85A17] flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:bg-[#B44E11] transition-colors border border-[#DAA520]">
              <span className="font-serif leading-none select-none">🕉️</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-anton text-xl sm:text-2xl text-white tracking-wider uppercase select-none group-hover:text-[#DAA520] transition-colors">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[10px] font-extrabold text-[#DAA520] tracking-widest uppercase">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-[#FAF6EE]">
            <Link href="#home" className="hover:text-[#DAA520] transition-colors py-1 font-bold text-[#DAA520] border-b-2 border-[#C85A17]">
              Home
            </Link>
            <Link href="#catalog" className="hover:text-[#DAA520] transition-colors py-1">
              Poojan Oils
            </Link>
            <Link href="#bundle-builder" className="hover:text-[#DAA520] transition-colors py-1">
              Kit Builder (15% OFF)
            </Link>
            <Link href="#purity" className="hover:text-[#DAA520] transition-colors py-1">
              Purity Guarantee
            </Link>
          </nav>

          {/* Cart & Shop Actions (Rectangular Geometry) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#C85A17] hover:bg-[#B44E11] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md active:scale-95 group cursor-pointer border border-[#DAA520]/40"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#DAA520]" />
                {totalItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-[#2C1A14] text-[9px] font-extrabold rounded-md px-1.5 py-0.2 animate-pulse">
                    {totalItemCount}
                  </span>
                )}
              </div>
              <span className="font-bold">Sacred Cart</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform hidden sm:inline" />
            </button>

            {/* Mobile Menu Toggle */}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A0F0B] border-b border-[#3D2319] px-6 py-4 space-y-3 text-white">
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
            Poojan Oils & Samagri
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
  );
}
