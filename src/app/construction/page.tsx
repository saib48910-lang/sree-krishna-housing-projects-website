'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { ConstructionProcess } from '@/components/construction/ConstructionProcess/ConstructionProcess';
import { QualityFeatures } from '@/components/construction/QualityFeatures/QualityFeatures';
import { ServiceBlocks } from '@/components/construction/ServiceBlocks/ServiceBlocks';
import styles from './page.module.css';

export default function ConstructionPage() {
    return (
        <div>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Building High-Value Assets</h1>
                    <p className={styles.heroSubtitle}>From concept to completion, we deliver engineering excellence for residential and commercial projects.</p>
                    <Link href="/booking">
                        <Button variant="primary" size="lg">Start Your Project</Button>
                    </Link>
                </div>
            </section>

            <ConstructionProcess />
            <QualityFeatures />
            <ServiceBlocks />

            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Ready to build your dream project?</h2>
                    <p className={styles.ctaDesc}>Schedule a consultation with our structural experts today.</p>
                    <Link href="/booking">
                        <Button variant="primary" size="lg">Discuss Your Project</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
