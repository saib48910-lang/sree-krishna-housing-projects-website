'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ServicesSnapshot.module.css';

const SERVICES = [
    {
        title: 'Real Estate Consulting',
        description: 'Expert guidance on buying, selling, and property valuation to maximize your investment.',
        link: '/services/consulting',
    },
    {
        title: 'Construction',
        description: 'Premium residential and commercial construction with uncompromising quality assurance.',
        link: '/services/construction',
    },
    {
        title: 'Land Development',
        description: 'Turning raw land into premium plotted communities with all necessary approvals.',
        link: '/services/land-development',
    },
    {
        title: 'Property Buying & Selling',
        description: 'Seamless transactions for trusted properties with complete transparency.',
        link: '/services/property-transactions',
    },
];

export function ServicesSnapshot() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="font-heading" style={{ fontSize: '2rem', marginBottom: '8px' }}>Our Expertise</h2>
                </div>

                <div className={styles.grid}>
                    {SERVICES.map((service, index) => (
                        <Link key={index} href={service.link} className={styles.card}>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                            <span className={styles.linkText}>
                                Learn More <ArrowRight size={14} className={styles.arrow} />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
