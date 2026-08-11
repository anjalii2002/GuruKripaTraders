'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { ProductVariant } from '@/lib/types';
import { X, Star, ShieldCheck, Sparkles, Check, ShoppingBag, Flame } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden border border-cream-400 shadow-2xl max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-md text-charcoal-700 hover:text-black hover:bg-white transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Side */}
        <div className="md:w-1/2 relative h-64 md:h-auto bg-cream-100 min-h-[280px]">
          <Image
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            fill
            className="object-cover"
          />
          {quickViewProduct.badge && (
            <div className="absolute top-4 left-4 z-10 bg-terracotta-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span>{quickViewProduct.badge}</span>
            </div>
          )}
        </div>

        {/* Product Details Side */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          
          <div className="space-y-4">
            
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-terracotta-600 uppercase tracking-widest">
                {quickViewProduct.category}
              </span>
              <div className="flex items-center gap-1 bg-gold-100 px-2.5 py-0.5 rounded-full text-gold-800 font-bold">
                <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                <span>{quickViewProduct.rating}</span>
                <span className="text-charcoal-700 text-[11px]">({quickViewProduct.reviewsCount})</span>
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="font-serif font-bold text-2xl text-charcoal-900 leading-tight">
                {quickViewProduct.name}
              </h2>
              {quickViewProduct.hindiTitle && (
                <p className="text-sm font-semibold text-terracotta-700 font-serif mt-1">
                  {quickViewProduct.hindiTitle}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif font-bold text-3xl text-charcoal-900">
                ₹{activePrice}
              </span>
              {activeOriginalPrice && (
                <span className="text-sm text-charcoal-700 line-through">
                  ₹{activeOriginalPrice}
                </span>
              )}
              {activeOriginalPrice && (
                <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                  Save ₹{activeOriginalPrice - activePrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              {quickViewProduct.description}
            </p>

            {/* Ingredients / Purity Highlights */}
            {quickViewProduct.ingredients && quickViewProduct.ingredients.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-cream-300">
                <h4 className="text-xs font-bold text-charcoal-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-terracotta-600" />
                  <span>Lab Verified Components:</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewProduct.ingredients.map((ing, idx) => (
                    <span key={idx} className="bg-cream-200 text-charcoal-800 text-[11px] font-medium px-2.5 py-1 rounded-md border border-cream-300">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Variants Selector */}
            {quickViewProduct.variants && quickViewProduct.variants.length > 0 && (
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-charcoal-800 block">Select Variant / Pack Size:</label>
                <div className="grid grid-cols-2 gap-2">
                  {quickViewProduct.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`p-2 rounded-xl text-xs font-semibold border text-left transition-all ${
                        selectedVariant?.id === variant.id
                          ? 'bg-terracotta-600 text-white border-terracotta-600 shadow-xs'
                          : 'bg-cream-100 text-charcoal-800 border-cream-300 hover:bg-cream-200'
                      }`}
                    >
                      <div className="font-bold">{variant.name}</div>
                      <div className="opacity-90">₹{variant.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-bold text-charcoal-800">Quantity:</span>
              <div className="flex items-center border border-cream-400 rounded-xl bg-cream-100 overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-charcoal-800 font-bold hover:bg-cream-200"
                >
                  -
                </button>
                <span className="px-4 py-1.5 font-bold text-xs text-charcoal-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-charcoal-800 font-bold hover:bg-cream-200"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-4 border-t border-cream-300">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-terracotta-600 hover:bg-terracotta-700 text-white active:scale-98'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Added {quantity} Item(s) to Cart</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5 text-gold-300" />
                  <span>Add {quantity} to Sacred Cart (₹{activePrice * quantity})</span>
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
                className="w-full py-2.5 px-4 rounded-xl bg-gold-100 hover:bg-gold-200 border border-gold-300 text-charcoal-900 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-700" />
                <span>Attach Family Gotra & Name Sankalp</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
