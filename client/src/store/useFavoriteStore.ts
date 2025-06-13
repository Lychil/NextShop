import { Product } from '@/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteState = {
    products: Product[];
    init: (items: Product[]) => void;
    add: (product: Product) => void;
    reset: () => void;
};

const products: Product[] = [];

export const useFavoriteStore = create<FavoriteState>()(
    persist(
        (set, get) => ({
            products,
            init: (items) => set({ products: items }),
            add: (product) => set({products: [...get().products, product]}),
            reset: () => set({ products: [] }),
        }),
        {
            name: 'favorite-storage',
        }
    )
);