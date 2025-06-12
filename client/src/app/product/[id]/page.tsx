'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/product/[id]/page.module.css';
import img from "@/images/Getsuren.png";

export default function ProductPage() {
    const [quantity, setQuantity] = useState(0);

    const product = {
        id: '1',
        name: 'Getsuren',
        image: img,
        description: 'Описание',
        price: 2000,
    };

    const increase = () => setQuantity((q) => q + 1);
    const decrease = () => setQuantity((q) => (q > 0 ? q - 1 : 0));

    return (
        <section className={styles.product}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                            className={styles.image}
                            priority
                        />
                    </div>

                    <div className={styles.info}>
                        <h1 className={styles.title}>{product.name}</h1>
                        <p className={styles.description}>{product.description}</p>

                        <span className={styles.price}>{product.price}₽</span>

                        {quantity === 0 ? (
                            <button className={styles.buyBtn} onClick={() => setQuantity(1)}>
                                Купить
                            </button>
                        ) : (
                            <div className={styles.controls}>
                                <div className={styles.counter}>
                                    <button
                                        type="button"
                                        onClick={decrease}
                                        className={styles.circleBtn}
                                        aria-label="Уменьшить"
                                    >
                                        −
                                    </button>
                                    <span className={styles.quantity}>{quantity}</span>
                                    <button
                                        type="button"
                                        onClick={increase}
                                        className={styles.circleBtn}
                                        aria-label="Увеличить"
                                    >
                                        +
                                    </button>
                                </div>
                                <Link href="/cart" aria-label="Корзина">
                                    <button className={styles.confirmBtn}>
                                        В корзину ({quantity})
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
}
