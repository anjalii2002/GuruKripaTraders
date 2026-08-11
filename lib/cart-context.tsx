'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductVariant, CartItem, SankalpDetails } from './types';

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, variant?: ProductVariant, sankalp?: SankalpDetails | null) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  totalItemCount: number;

  // Modal states
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  sankalpProduct: Product | null;
  setSankalpProduct: (product: Product | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [sankalpProduct, setSankalpProduct] = useState<Product | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('gurukripa_sacred_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Failed to load cart', e);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('gurukripa_sacred_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  const addToCart = (product: Product, variant?: ProductVariant, sankalp?: SankalpDetails | null) => {
    const selectedVariant = variant || (product.variants && product.variants.length > 0 ? product.variants[0] : undefined);
    const cartId = `${product.id}-${selectedVariant ? selectedVariant.id : 'default'}-${sankalp ? sankalp.name : 'nosankalp'}`;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.cartId === cartId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, {
          cartId,
          product,
          selectedVariant,
          quantity: 1,
          sankalp: sankalp || null,
        }];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCart(prev => prev.map(item => item.cartId === cartId ? { ...item, quantity } : item));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((acc, item) => {
    const price = item.selectedVariant ? item.selectedVariant.price : item.product.price;
    return acc + price * item.quantity;
  }, 0);

  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      totalItemCount,
      quickViewProduct,
      setQuickViewProduct,
      sankalpProduct,
      setSankalpProduct,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
