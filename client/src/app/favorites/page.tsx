'use client';

import React, { useEffect } from "react";
import styles from "@/app/favorites/page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { productList } from "@/data/products";

export default function FavoritesPage() {
    const { products, init } = useFavoriteStore();

    useEffect(() => {
        init(productList);
    }, []);

    return (
        <section className={styles.favorites}>
            <div className="container">
                <h1 className={styles.title}>Избранное</h1>
                {!!products.length ?
                    <div className="grid">
                        {products.map(({id, name, image, price}) => (
                            <ProductCard key={id} id={id} name={name} isFavoritePage image={image} price={price} />
                        ))}
                    </div>
                    :
                    <p className={styles.empty}>У вас пока нет избранных растений 🥀</p>
                }
            </div>
        </section>
    );
}
