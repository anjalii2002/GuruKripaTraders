export interface ProductVariant {
  id: string;
  name: string;
  unit: string;
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  name: string;
  hindiTitle?: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
  description: string;
  features?: string[];
  ingredients?: string[];
  variants?: ProductVariant[];
  sankalpOption?: boolean;
}

export interface SankalpDetails {
  name: string;
  gotra: string;
  nakshatra?: string;
  city: string;
  intent: string;
}

export interface CartItem {
  cartId: string;
  product: Product;
  selectedVariant?: ProductVariant;
  sankalp?: SankalpDetails | null;
  quantity: number;
}
