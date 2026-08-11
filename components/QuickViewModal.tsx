'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { ProductVariant } from '@/lib/types';
import { X, Star, ShieldCheck, Sparkles, Check, ShoppingBag } from 'lucide-react';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, setSankalpProduct } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    quickViewProduct && quickViewProduct.variants && quickViewProduct.variants.length > 0
      ? quickViewProduct.variants[0]
      : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const activePrice = selectedVariant ? selectedVariant.price : quickViewProduct.price;
  const activeOriginalPrice = selectedVariant ? selectedVariant.originalPrice : quickViewProduct.originalPrice;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(quickViewProduct, selectedVariant);
    }
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden border border-[#DAA520] shadow-2xl max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-white/90 backdrop-blur-md text-[#2C1A14] hover:bg-[#F3ECE0] transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Side */}
        <div className="md:w-1/2 relative h-60 md:h-auto bg-[#F3ECE0] min-h-[240px] border-b md:border-b-0 md:border-r border-[#E8DDCB]">
          <Image
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            fill
            className="object-contain p-6"
          />
          {quickViewProduct.badge && (
            <div className="absolute top-4 left-4 z-10 bg-[#C85A17] text-white text-xs font-bold px-3 py-1 rounded-xl shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#DAA520]" />
              <span>{quickViewProduct.badge}</span>
            </div>
          )}
        </div>

        {/* Product Details Side */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          
          <div className="space-y-4">
            
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold text-[#C85A17] uppercase tracking-widest text-[10px]">
                {quickViewProduct.category}
              </span>
              <div className="flex items-center gap-1 bg-[#DAA520]/20 px-2.5 py-0.5 rounded-lg text-[#2C1A14] font-extrabold text-[11px]">
                <Star className="w-3.5 h-3.5 fill-[#DAA520] text-[#DAA520]" />
                <span>{quickViewProduct.rating}</span>
                <span className="text-[#3D2319] text-[10px]">({quickViewProduct.reviewsCount})</span>
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#2C1A14] leading-tight">
                {quickViewProduct.name}
              </h2>
              {quickViewProduct.hindiTitle && (
                <p className="text-sm font-semibold text-[#C85A17] font-serif mt-1">
                  {quickViewProduct.hindiTitle}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-anton text-3xl text-[#2C1A14]">
                ₹{activePrice}
              </span>
              {activeOriginalPrice && (
                <span className="text-xs text-[#3D2319] line-through font-medium">
                  ₹{activeOriginalPrice}
                </span>
              )}
              {activeOriginalPrice && (
                <span className="text-[10px] font-extrabold text-green-800 bg-green-100 px-2 py-0.5 rounded-md">
                  Save ₹{activeOriginalPrice - activePrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs text-[#3D2319] leading-relaxed font-medium">
              {quickViewProduct.description}
            </p>

            {/* Variants Selector */}
            {quickViewProduct.variants && quickViewProduct.variants.length > 0 && (
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-[#2C1A14] block">Select Pack Size:</label>
                <div className="grid grid-cols-2 gap-2">
                  {quickViewProduct.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`p-2.5 rounded-xl text-xs font-bold border text-left transition-all ${
                        selectedVariant?.id === variant.id
                          ? 'bg-[#C85A17] text-white border-[#C85A17] shadow-xs'
                          : 'bg-[#F3ECE0] text-[#2C1A14] border-[#E8DDCB] hover:bg-[#EFE6D5]'
                      }`}
                    >
                      <div className="font-bold">{variant.name}</div>
                      <div className="opacity-90 text-[11px]">₹{variant.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-bold text-[#2C1A14]">Quantity:</span>
              <div className="flex items-center border border-[#E8DDCB] rounded-xl bg-[#F3ECE0] overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-[#2C1A14] font-bold hover:bg-white"
                >
                  -
                </button>
                <span className="px-4 py-1.5 font-bold text-xs text-[#2C1A14]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-[#2C1A14] font-bold hover:bg-white"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-4 border-t border-[#E8DDCB]">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-[#C85A17] hover:bg-[#B44E11] text-white active:scale-98 cursor-pointer'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added {quantity} Item(s) to Cart</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#DAA520]" />
                  <span>Add {quantity} to Cart (₹{activePrice * quantity})</span>
                </>
              )}
            </button>

            {quickViewProduct.sankalpOption && (
              <button
                onClick={() => {
                  const p = quickViewProduct;
                  setQuickViewProduct(null);
                  setSankalpProduct(p);
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#2C1A14] hover:bg-[#3D2319] text-[#DAA520] text-xs font-bold transition-all flex items-center justify-center gap-2 border border-[#DAA520]/30"
              >
                <Sparkles className="w-4 h-4 text-[#DAA520]" />
                <span>Attach Family Gotra & Name Sankalp</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
