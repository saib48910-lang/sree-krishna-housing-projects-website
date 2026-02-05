'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, BedDouble, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './PropertyCard.module.css';

interface PropertyProps {
    property: {
        id: number;
        title: string;
        location: string;
        price: string;
        type: string;
        specs: string;
        sqft: string;
        image: string;
        status: string;
    };
}

export function PropertyCard({ property }: PropertyProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <div style={{ backgroundImage: `url(${property.image})` }} className={styles.image} />
                <div className={styles.badges}>
                    <span className={styles.statusBadge}>{property.status}</span>
                    <span className={styles.typeBadge}>{property.type}</span>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{property.title}</h3>
                    <div className={styles.location}>
                        <MapPin size={16} className={styles.icon} /> {property.location}
                    </div>
                </div>

                <div className={styles.specs}>
                    <div className={styles.specItem}>
                        <BedDouble size={18} /> {property.specs}
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.specItem}>
                        <Ruler size={18} /> {property.sqft}
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.price}>{property.price}</div>
                    <div className={styles.actions}>
                        <Link href={`/properties/${property.id}`}>
                            <Button variant="outline" size="sm">Details</Button>
                        </Link>
                        <Link href="/booking">
                            <Button variant="primary" size="sm">Enquire</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
