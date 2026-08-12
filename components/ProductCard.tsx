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
    <div className="bg-white rounded-3xl border border-[#E8DDCB] overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group relative">
      
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-[#C85A17] text-white text-[10px] font-extrabold px-3 py-1 rounded-xl shadow-md flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#DAA520]" />
          <span>{product.badge}</span>
        </div>
      )}

      {/* Quick View Button */}
      <button
        onClick={() => setQuickViewProduct(product)}
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-[#2C1A14] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#C85A17] hover:text-white"
        title="Quick View Details"
        aria-label="Quick View Details"
      >
        <Eye className="w-4 h-4" />
      </button>

      {/* Image Container */}
      <div
        className="relative w-full h-72 cursor-pointer overflow-hidden bg-white"
        onClick={() => setQuickViewProduct(product)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Category Tag & Rating */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-[#C85A17] uppercase tracking-wider text-[10px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 bg-[#DAA520]/20 px-2.5 py-0.5 rounded-lg text-[#2C1A14] font-extrabold text-[11px]">
              <Star className="w-3.5 h-3.5 fill-[#DAA520] text-[#DAA520]" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-serif font-bold text-base text-[#2C1A14] leading-snug hover:text-[#C85A17] transition-colors cursor-pointer line-clamp-2"
          >
            {product.name}
          </h3>

          {product.hindiTitle && (
            <p className="text-xs font-semibold text-[#C85A17] font-serif">
              {product.hindiTitle}
            </p>
          )}

          {/* Description snippet */}
          <p className="text-xs text-[#3D2319] line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Variants Selector */}
        {product.variants && product.variants.length > 0 && (
          <div className="space-y-1 pt-1">
            <span className="text-[10px] font-bold text-[#3D2319] uppercase block">Size Options:</span>
            <div className="flex flex-wrap gap-1.5">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-3 py-1 rounded-xl text-[11px] font-bold border transition-all ${
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

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-[#E8DDCB] space-y-2.5">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-anton text-2xl text-[#2C1A14]">
                ₹{activePrice}
              </span>
              {activeOriginalPrice && (
                <span className="text-xs text-[#3D2319] line-through font-medium">
                  ₹{activeOriginalPrice}
                </span>
              )}
            </div>
            {activeOriginalPrice && (
              <span className="text-[10px] font-extrabold text-green-800 bg-green-100 px-2 py-0.5 rounded-md">
                SAVE ₹{activeOriginalPrice - activePrice}
              </span>
            )}
          </div>

          <div className="grid grid-cols-12 gap-2">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`col-span-8 py-2.5 px-3 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs ${
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

            {/* Sankalp Option */}
            {product.sankalpOption ? (
              <button
                onClick={() => setSankalpProduct(product)}
                className="col-span-4 py-2.5 px-2 rounded-2xl bg-[#2C1A14] hover:bg-[#3D2319] text-white text-[10px] font-extrabold transition-all flex items-center justify-center gap-1 shadow-xs"
                title="Add Gotra & Name Sankalp"
              >
                <Sparkles className="w-3 h-3 text-[#DAA520]" />
                <span>+Sankalp</span>
              </button>
            ) : (
              <button
                onClick={() => setQuickViewProduct(product)}
                className="col-span-4 py-2.5 px-2 rounded-2xl bg-[#F3ECE0] hover:bg-[#EFE6D5] text-[#2C1A14] text-[10px] font-bold transition-all flex items-center justify-center border border-[#E8DDCB]"
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
