'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Map, HardHat, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './PropertyCategories.module.css';

const CATEGORIES = [
    {
        icon: Home,
        title: 'Residential',
        description: 'Villas, Apartments & Independent Homes',
        link: '/properties?type=residential',
    },
    {
        icon: Building2,
        title: 'Commercial',
        description: 'Retail Spaces & Office Complexes',
        link: '/properties?type=commercial',
    },
    {
        icon: Map,
        title: 'Land & Plots',
        description: 'Approved Open Plots & Farm Lands',
        link: '/properties?type=land',
    },
    {
        icon: HardHat,
        title: 'Construction',
        description: 'Turnkey Construction Services',
        link: '/construction',
    },
];

export function PropertyCategories() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>What We Offer</h2>
                    <p className="font-body" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>Explore our range of premium real estate and construction services tailored to your needs.</p>
                </motion.div>

                <div className={styles.grid}>
                    {CATEGORIES.map((category, index) => (
                        <Link key={index} href={category.link} className={styles.cardLink}>
                            <motion.div
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.iconWrapper}>
                                    <category.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className={styles.title}>{category.title}</h3>
                                <p className={styles.description}>{category.description}</p>

                                <div className={styles.arrow}>
                                    <ArrowRight size={20} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
