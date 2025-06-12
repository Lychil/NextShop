import { Product } from '@/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ProductState = {
    products: Product[];
    setProducts: (items: Product[]) => void;
    reset: () => void;
};

const products: Product[] = [];

export const useProductStore = create<ProductState>()(
    persist(
        (set, get) => ({
            products,
            setProducts: (items) => set({products: items}),
            reset: () => set({products: []}),
        }),
        {
            name: 'product-storage',
        }
    )
);