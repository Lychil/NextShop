import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/ui/BadgeLink/BadgeLink.module.css";

type BadgeLinkProps = {
    href: string;
    iconSrc: string;
    alt: string;
    label: string;
    count?: number;
};

export default function BadgeLink({ href, iconSrc, alt, label, count = 0 }: BadgeLinkProps) {
    return (
        <Link href={href} aria-label={label} className={styles.badgeLink}>
            <Image src={iconSrc} alt={alt} width={24} height={24} aria-hidden="true" />
            {count > 0 && <span className={styles.badge}>{count < 10 ? count : "9+"}</span>}
            <span className="vHidden">{label}</span>
        </Link>
    );
}
