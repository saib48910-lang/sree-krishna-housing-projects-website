'use client';

import React from 'react';
import { ShieldCheck, BrickWall, Ruler, HardHat } from 'lucide-react';
import styles from './QualityFeatures.module.css';

const FEATURES = [
    { icon: ShieldCheck, title: 'Grade-A Materials', desc: 'We only use certified steel, cement, and fittings from top brands.' },
    { icon: Ruler, title: 'Vaastu Compliant', desc: 'Designs that harmonize with nature and bring prosperity.' },
    { icon: BrickWall, title: 'Solid Structure', desc: 'Earthquake-resistant RCC framed structures.' },
    { icon: HardHat, title: 'Expert Supervision', desc: 'Dedicated site engineers monitoring every stage.' },
];

export function QualityFeatures() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Quality You Can Trust</h2>
                        <p className={styles.desc}>We don&apos;t cut corners. Our commitment to excellence ensures your building stands the test of time.</p>
                    </div>

                    <div className={styles.features}>
                        {FEATURES.map((feat, index) => (
                            <div key={index} className={styles.card}>
                                <feat.icon size={32} className={styles.icon} />
                                <h3 className={styles.cardTitle}>{feat.title}</h3>
                                <p className={styles.cardDesc}>{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
