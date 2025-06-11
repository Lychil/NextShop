'use client';

import React from "react";
import styles from "@/app/favorites/page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import getsurenImg from "@/images/Getsuren.png";

export default function FavoritesPage() {
    return (
        <section className={styles.favorites}>
            <div className="container">
                <h1 className={styles.title}>Избранное</h1>
                <div className="grid">
                    <ProductCard id="1" name="Getsuren" isFavoritePage image={getsurenImg} price={2000} />
                </div>
                {/* <p className={styles.empty}>У вас пока нет избранных растений 🥀</p> */}
            </div>
        </section>
    );
}
