"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./subnavigation.module.scss";

const SubNavigation: React.FC = () => {
    const pathname = usePathname();

    const links = [
        { href: "/dashboard/services", label: "Servicios" },
        { href: "/dashboard/clients", label: "Clientes" },
        { href: "/dashboard/appointment", label: "Citas" },
    ];

    return (
        <nav className={styles.subNav}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className={`${styles.link} ${pathname === link.href ? styles.activeLink : ""}`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
};

export default SubNavigation;
