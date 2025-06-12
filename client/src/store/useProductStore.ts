import { StaticImageData } from 'next/image';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Product = {
    id: string;
    name: string;
    image: StaticImageData;
    price: number;
    description: string;
};

type ProductState = {
    products: Product[];
    setProducts: (products: Product[]) => void;
    reset: () => void;
};

const products: Product[] = [];

export const useProductStore = create<ProductState>()(
    persist(
        (set, get) => ({
            products,
            setProducts: (products) => set(() => ({ products})),
            reset: () => set(() => ({products: []})),
        }),
        {
            name: 'product-storage',
        }
    )
);