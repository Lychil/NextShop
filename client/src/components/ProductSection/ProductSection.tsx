'use client';

import React, { useEffect } from "react";
import styles from "@/components/ProductSection/ProductSection.module.css";
import Filters from "@/components/Filters/Filters";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useProductStore } from "@/store/useProductStore";
import { productList } from "@/data/products";

export default function ProductSection() {
    const products = useProductStore(state => state.products);
    const setProducts = useProductStore(state => state.setProducts);

    useEffect(() => {
        setProducts(productList);
    }, []);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Каталог товаров</h2>
                <Filters />
                <div className="grid">
                    {products.map(({ name, price, image, id }) => (
                        <ProductCard key={id} id={id} name={name} image={image} price={price} />
                    ))}
                </div>
            </div>
        </section>
    );
}
