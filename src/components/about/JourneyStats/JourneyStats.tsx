'use client';

import React from 'react';
import styles from './JourneyStats.module.css';

const STATS = [
    { label: 'Years of Experience', value: '12+' },
    { label: 'Completed Projects', value: '50+' },
    { label: 'Happy Families', value: '1000+' },
    { label: 'Sq. Ft. Developed', value: '5L+' }
];

export function JourneyStats() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {STATS.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <div className={styles.value}>{stat.value}</div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
