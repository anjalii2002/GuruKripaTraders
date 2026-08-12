'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, ArrowRight, Flame, Check, ChevronLeft, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { addToCart, setSankalpProduct } = useCart();
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [added, setAdded] = useState(false);

  const heroTrackRef = useRef<HTMLDivElement>(null);
  const pinnedViewportRef = useRef<HTMLDivElement>(null);

  // 4 Storytelling Scenes
  const scenes = [
    {
      index: '01',
      product: PRODUCTS[0], // Vardaan Til Tail
      tag: 'Bestseller • 36-Hour Akhand Flame',
      hindiTag: 'वरदान दीपक जलाने का तेल',
      headline: 'Vardaan दीपक Oil',
      subtitle: '100% cold-pressed sesame oil infused with Bhimseni camphor. Guarantees a soot-free 36-hour flame.',
      highlight: '36-Hour Continuous Soot-Free Flame',
    },
    {
      index: '02',
      product: PRODUCTS[1], // Shri Kesari Yellow Jars
      tag: 'Temple Grade • Consecrated Dravya',
      hindiTag: 'केसरी वंदना दीप द्रव्य',
      headline: 'Shri Kesari Yellow Dravya Jars',
      subtitle: 'Airtight UV-protected yellow jars delivering a radiant golden flame for daily Aarti & Deepam.',
      highlight: 'Radiant Golden Flame & Aromatic Purity',
    },
    {
      index: '03',
      product: PRODUCTS[2], // Kesari Plus Gift Boxes
      tag: 'Festival Special • Royal Edition',
      hindiTag: 'श्री केसरी प्लस वंदना दीप (बॉक्स पैक)',
      headline: 'Kesari Plus Gift Boxes',
      subtitle: 'Luxury box edition designed for Deepavali gifting and auspicious family celebrations.',
      highlight: 'Royal Box Pack for Auspicious Gifting',
    },
    {
      index: '04',
      product: PRODUCTS[3] || PRODUCTS[0], // Shri Dham Havan Samagri
      tag: 'Pure Sanatani Havan • 40+ Sacred Herbs',
      hindiTag: 'शुद्ध सनातनी हवन सामग्री',
      headline: 'Shri Dham Havan Samagri',
      subtitle: 'Sacred blend of 40+ natural herbs, guggal, kapoor & chandan for pure Hawan & Yajna rituals.',
      highlight: 'Prepared Under Vedic Acharya Supervision',
    },
  ];

  // GSAP Desktop Pinned Scroll Setup
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

  // Automatic product scrolling interval for mobile view (cycles every 3.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        setActiveSceneIndex((prev) => (prev + 1) % scenes.length);
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [scenes.length]);

  const currentScene = scenes[activeSceneIndex] || scenes[0];
  const currentProduct = currentScene?.product || PRODUCTS[0];

  const handleAddToCart = () => {
    if (currentProduct) {
      addToCart(currentProduct);
      setAdded(true);
      setTimeout(() => setAdded(false), 1800);
    }
  };

  const jumpToScene = (idx: number) => {
    const targetIdx = Math.max(0, Math.min(scenes.length - 1, idx));
    setActiveSceneIndex(targetIdx);
    if (heroTrackRef.current && window.innerWidth >= 1024) {
      const trackHeight = heroTrackRef.current.offsetHeight;
      const targetScroll = heroTrackRef.current.offsetTop + (targetIdx / scenes.length) * trackHeight;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  // Parallax calculations for desktop scroll
  const sceneLength = 1 / scenes.length;
  const currentSceneStart = activeSceneIndex * sceneLength;
  const sceneProgress = Math.min(1, Math.max(0, (scrollProgress - currentSceneStart) / sceneLength));
  const translateY = (sceneProgress - 0.5) * 55;
  const rotateDeg = (sceneProgress - 0.5) * 7;
  const bgScale = 1 + (sceneProgress - 0.5) * 0.06;

  return (
    <>
      {/* ==========================================
          MOBILE HERO (Dedicated mobile-first layout)
         ========================================== */}
      <section className="block lg:hidden w-full bg-[#FAF6EE] py-6 px-4 border-b border-[#E8DDCB] relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[#C85A17]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md mx-auto space-y-5 relative z-10 text-center">

          {/* Watermark Brand Title */}
          <div>
            <h1 className="font-anton text-4xl text-[#2C1A14] tracking-widest uppercase leading-none">
              GURU KRIPA TRADERS
            </h1>
            <p className="text-[10px] font-extrabold text-[#C85A17] tracking-widest uppercase mt-1">
              CANONS OF SCRIPTURAL PURITY
            </p>
          </div>



          {/* Mobile Product Card / Showcase */}
          <div className="bg-white rounded-3xl p-5 border border-[#E8DDCB] shadow-lg relative space-y-4">

            {/* Left/Right Arrow Touch Navigation */}
            <div className="flex items-center justify-between absolute inset-x-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <button
                onClick={() => jumpToScene(activeSceneIndex - 1)}
                disabled={activeSceneIndex === 0}
                className={`w-9 h-9 rounded-xl bg-white/90 border border-[#E8DDCB] text-[#2C1A14] flex items-center justify-center shadow-md pointer-events-auto transition-all ${
                  activeSceneIndex === 0 ? 'opacity-30' : 'active:scale-95'
                }`}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => jumpToScene(activeSceneIndex + 1)}
                disabled={activeSceneIndex === scenes.length - 1}
                className={`w-9 h-9 rounded-xl bg-white/90 border border-[#E8DDCB] text-[#2C1A14] flex items-center justify-center shadow-md pointer-events-auto transition-all ${
                  activeSceneIndex === scenes.length - 1 ? 'opacity-30' : 'active:scale-95'
                }`}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Centered Product Cutout Image */}
            <div className="relative w-full h-[260px] mx-auto bg-[#FAF6EE] rounded-2xl p-4 flex items-center justify-center border border-[#E8DDCB]/50">
              <Image
                src={currentProduct?.image || '/images/vardaan-bottles.png'}
                alt={currentProduct?.name || 'Product'}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Product Meta */}
            <div className="space-y-2 text-center pt-1">
              <span className="text-[10px] font-extrabold text-[#C85A17] uppercase tracking-widest block">
                {currentScene.tag}
              </span>

              <h2 className="font-anton text-2xl text-[#2C1A14] uppercase tracking-wide leading-tight">
                {currentScene.headline}
              </h2>

              <p className="text-xs text-[#3D2319] font-medium leading-relaxed">
                {currentScene.subtitle}
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FAF6EE] border border-[#E8DDCB] text-[11px] font-bold text-[#2C1A14]">
                <Flame className="w-3.5 h-3.5 text-[#C85A17]" />
                <span>{currentScene.highlight}</span>
              </div>
            </div>

            {/* Pricing & Add to Cart */}
            <div className="pt-2 border-t border-[#E8DDCB] flex items-center justify-between gap-3">
              <div className="text-left">
                <span className="font-anton text-2xl text-[#2C1A14] block leading-none">
                  ₹{currentScene.product.price}
                </span>
                {currentScene.product.originalPrice && (
                  <span className="text-[11px] text-[#3D2319] line-through font-medium">
                    ₹{currentScene.product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleAddToCart}
                  className={`px-5 py-3 rounded-2xl font-extrabold text-xs transition-all shadow-md flex items-center gap-1.5 ${
                    added
                      ? 'bg-green-700 text-white'
                      : 'bg-[#C85A17] hover:bg-[#B44E11] text-white active:scale-95'
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
                    </>
                  )}
                </button>

                {currentScene.product.sankalpOption && (
                  <button
                    onClick={() => setSankalpProduct(currentScene.product)}
                    className="p-3 rounded-2xl bg-[#2C1A14] text-[#DAA520] hover:bg-[#3D2319] transition-all"
                    title="Add Sankalp"
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>

          <p className="text-[11px] text-[#3D2319] font-bold opacity-75">
             Tap buttons above or swipe products to explore
          </p>

        </div>

      </section>

      {/* ==========================================
          DESKTOP HERO (Pinned 450vh Storytelling)
         ========================================== */}
      <div ref={heroTrackRef} className="hidden lg:block relative w-full h-[450vh] bg-[#FAF6EE]">
        
        {/* Sticky Viewport Pinned Container */}
        <div
          ref={pinnedViewportRef}
          className="w-full h-screen sticky top-0 overflow-hidden bg-[#FAF6EE] flex flex-col justify-between pt-3 pb-5 px-8 border-b border-[#E8DDCB] relative"
        >
          {/* Ambient Soft Glow Orbs */}
          <div className="absolute top-10 left-1/3 w-[450px] h-[450px] bg-[#C85A17]/10 rounded-3xl blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#DAA520]/15 rounded-3xl blur-3xl pointer-events-none" />

          {/* Giant Watermark Display Title Behind Product */}
          <div className="w-full text-center z-10 my-auto pointer-events-none select-none">
            <h1 className="font-brand text-[9.5rem] text-[#1C1310] font-extrabold leading-none uppercase tracking-widest opacity-90">
              GURU KRIPA
            </h1>
            <p className="text-xs font-extrabold text-[#C85A17] tracking-widest uppercase mt-1 font-sans">
              VARDAAN OIL • KESARI VANDANA DEEP DRAVYA • HAWAN SAMAGRI
            </p>
          </div>

          {/* LEFT-SIDE PRODUCT SHOWCASE */}
          <div className="absolute left-[28%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            {scenes.map((scene, idx) => {
              const isActive = activeSceneIndex === idx;
              const isPast = idx < activeSceneIndex;

              const activeTransform = `translate(-50%, calc(-50% + ${translateY}px)) rotate(${rotateDeg}deg) scale(${bgScale})`;
              const pastTransform = `translate(-50%, calc(-50% + 80px)) rotate(10deg) scale(0.82)`;
              const futureTransform = `translate(-50%, calc(-50% - 80px)) rotate(-10deg) scale(0.82)`;

              const currentTransform = isActive ? activeTransform : isPast ? pastTransform : futureTransform;

              return (
                <div
                  key={scene.index}
                  className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out pointer-events-none"
                  style={{
                    transform: currentTransform,
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="relative w-[340px] h-[400px] filter drop-shadow-[0_20px_35px_rgba(44,26,20,0.32)]">
                    <Image
                      src={scene.product?.image || '/images/vardaan-bottles.png'}
                      alt={scene.product?.name || 'Product'}
                      fill
                      className="object-contain"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Open Content Overlays: Right-Aligned Text */}
          <div className="w-full max-w-7xl mx-auto flex-1 grid grid-cols-12 gap-8 items-center z-20 pointer-events-auto">
            
            {/* Right Text Column */}
            <div className="col-span-6 col-start-6 space-y-3.5">
              
              <div className="space-y-0.5">
                <span className="text-xs font-extrabold text-[#C85A17] uppercase tracking-widest block">
                  {currentScene.tag}
                </span>
                <p className="text-xs font-bold text-[#DAA520] font-serif">
                  {currentScene.hindiTag}
                </p>
              </div>

              <h2 className="font-brand text-4xl sm:text-5xl font-extrabold text-[#1C1310] leading-tight uppercase tracking-wide">
                {currentScene.headline}
              </h2>

              <p className="font-serif text-[#3D2319]/80 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
                {currentScene.subtitle}
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E8DDCB] shadow-xs">
                <Flame className="w-4 h-4 text-[#C85A17] shrink-0" />
                <span className="text-xs font-bold text-[#1C1310] font-sans">
                  {currentScene.highlight}
                </span>
              </div>

              {/* Pricing & CTA Actions */}
              <div className="pt-2 flex items-center gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-3xl sm:text-4xl font-extrabold text-[#1C1310]">
                    ₹{currentScene.product?.price || currentProduct?.price || 249}
                  </span>
                  {(currentScene.product?.originalPrice || currentProduct?.originalPrice) && (
                    <span className="text-xs text-[#3D2319]/60 line-through font-semibold font-sans">
                      ₹{currentScene.product?.originalPrice || currentProduct?.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`px-6 py-3 rounded-xl font-extrabold text-sm transition-all shadow-md flex items-center gap-2 font-sans ${
                    added
                      ? 'bg-green-700 text-white'
                      : 'bg-[#C85A17] hover:bg-[#B44E11] text-white active:scale-95 cursor-pointer border border-[#DAA520]/40'
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

          </div>



        </div>
      </div>
    </>
  );
}
