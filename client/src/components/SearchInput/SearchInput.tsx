'use client';

import React, { useState } from "react";
import styles from "./SearchInput.module.css";
import Image from "next/image";

type Props = {
    placeholder?: string;
};

export default function SearchInput({ placeholder = "Поиск..." }: Props) {
    const [value, setValue] = useState("");

    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {value && (
                <button
                    type="button"
                    className={styles.clear}
                    onClick={() => setValue("")}
                    aria-label="Очистить поиск"
                >
                    <Image
                        src="/icons/close.svg"
                        alt=""
                        width={24}
                        height={24}
                        aria-hidden="true"
                    />
                </button>
            )}
            <div className={styles.icon}>
                <div className={styles.iconCircle}>
                    <Image
                        src="/icons/search.svg"
                        alt="Поиск"
                        width={16}
                        height={16}
                        aria-hidden="true"
                    />
                </div>
            </div>
        </div>
    );
}
