import React from "react";
import styles from "@/components/layout/Header/Header.module.css";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <a href="/" className={styles.logoLink}>
                        <Image
                            src="/icons/logo.svg"
                            alt="Логотип компании"
                            width={100}
                            height={30}
                            priority
                        />
                    </a>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}
