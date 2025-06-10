import React from "react";
import styles from "@/components/layout/Navbar/Navbar.module.css";
import BadgeLink from "@/components/ui/BadgeLink/BadgeLink";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <BadgeLink
                href="/favorites"
                iconSrc="/icons/favorite.svg"
                label="Избранное"
                alt="Изображение сердца"
                count={100}
            />
            <BadgeLink
                href="/cart"
                iconSrc="/icons/cart.svg"
                label="Корзина"
                alt="Изображение корзины"
                count={100}
            />
        </nav>
    );
}
