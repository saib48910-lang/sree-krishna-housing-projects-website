'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { AboutIntroduction } from '@/components/about/AboutIntroduction/AboutIntroduction';
import { JourneyStats } from '@/components/about/JourneyStats/JourneyStats';
import { CoreValues } from '@/components/about/CoreValues/CoreValues';
import { TrustIndicators } from '@/components/about/TrustIndicators/TrustIndicators';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <div>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>A Legacy of Trust</h1>
                    <p className={styles.heroSubtitle}>Building Tirupati&apos;s future, one landmark at a time.</p>
                </div>
            </section>

            <AboutIntroduction />
            <JourneyStats />
            <CoreValues />
            <TrustIndicators />

            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Let&apos;s build something great together.</h2>
                    <p className={styles.ctaDesc}>Whether it&apos;s your dream home or a commercial ambition, we are here to guide you.</p>
                    <Link href="/contact">
                        <Button variant="outline" size="lg">Get in Touch</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
