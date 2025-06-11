import React from "react";
import styles from "@/components/ProductSection/ProductSection.module.css";
import Filters from "@/components/Filters/Filters";
import ProductCard from "@/components/ProductCard/ProductCard";
import getsurenImg from "@/images/Getsuren.png";

export default function ProductSection() {
    return (
        <div className="container">
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.title}>Каталог товаров</h2>
                    <Filters />
                    <div className={styles.grid}>
                        <ProductCard id="1" name="Getsuren" image={getsurenImg} price={2000} />
                    </div>
                </div>
            </section>
        </div>
    );
}
