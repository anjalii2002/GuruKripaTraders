'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product, ProductVariant } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { Star, ShoppingBag, Eye, Sparkles, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, setQuickViewProduct, setSankalpProduct } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants && product.variants.length > 0 ? product.variants[0] : undefined
  );
  const [added, setAdded] = useState(false);

  const activePrice = selectedVariant ? selectedVariant.price : product.price;
  const activeOriginalPrice = selectedVariant ? selectedVariant.originalPrice : product.originalPrice;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8DDCB] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group relative">
      
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-2.5 left-2.5 z-10 bg-[#C85A17] text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-lg shadow-sm flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#DAA520]" />
          <span>{product.badge}</span>
        </div>
      )}

      {/* Quick View Button */}
      <button
        onClick={() => setQuickViewProduct(product)}
        className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md text-[#2C1A14] flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#C85A17] hover:text-white cursor-pointer"
        title="Quick View Details"
        aria-label="Quick View Details"
      >
        <Eye className="w-3.5 h-3.5" />
      </button>

      {/* Perfectly Proportioned Image Container */}
      <div
        className="relative w-full h-48 sm:h-52 bg-[#FBF9F4] cursor-pointer overflow-hidden flex items-center justify-center p-3 border-b border-[#E8DDCB]/60"
        onClick={() => setQuickViewProduct(product)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Compact Content Container */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Category Tag & Rating */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-[#C85A17] uppercase tracking-wider text-[9px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 bg-[#DAA520]/20 px-2 py-0.5 rounded-md text-[#2C1A14] font-extrabold text-[10px]">
              <Star className="w-3 h-3 fill-[#DAA520] text-[#DAA520]" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-serif font-bold text-sm text-[#2C1A14] leading-snug hover:text-[#C85A17] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {product.hindiTitle && (
            <p className="text-xs font-semibold text-[#C85A17] font-hindi truncate">
              {product.hindiTitle}
            </p>
          )}
        </div>

        {/* Variant Selector - Compact Single Row */}
        {product.variants && product.variants.length > 0 && (
          <div className="space-y-1 pt-1">
            <span className="text-[9px] font-bold text-[#3D2319]/70 uppercase tracking-wider block">Size:</span>
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold border transition-all shrink-0 cursor-pointer ${
                    selectedVariant?.id === variant.id
                      ? 'bg-[#C85A17] text-white border-[#C85A17]'
                      : 'bg-[#F3ECE0] text-[#2C1A14] border-[#E8DDCB] hover:bg-[#EFE6D5]'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price & Action Button Bar */}
        <div className="pt-2.5 border-t border-[#E8DDCB]/80 space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="font-anton text-xl text-[#2C1A14]">
                ₹{activePrice}
              </span>
              {activeOriginalPrice && (
                <span className="text-xs text-[#3D2319]/60 line-through font-medium">
                  ₹{activeOriginalPrice}
                </span>
              )}
            </div>
            {activeOriginalPrice && (
              <span className="text-[9px] font-extrabold text-green-800 bg-green-100 px-1.5 py-0.5 rounded-md">
                SAVE ₹{activeOriginalPrice - activePrice}
              </span>
            )}
          </div>

          <div className="grid grid-cols-12 gap-1.5">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`col-span-8 py-2 px-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-[#C85A17] hover:bg-[#B44E11] text-white active:scale-95'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#DAA520]" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            {/* Details / Sankalp Option */}
            {product.sankalpOption ? (
              <button
                onClick={() => setSankalpProduct(product)}
                className="col-span-4 py-2 px-1.5 rounded-xl bg-[#2C1A14] hover:bg-[#3D2319] text-white text-[9px] font-extrabold transition-all flex items-center justify-center gap-0.5 cursor-pointer"
                title="Add Gotra & Name Sankalp"
              >
                <Sparkles className="w-2.5 h-2.5 text-[#DAA520]" />
                <span>+Sankalp</span>
              </button>
            ) : (
              <button
                onClick={() => setQuickViewProduct(product)}
                className="col-span-4 py-2 px-1.5 rounded-xl bg-[#F3ECE0] hover:bg-[#EFE6D5] text-[#2C1A14] text-[10px] font-bold transition-all flex items-center justify-center border border-[#E8DDCB] cursor-pointer"
              >
                <span>Details</span>
              </button>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
