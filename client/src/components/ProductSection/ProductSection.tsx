import React from "react";
import styles from "@/components/ProductSection/ProductSection.module.css";
import Filters from "@/components/Filters/Filters";

export default function ProductSection() {
    return (
        <div className="container">
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.title}>Каталог товаров</h2>
                    <Filters />
                </div>
            </section>
        </div>
    );
}
