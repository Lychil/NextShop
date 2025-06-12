'use client';

import React from "react";
import styles from "@/components/PurchaseModal/PurchaseModal.module.css";
import Image from "next/image";

type Props = {
    onClose: () => void;
};

export default function PurchaseModal({ onClose }: Props) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className={styles.title}>Данные для доставки</h2>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="ФИО" required />
                    <input type="text" placeholder="Адрес" required />
                    <input type="tel" placeholder="Телефон" required />
                    <button type="submit" className={styles.submitBtn}>
                        Подтвердить заказ
                    </button>
                </form>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">
                    <Image
                        src="/icons/clear.svg"
                        alt="Кнопка закрыть"
                        width={24}
                        height={24}
                        aria-hidden="true"
                    />
                </button>
            </div>
        </div>
    );
}
