'use client';

import React from 'react';
import { Check } from 'lucide-react';
import styles from './ServiceBlocks.module.css';

const SERVICES = [
    {
        title: 'Residential Construction',
        image: 'https://images.unsplash.com/photo-1600596542815-3ad19fa649ba?q=80&w=1000&auto=format&fit=crop',
        items: ['Custom Villas & Bungalows', 'Apartment Complexes', 'Renovations & Extensions', 'Interior Finishing']
    },
    {
        title: 'Commercial Construction',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
        items: ['Office Spaces', 'Retail Showrooms', 'Warehouses', 'Restaurants & Hotels']
    }
];

export function ServiceBlocks() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>What We Build</h2>
                <div className={styles.grid}>
                    {SERVICES.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.image} style={{ backgroundImage: `url(${service.image})` }} />
                            <div className={styles.content}>
                                <h3 className={styles.title}>{service.title}</h3>
                                <ul className={styles.list}>
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className={styles.listItem}>
                                            <Check size={16} className={styles.check} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
