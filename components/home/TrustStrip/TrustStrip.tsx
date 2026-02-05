'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, Briefcase, MapPin } from 'lucide-react';
import styles from './TrustStrip.module.css';

const TRUST_ITEMS = [
    {
        icon: Clock,
        title: '12+ Years',
        subtitle: 'Of Excellence'
    },
    {
        icon: Star,
        title: '5.0 Rating',
        subtitle: 'Customer Satisfaction'
    },
    {
        icon: Briefcase,
        title: 'End-to-End',
        subtitle: 'Complete Services'
    },
    {
        icon: MapPin,
        title: 'Local Authority',
        subtitle: 'Tirupati Experts'
    },
];

export function TrustStrip() {
    return (
        <section className={styles.trustStrip}>
            <div className="container">
                <div className={styles.grid}>
                    {TRUST_ITEMS.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                <item.icon size={28} className={styles.icon} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.subtitle}>{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
