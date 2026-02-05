'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Image with Parallax/Zoom effect */}
            <div className={styles.backgroundWrapper}>
                <motion.div
                    className={styles.backgroundImage}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }} // Subtle continuous zoom
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop")', // Authentic high-rise/construction feel
                    }}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.contentContainer}>
                <div className="container">
                    <div className={styles.content}>
                        <motion.h1
                            className="font-heading"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Trusted Real Estate & <br />
                            Construction Experts in Tirupati
                        </motion.h1>

                        <motion.p
                            className="font-body"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            12+ years of delivering quality homes, commercial spaces, and land development.
                        </motion.p>

                        <motion.div
                            className={styles.ctaGroup}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Link href="/booking">
                                <Button variant="primary" size="lg">
                                    Book a Site Visit
                                </Button>
                            </Link>
                            <Link href="/properties">
                                <Button variant="outline" size="lg" className={styles.secondaryBtn}>
                                    Explore Properties
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
