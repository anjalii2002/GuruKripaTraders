'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Plus, Minus, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    totalItemCount,
  } = useCart();

  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 999;
  const amountUntilFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const progressPercent = Math.min(100, Math.round((cartTotal / freeShippingThreshold) * 100));

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length < 6) {
      setPincodeStatus('Please enter a valid 6-digit Pincode.');
      return;
    }
    setPincodeStatus('✅ Delivery Available! Express 2-3 Day Temple Transit.');
  };

  const handleCheckout = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const itemsSummary = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.product.name}* ${
            item.selectedVariant ? `(${item.selectedVariant.name})` : ''
          } x${item.quantity} - ₹${
            (item.selectedVariant ? item.selectedVariant.price : item.product.price) * item.quantity
          }`
      )
      .join('%0A');

    const message = `Hello Gurukripa Traders! I would like to place an order:%0A%0A*Items:*%0A${itemsSummary}%0A%0A*Total Amount:* ₹${cartTotal}%0A%0APlease process my order!`;

    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E8DDCB]">
          
          {/* Header */}
          <div className="bg-[#2C1A14] text-white p-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#C85A17] text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5 text-[#DAA520]" />
              </div>
              <div>
                <h2 className="font-anton text-xl tracking-wider uppercase text-[#DAA520]">
                  Sacred Retail Cart
                </h2>
                <p className="text-[10px] text-[#FAF6EE]/80 font-semibold">
                  {totalItemCount} item{totalItemCount !== 1 ? 's' : ''} in your cart
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-xl text-white hover:bg-[#3D2319] transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-6 h-6 text-[#DAA520]" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#3D2319] px-5 py-3 text-white text-xs font-bold space-y-1.5 border-b border-[#4A2C1D]">
            <div className="flex justify-between items-center text-[11px]">
              <span className="flex items-center gap-1.5 text-white">
                <Truck className="w-4 h-4 text-[#DAA520]" />
                {amountUntilFreeShipping > 0
                  ? `Add ₹${amountUntilFreeShipping} more for FREE Delivery!`
                  : '🎉 You unlocked FREE Express Delivery!'}
              </span>
              <span className="text-[#DAA520] font-extrabold">{progressPercent}%</span>
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-lg overflow-hidden">
              <div
                className="bg-[#C85A17] h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#FAF6EE]/40">
            {cart.length > 0 ? (
              cart.map((item) => {
                const itemPrice = item.selectedVariant ? item.selectedVariant.price : item.product.price;
                return (
                  <div
                    key={item.cartId}
                    className="p-4 rounded-2xl bg-white border border-[#E8DDCB] flex items-center gap-4 relative group shadow-xs"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#F3ECE0] border border-[#E8DDCB] shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-1">
                      <h4 className="font-serif font-bold text-xs text-[#2C1A14] line-clamp-1">
                        {item.product.name}
                      </h4>
                      {item.selectedVariant && (
                        <span className="text-[10px] font-bold text-[#C85A17] bg-[#C85A17]/10 px-2 py-0.5 rounded-md inline-block">
                          {item.selectedVariant.name}
                        </span>
                      )}

                      <div className="flex items-center justify-between pt-1">
                        <span className="font-anton text-base text-[#2C1A14]">
                          ₹{itemPrice * item.quantity}
                        </span>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-1 bg-[#F3ECE0] border border-[#E8DDCB] rounded-lg p-0.5 shadow-xs">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1 text-[#2C1A14] hover:bg-white rounded"
                            aria-label="Decrease Quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1 text-[#2C1A14] hover:bg-white rounded"
                            aria-label="Increase Quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="p-1.5 text-[#3D2319]/40 hover:text-red-600 transition-colors"
                      title="Remove Item"
                      aria-label="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-20 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-[#F3ECE0] text-[#3D2319] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="font-serif font-bold text-lg text-[#2C1A14]">Your cart is empty</p>
                <p className="text-xs text-[#3D2319]">Add consecrated poojan oils & dravya to proceed.</p>
              </div>
            )}

            {/* Pincode Checker */}
            {cart.length > 0 && (
              <form onSubmit={handlePincodeCheck} className="p-4 rounded-2xl bg-white border border-[#E8DDCB] space-y-2">
                <label className="text-xs font-bold text-[#2C1A14] block">
                  Check Delivery Pincode:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-xl bg-[#F3ECE0] border border-[#E8DDCB] text-xs font-semibold text-[#2C1A14] focus:outline-none focus:ring-1 focus:ring-[#C85A17]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-xl bg-[#C85A17] text-white text-xs font-bold hover:bg-[#B44E11]"
                  >
                    Check
                  </button>
                </div>
                {pincodeStatus && (
                  <p className="text-[11px] font-bold text-[#C85A17] pt-1">{pincodeStatus}</p>
                )}
              </form>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#E8DDCB] space-y-4 shadow-lg">
              <div className="space-y-1.5 text-xs text-[#3D2319]">
                <div className="flex justify-between font-medium">
                  <span>Subtotal:</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between font-medium text-green-700">
                  <span>Delivery Charges:</span>
                  <span>{amountUntilFreeShipping === 0 ? 'FREE' : '₹99'}</span>
                </div>
                <div className="flex justify-between text-base font-anton text-[#2C1A14] pt-2 border-t border-[#E8DDCB]">
                  <span>Total Amount:</span>
                  <span className="text-[#C85A17]">₹{amountUntilFreeShipping === 0 ? cartTotal : cartTotal + 99}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 px-6 rounded-2xl bg-[#C85A17] hover:bg-[#B44E11] text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-[#DAA520]" />
                <span>Express WhatsApp / UPI Checkout</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-center text-[#3D2319] font-bold">
                🔒 100% Safe & Secure Direct Temple Delivery
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
