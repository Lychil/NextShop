'use client';

import React, { useState } from "react";
import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./Filters.module.css";
import Image from "next/image";

export default function Filters() {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleClear = () => {
        setMinPrice("");
        setMaxPrice("");
    };

    const handleApply = () => {
        let min = parseFloat(minPrice);
        let max = parseFloat(maxPrice);

        if (!isNaN(min) && !isNaN(max) && min > max) {
            // Автообмен значениями, если введены некорректно
            [min, max] = [max, min];
            setMinPrice(min.toString());
            setMaxPrice(max.toString());
        }

        console.log("Применены фильтры:", minPrice, maxPrice);
        // здесь твоя логика применения
    };

    return (
        <div className={styles.filters}>
            <SearchInput />

            <div className={styles.priceWrapper}>
                <span className={styles.priceLabel}>Цена:</span>
                <input
                    type="number"
                    placeholder="Мин."
                    className={styles.priceInput}
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    min={0}
                />
                <span className={styles.dash}>—</span>
                <input
                    type="number"
                    placeholder="Макс."
                    className={styles.priceInput}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    min={0}
                />
            </div>

            <div className={styles.actions}>
                <button
                    type="button"
                    aria-label="Очистить фильтры"
                    className={styles.circleBtn}
                    onClick={handleClear}
                >
                    <Image src="/icons/clear.svg" alt="" width={20} height={20} aria-hidden="true" />
                </button>

                <button
                    type="button"
                    aria-label="Применить фильтры"
                    className={styles.circleBtn}
                    onClick={handleApply}
                >
                    <Image src="/icons/apply.svg" alt="" width={20} height={20} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}
