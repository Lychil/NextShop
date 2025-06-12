'use client';

import React, { useEffect, useState } from "react";
import styles from "@/app/cart/page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import Modal from "@/components/PurchaseModal/PurchaseModal";
import { useCartStore } from "@/store/useCartStore";
import { productList } from "@/data/products";

export default function CartPage() {
    const [showForm, setShowForm] = useState(false);
    const {products, init, cost} = useCartStore();

    useEffect(() => {
        init(productList.map(item => ({...item, quantity: 1})))
    }, []);

    return (
        <section className={styles.cart}>
            <div className="container">
                <h1 className={styles.title}>Корзина</h1>

                {products.length > 0 ? (
                    <div className={styles.layout}>
                        <div className={styles.products}>
                            {products.map((item) => (
                                <ProductCard key={item.id} {...item} />
                            ))}
                        </div>

                        <aside className={styles.summary}>
                            <h2>Ваш заказ</h2>
                            <ul className={styles.itemList}>
                                {products.map((item) => (
                                    <li key={item.id} className={styles.itemRow}>
                                        <span>{item.name}</span>
                                        <span>{item.quantity} × {item.price}₽</span>
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.total}>
                                <strong>Итого:</strong>
                                <span>{cost()}₽</span>
                            </div>

                            <button
                                className={styles.checkoutBtn}
                                onClick={() => setShowForm(true)}
                            >
                                Оформить заказ
                            </button>
                        </aside>
                    </div>
                ) : (
                    <p className={styles.empty}>Ваша корзина пуста 🌱</p>
                )}
            </div>

            {showForm && <Modal onClose={() => setShowForm(false)} />}
        </section>
    );
}