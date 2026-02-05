'use client';

import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import styles from './PropertyInfo.module.css';

interface PropertyInfoProps {
    data: {
        title: string;
        location: string;
        price: string;
        status: string;
        description: string;
        specs: { label: string; value: string }[];
        amenities: string[];
    };
}

export function PropertyInfo({ data }: PropertyInfoProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.badges}>
                    <span className={styles.statusBadge}>{data.status}</span>
                    <span className={styles.verifiedBadge}><CheckCircle size={12} /> Verified</span>
                </div>
                <h1 className={styles.title}>{data.title}</h1>
                <div className={styles.location}>
                    <MapPin size={18} /> {data.location}
                </div>
                <div className={styles.price}>{data.price}</div>
            </div>

            <div className={styles.specsGrid}>
                {data.specs.map((spec, index) => (
                    <div key={index} className={styles.specItem}>
                        <span className={styles.specLabel}>{spec.label}</span>
                        <span className={styles.specValue}>{spec.value}</span>
                    </div>
                ))}
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Description</h3>
                <p className={styles.description}>{data.description}</p>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Amenities</h3>
                <ul className={styles.amenitiesGrid}>
                    {data.amenities.map((item, index) => (
                        <li key={index} className={styles.amenityItem}>
                            <CheckCircle size={16} className={styles.checkIcon} /> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
