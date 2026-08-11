'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { Tag, Check, ShoppingBag } from 'lucide-react';

export default function BundleBuilder() {
  const { addToCart } = useCart();

  const [selectedItemIds, setSelectedItemIds] = useState<string[]>(['gk-01', 'gk-02', 'item-01']);
  const [bundleAdded, setBundleAdded] = useState(false);

  const availableProducts = PRODUCTS;

  const toggleItem = (id: string) => {
    if (selectedItemIds.includes(id)) {
      if (selectedItemIds.length === 1) return;
      setSelectedItemIds(selectedItemIds.filter((item) => item !== id));
    } else {
      setSelectedItemIds([...selectedItemIds, id]);
    }
  };

  const selectedProducts = availableProducts.filter((p) => selectedItemIds.includes(p.id));
  const rawTotal = selectedProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleDiscount = Math.round(rawTotal * 0.15);
  const finalBundlePrice = rawTotal - bundleDiscount;

  const handleAddBundleToCart = () => {
    selectedProducts.forEach((prod) => {
      addToCart(prod);
    });
    setBundleAdded(true);
    setTimeout(() => setBundleAdded(false), 2000);
  };

  return (
    <section id="bundle-builder" className="w-full py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#E8DDCB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C85A17]/15 border border-[#C85A17]/30 text-[#C85A17] text-xs font-extrabold uppercase tracking-widest">
            <Tag className="w-4 h-4 text-[#C85A17]" />
            <span>Custom Ritual Kit Builder • Save Extra 15%</span>
          </div>
          <h2 className="font-anton text-4xl sm:text-6xl text-[#2C1A14] leading-tight uppercase tracking-wider">
            Build Your Own Sacred Kit
          </h2>
          <p className="text-[#3D2319] text-base sm:text-lg font-medium">
            Combine pure poojan oils, dravya jars, Kashmiri saffron, and A2 ghee. Unlock an automatic 15% bundle discount + free temple consecration.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Checklist */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availableProducts.map((prod) => {
              const isSelected = selectedItemIds.includes(prod.id);
              return (
                <div
                  key={prod.id}
                  onClick={() => toggleItem(prod.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                    isSelected
                      ? 'bg-white border-[#C85A17] shadow-md ring-2 ring-[#C85A17]/20'
                      : 'bg-white/70 border-[#E8DDCB] opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#F3ECE0] border border-[#E8DDCB] shrink-0">
                    <Image src={prod.image} alt={prod.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <h4 className="font-serif font-bold text-xs text-[#2C1A14] line-clamp-1">
                      {prod.name}
                    </h4>
                    <span className="text-[11px] font-extrabold text-[#C85A17] block">₹{prod.price}</span>
                  </div>

                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                    isSelected ? 'bg-[#C85A17] border-[#C85A17] text-white' : 'border-[#E8DDCB] text-transparent'
                  }`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 bg-[#2C1A14] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#DAA520] shadow-2xl space-y-6">
            
            <div className="space-y-2 border-b border-[#3D2319] pb-4">
              <span className="text-xs font-extrabold text-[#DAA520] uppercase tracking-widest block">
                YOUR CUSTOM BUNDLE ({selectedProducts.length} ITEMS)
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                Custom Sanctum Kit
              </h3>
            </div>

            {/* Items List */}
            <div className="space-y-2.5 text-xs text-white">
              {selectedProducts.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-[#3D2319] p-3 rounded-xl border border-[#4A2C1D]">
                  <span className="font-semibold truncate max-w-[200px]">{item.name}</span>
                  <span className="font-bold font-anton text-white">₹{item.price}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="space-y-2 pt-2 border-t border-[#3D2319] text-xs">
              <div className="flex justify-between text-[#FAF6EE]/80 font-medium">
                <span>Items Subtotal:</span>
                <span>₹{rawTotal}</span>
              </div>
              <div className="flex justify-between text-green-400 font-extrabold">
                <span>Bundle Discount (15% OFF):</span>
                <span>-₹{bundleDiscount}</span>
              </div>
              <div className="flex justify-between text-lg font-serif font-bold text-white pt-2 border-t border-[#3D2319]">
                <span>Bundle Price:</span>
                <span className="text-[#DAA520]">₹{finalBundlePrice}</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleAddBundleToCart}
              className={`w-full py-4 px-6 rounded-full font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                bundleAdded
                  ? 'bg-green-700 text-white'
                  : 'bg-[#C85A17] hover:bg-[#B44E11] text-white active:scale-98 cursor-pointer'
              }`}
            >
              {bundleAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Added Kit to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5 text-[#DAA520]" />
                  <span>Add Kit to Cart (Save ₹{bundleDiscount})</span>
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-[#FAF6EE]/70 font-bold">
              ✨ Free Shipping Included + Optional Gotra Sankalp Slip
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
