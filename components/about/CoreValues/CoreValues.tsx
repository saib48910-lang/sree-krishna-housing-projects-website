'use client';

import React from 'react';
import { Scale, HeartHandshake, Award } from 'lucide-react';
import styles from './CoreValues.module.css';

const VALUES = [
    {
        icon: Scale,
        title: 'Integrity',
        desc: 'We believe in honest dealings. What we promise is exactly what we deliver, with no hidden clauses or compromises.'
    },
    {
        icon: Award,
        title: 'Quality',
        desc: 'Excellence is not an act, but a habit. From raw materials to finishing touches, we maintain the highest standards.'
    },
    {
        icon: HeartHandshake,
        title: 'Transparency',
        desc: 'Complete legal clarity and open communication at every step. We build relationships as strong as our structures.'
    }
];

export function CoreValues() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Our Core Values</h2>
                <div className={styles.grid}>
                    {VALUES.map((val, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <val.icon size={32} />
                            </div>
                            <h3 className={styles.title}>{val.title}</h3>
                            <p className={styles.desc}>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
