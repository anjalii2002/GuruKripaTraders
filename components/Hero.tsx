'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, Sparkles, ArrowRight, ShieldCheck, Flame, Check, Award, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { addToCart, setIsCartOpen } = useCart();
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [added, setAdded] = useState(false);

  const heroTrackRef = useRef<HTMLDivElement>(null);
  const pinnedViewportRef = useRef<HTMLDivElement>(null);

  // 5 Storytelling Scenes
  const scenes = [
    {
      index: '01',
      product: PRODUCTS[0], // Vardaan Til Tail
      tag: 'Bestseller • 36-Hour Akhand Flame',
      hindiTag: 'वरदान दीपक जलाने का तेल',
      headline: 'Vardaan Til Tail दीपक Oil',
      subtitle: 'Formulated from 100% cold-pressed sesame oil infused with Bhimseni camphor. Guaranteed zero carbon soot buildup for home & temple shrines.',
      badgeText: '35% OFF PACKS',
      highlight: '36-Hour Continuous Soot-Free Flame',
    },
    {
      index: '02',
      product: PRODUCTS[1], // Shri Kesari Yellow Jars
      tag: 'Temple Grade • Consecrated Dravya',
      hindiTag: 'श्री केसरी वंदना दीप द्रव्य (पीला जार)',
      headline: 'Shri Kesari Yellow Dravya Jars',
      subtitle: 'Packed in UV-protected airtight jars (250ml, 500ml & 1000ml). Delivers a radiant golden flame for daily Aarti & Deepam rituals.',
      badgeText: 'AIRTIGHT LEAKPROOF',
      highlight: 'Radiant Golden Flame & Aromatic Purity',
    },
    {
      index: '03',
      product: PRODUCTS[2], // Kesari Plus Gift Boxes
      tag: 'Festival Special • Royal Edition',
      hindiTag: 'श्री केसरी प्लस वंदना दीप (बॉक्स पैक)',
      headline: 'Kesari Plus Gift Boxes',
      subtitle: 'Luxury box edition designed for Deepavali gifting and auspicious family celebrations. Includes consecrated brass deepam accessories.',
      badgeText: 'FESTIVAL SPECIAL',
      highlight: 'Royal Box Pack for Auspicious Gifting',
    },
    {
      index: '04',
      product: PRODUCTS[3], // Saffron & A2 Ghee
      tag: 'Scriptural Purity • Heritage Edition',
      hindiTag: 'कश्मीरी मोंगरा केसर एवं वैदिक बिलोना घृत',
      headline: 'Kashmiri Saffron & A2 Gir Cow Ghee',
      subtitle: 'Handpicked Grade A1 Kashmiri Saffron filaments paired with traditional Bilona method A2 Gir Cow Vedic Ghee.',
      badgeText: 'A2 BILONA METHOD',
      highlight: '100% Pure Grade A1 Kashmiri Saffron',
    },
    {
      index: '05',
      product: PRODUCTS[4], // Curated Samagri Trunk
      tag: 'Complete Ritual Trunk • 32 Items',
      hindiTag: 'शाही पूजन सामग्री ट्रंक',
      headline: 'Curated Shahi Poojan Trunk',
      subtitle: 'Cedarwood trunk filled with 32 essential consecrated samagri items for Hawan, Lakshmi Pujan, and milestone Mahayagnas.',
      badgeText: '32 ESSENTIAL ITEMS',
      highlight: 'Full Cedarwood Ritual Box Kit',
    },
  ];

  useEffect(() => {
    if (!heroTrackRef.current || !pinnedViewportRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroTrackRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinnedViewportRef.current,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          const totalScenes = scenes.length;
          const newIndex = Math.min(
            totalScenes - 1,
            Math.floor(progress * totalScenes)
          );
          setActiveSceneIndex(newIndex);
        },
      });
    }, heroTrackRef);

    return () => ctx.revert();
  }, [scenes.length]);

  const currentScene = scenes[activeSceneIndex];

  const handleAddToCart = () => {
    addToCart(currentScene.product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const jumpToScene = (idx: number) => {
    if (!heroTrackRef.current) return;
    const trackHeight = heroTrackRef.current.offsetHeight;
    const targetScroll = heroTrackRef.current.offsetTop + (idx / scenes.length) * trackHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div ref={heroTrackRef} className="relative w-full h-[450vh] bg-[#FAF6EE]">
      
      {/* Sticky Viewport Pinned Container */}
      <div
        ref={pinnedViewportRef}
        className="w-full h-screen sticky top-0 overflow-hidden bg-[#FAF6EE] flex flex-col justify-between pt-4 pb-6 px-4 sm:px-6 lg:px-8 border-b border-[#E8DDCB] relative"
      >
        {/* Ambient Soft Glow Orbs */}
        <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-[#C85A17]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#DAA520]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Controls Bar */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-20 pt-2">
          
          {/* <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C85A17]/15 border border-[#C85A17]/30 text-[#C85A17] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C85A17] animate-pulse" />
            <span>SCROLL-DRIVEN PRODUCT STORYTELLING</span>
          </div> */}

          {/* Scene Counter Badge */}
          {/* <div className="flex items-center gap-3">
            <div className="font-anton text-2xl text-[#2C1A14] tracking-wider">
              {currentScene.index} <span className="text-xs text-[#C85A17] font-sans font-bold">/ 05</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-[#2C1A14] px-3.5 py-1.5 rounded-xl text-white text-xs font-bold border border-[#DAA520]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DAA520]" />
              <span>{currentScene.badgeText}</span>
            </div>
          </div> */}

        </div>

        {/* Giant Display Title Behind Product */}
        <div className="w-full text-center z-10 my-auto pointer-events-none select-none">
          <h1 className="font-anton text-6xl sm:text-9xl lg:text-[11rem] text-[#2C1A14] leading-none uppercase tracking-widest opacity-95">
            GURUKRIPA
          </h1>
          <p className="text-xs sm:text-sm font-extrabold text-[#C85A17] tracking-widest uppercase mt-1">
            VARDAAN TIL TAIL • SHRI KESARI DEEP DRAVYA • SACRED SAMAGRI
          </p>
        </div>

        {/* DEAD-CENTER PURE CUTOUT PRODUCT SHOWCASE (NO ROTATION - SMOOTH SCROLL FADE & SCALE TRANSITION) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          {scenes.map((scene, idx) => {
            const isActive = activeSceneIndex === idx;
            return (
              <div
                key={scene.index}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-90 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="relative w-[280px] h-[340px] sm:w-[380px] sm:h-[460px] lg:w-[440px] lg:h-[520px] filter drop-shadow-[0_20px_30px_rgba(44,26,20,0.35)]">
                  <Image
                    src={scene.product.image}
                    alt={scene.product.name}
                    fill
                    className="object-contain"
                    priority={idx === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Open Content Overlays (NO BACKGROUND CARD BOXES) */}
        <div className="w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-20 pointer-events-auto">
          
          {/* Left Text Column (Open Layout) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 max-w-lg">
            
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-[#C85A17] uppercase tracking-widest block">
                {currentScene.tag}
              </span>
              <p className="text-xs font-bold text-[#DAA520] font-serif">
                {currentScene.hindiTag}
              </p>
            </div>

            <h2 className="font-anton text-3xl sm:text-5xl text-[#2C1A14] leading-tight uppercase tracking-wider drop-shadow-xs">
              {currentScene.headline}
            </h2>

            <p className="text-[#3D2319] text-xs sm:text-sm leading-relaxed font-semibold max-w-md">
              {currentScene.subtitle}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E8DDCB] shadow-xs">
              <Flame className="w-4 h-4 text-[#C85A17] shrink-0" />
              <span className="text-xs font-bold text-[#2C1A14]">
                {currentScene.highlight}
              </span>
            </div>

            {/* Pricing & CTA Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="font-anton text-3xl text-[#2C1A14]">
                  ₹{currentScene.product.price}
                </span>
                {currentScene.product.originalPrice && (
                  <span className="text-xs text-[#3D2319] line-through font-medium">
                    ₹{currentScene.product.originalPrice}
                  </span>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                className={`px-6 py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 ${
                  added
                    ? 'bg-green-700 text-white'
                    : 'bg-[#C85A17] hover:bg-[#B44E11] text-white active:scale-95 cursor-pointer'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#DAA520]" />
                    <span>Add to Cart</span>
                    <ArrowRight className="w-4 h-4 text-[#DAA520]" />
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Flank: Open Purity Stat */}
          <div className="hidden lg:flex lg:col-span-4 lg:col-start-9 flex-col justify-between space-y-4 text-right">
            <div>
              <span className="text-[10px] font-extrabold text-[#C85A17] uppercase tracking-widest block">
                SCRIPTURAL PURITY RATING
              </span>
              <span className="font-anton text-6xl text-[#2C1A14] block mt-1">99.8%</span>
            </div>

            <div className="-space-x-3 flex items-center justify-end pt-1">
              <div className="relative w-10 h-10 rounded-full border-2 border-[#DAA520] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Devotee" fill className="object-cover" />
              </div>
              <div className="relative w-10 h-10 rounded-full border-2 border-[#DAA520] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Pundit" fill className="object-cover" />
              </div>
              <div className="relative w-10 h-10 rounded-full border-2 border-[#DAA520] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" alt="Temple Priest" fill className="object-cover" />
              </div>
            </div>

            <p className="text-xs text-[#3D2319] font-semibold leading-relaxed max-w-xs ml-auto">
              Verified by 50,000+ temple trusts and households across India.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-[#2C1A14] hover:bg-[#3D2319] text-[#DAA520] text-xs font-bold transition-all shadow-xs border border-[#DAA520]/40"
              >
                Open Sacred Cart
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Interactive Progress Bar & Controls */}
        <div className="w-full max-w-7xl mx-auto z-20 space-y-2 pt-2">
          
          <div className="flex items-center justify-between text-xs font-bold text-[#3D2319]">
            <span className="flex items-center gap-1.5 text-[#C85A17]">
              <Award className="w-4 h-4" />
              <span>Scroll Story Progress: {Math.round(scrollProgress * 100)}%</span>
            </span>
            <span className="text-[11px] text-[#2C1A14] font-semibold hidden sm:inline flex items-center gap-1">
              <span>Scroll down to switch products</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#C85A17]" />
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full bg-[#E8DDCB] h-2.5 rounded-lg overflow-hidden relative">
            <div
              className="bg-[#C85A17] h-full transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Scene Buttons */}
          <div className="grid grid-cols-5 gap-2 pt-1">
            {scenes.map((s, idx) => (
              <button
                key={s.index}
                onClick={() => jumpToScene(idx)}
                className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-extrabold transition-all truncate border ${
                  activeSceneIndex === idx
                    ? 'bg-[#2C1A14] text-[#DAA520] border-[#DAA520] shadow-sm scale-102'
                    : 'bg-white text-[#3D2319] border-[#E8DDCB] hover:bg-[#F3ECE0]'
                }`}
              >
                {s.index}. {s.product.name.split(' ')[0]}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
