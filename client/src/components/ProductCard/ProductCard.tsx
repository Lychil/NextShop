'use client';

import React from "react";
import styles from "@/components/ProductCard/ProductCard.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
    id: string;
    name: string;
    image: StaticImageData;
    price: number;
    isFavoritePage?: boolean;
};

export default function ProductCard({ id, name, image, price, isFavoritePage = false }: Props) {
    const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    };

    const handleBuyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    }

    return (
        <Link href={`/product/${id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className={styles.image}
                />

                <div className={styles.overlay}>
                    <span className={styles.more}>Подробнее</span>
                </div>

                {!isFavoritePage &&
                    <button
                        type="button"
                        className={styles.favoriteButton}
                        onClick={handleFavoriteClick}
                        aria-label="Добавить в избранное"
                    >
                        <Image
                            src="/icons/favorite.svg"
                            alt=""
                            width={16}
                            height={16}
                            aria-hidden="true"
                        />
                    </button>
                }
            </div>

            <div className={styles.details}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.footer}>
                    <span className={styles.price}>{price} ₽</span>
                    <button type="button" onClick={handleBuyClick} className={styles.buyButton}>Купить</button>
                </div>
            </div>
        </Link>
    );
}
