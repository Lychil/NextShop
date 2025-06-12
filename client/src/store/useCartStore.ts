import { CartProduct } from '@/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartState = {
    products: CartProduct[];
    init: (items: CartProduct[]) => void; 
    add: (product: CartProduct) => void;
    cost: () => number;
    reset: () => void;
};

const products: CartProduct[] = [];

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            products,
            init: (items) => set({products: items}),
            add: (product) => set({products: [...get().products, product]}),
            cost: () => get().products.reduce((sum, {price, quantity}) => sum + price * quantity, 0),
            reset: () => set({ products: [] }),
        }),
        {
            name: 'cart-storage',
        }
    )
);