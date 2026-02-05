'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Phone, User, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';
import styles from './Header.module.css';

const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Services', href: '/services' },
    // { label: 'Projects', href: '/projects' }, // Simplified for now
    // { label: 'Construction', href: '/construction' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
];

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <>
            <motion.header
                className={cn(styles.header, isScrolled && styles.scrolled)}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={cn("container", styles.container)}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/brand/sree-krishna-official-logo.png"
                            alt="Sree Krishna Housing Projects"
                            width={720}
                            height={180}
                            className={styles.brandLogo}
                            priority
                            placeholder="empty"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={styles.desktopNav}>
                        <ul className={styles.navList}>
                            {NAV_ITEMS.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className={styles.navLink}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Actions & Mobile Toggle */}
                    <div className={styles.actions}>

                        <Link href="/booking" className={styles.desktopOnly}>
                            <Button variant="primary" size="sm">
                                Book Site Visit
                            </Button>
                        </Link>

                        <button
                            className={styles.mobileToggle}
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            {/* We will implement the drawer content in a separate component or here */}
            {isMobileMenuOpen && (
                <motion.div
                    className={styles.mobileDrawer}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                >
                    <div className={styles.drawerHeader}>
                        <span className={styles.logo}>Sree Krishna</span>
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>
                    <nav className={styles.drawerNav}>
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={styles.drawerLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className={styles.drawerActions}>
                            <Link href="/booking" style={{ width: '100%' }}>
                                <Button fullWidth variant="primary">Book Site Visit</Button>
                            </Link>

                        </div>
                    </nav>
                </motion.div>
            )}

            {/* Overlay - Optional if we want a backdrop */}
            {isMobileMenuOpen && (
                <div className={styles.backdrop} onClick={() => setIsMobileMenuOpen(false)} />
            )}
        </>
    );
}
