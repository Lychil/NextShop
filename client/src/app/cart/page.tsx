'use client';

import React, { useState } from "react";
import styles from "@/app/cart/page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import Modal from "@/components/PurchaseModal/PurchaseModal";
import img1 from "@/images/Getsuren.png";
import img2 from "@/images/Honōran.png";

const cartItems = [
    { id: "1", name: "Красный цветок", image: img1, price: 2000, quantity: 1 },
    { id: "2", name: "Сакура душ", image: img2, price: 1800, quantity: 2 },
];

export default function CartPage() {
    const [showForm, setShowForm] = useState(false);

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <section className={styles.cart}>
            <div className="container">
                <h1 className={styles.title}>Корзина</h1>

                {cartItems.length > 0 ? (
                    <div className={styles.layout}>
                        <div className={styles.products}>
                            {cartItems.map((item) => (
                                <ProductCard key={item.id} {...item} />
                            ))}
                        </div>

                        <aside className={styles.summary}>
                            <h2>Ваш заказ</h2>
                            <ul className={styles.itemList}>
                                {cartItems.map((item) => (
                                    <li key={item.id} className={styles.itemRow}>
                                        <span>{item.name}</span>
                                        <span>{item.quantity} × {item.price}₽</span>
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.total}>
                                <strong>Итого:</strong>
                                <span>{totalPrice}₽</span>
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