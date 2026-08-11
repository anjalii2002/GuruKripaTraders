'use client';

import React, { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { Sparkles, X, Heart, ShieldCheck } from 'lucide-react';

export default function SankalpModal() {
  const { sankalpProduct, setSankalpProduct, addToCart } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    gotra: '',
    city: '',
    intent: 'Daily Prosperity & Peace (सुख-समृद्धि)',
  });

  if (!sankalpProduct) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.gotra) return;

    addToCart(sankalpProduct, undefined, formData);
    setSankalpProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden border border-gold-400 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close */}
        <button
          onClick={() => setSankalpProduct(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-cream-200 text-charcoal-700 hover:text-black hover:bg-cream-300 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-terracotta-100 text-terracotta-600 flex items-center justify-center mx-auto border border-terracotta-300">
            <Sparkles className="w-6 h-6 text-gold-600" />
          </div>
          <h3 className="font-serif font-bold text-2xl text-charcoal-900">
            Sacred Gotra & Name Sankalp
          </h3>
          <p className="text-xs text-charcoal-700 max-w-xs mx-auto">
            Our temple priests will chant Vedic mantras in your family name prior to dispatching your consignment of <span className="font-bold text-terracotta-700">{sankalpProduct.name}</span>.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-charcoal-900 block">Devotee / Head of Family Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Rajesh Kumar Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-400 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-600 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-charcoal-900 block">Family Gotra *</label>
              <input
                type="text"
                required
                placeholder="e.g. Bharadwaj / Kashyap / Unknown"
                value={formData.gotra}
                onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-400 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-600 font-medium"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-charcoal-900 block">City / Town</label>
              <input
                type="text"
                placeholder="e.g. New Delhi"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-400 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-600 font-medium"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-charcoal-900 block">Sacred Purpose / Intent of Ritual</label>
            <select
              value={formData.intent}
              onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-400 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-600 font-medium"
            >
              <option value="Daily Prosperity & Peace (सुख-समृद्धि)">Daily Prosperity & Peace (सुख-समृद्धि)</option>
              <option value="Health & Longevity (आरोग्य)">Health & Longevity (आरोग्य)</option>
              <option value="Festival / Deepavali Pujan">Festival / Deepavali Pujan</option>
              <option value="Griha Pravesh & New Beginnings">Griha Pravesh & New Beginnings</option>
              <option value="Akhand Jyoti Invocation">Akhand Jyoti Invocation</option>
            </select>
          </div>

          <div className="p-3 rounded-xl bg-cream-200 border border-cream-300 text-[11px] text-charcoal-800 space-y-1 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
            <span>A personalized Sankalp slip with high-priest signatures will be placed inside your package.</span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span>Confirm & Add Sanctified Item to Cart</span>
          </button>

        </form>

      </div>
    </div>
  );
}
