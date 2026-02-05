'use client';

import React from 'react';
import { MapPin, Gavel, Clock } from 'lucide-react';
import styles from './TrustIndicators.module.css';

const INDICATORS = [
    {
        icon: MapPin,
        title: 'Local Expertise',
        desc: 'Deep understanding of Tirupati’s geography and market dynamics.'
    },
    {
        icon: Gavel,
        title: 'Legal Clarity',
        desc: '100% clear titles and Vaastu compliant projects.'
    },
    {
        icon: Clock,
        title: 'On-Time Delivery',
        desc: 'A track record of handing over projects exactly when promised.'
    }
];

export function TrustIndicators() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Tirupati Trusts Us</h2>
                </div>

                <div className={styles.grid}>
                    {INDICATORS.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconRow}>
                                <item.icon size={28} className={styles.icon} />
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                            </div>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
