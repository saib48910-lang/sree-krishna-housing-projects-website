'use client';

import React from 'react';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import styles from './BookingTypeStep.module.css';
import { BookingData, BookingType } from '../BookingWizard/BookingWizard';

interface Props {
    data: BookingData;
    updateData: (updates: Partial<BookingData>) => void;
    onNext: () => void;
}

export function BookingTypeStep({ data, updateData, onNext }: Props) {

    const handleSelect = (type: BookingType) => {
        updateData({ type });
        // Small delay for visual feedback before auto-advancing
        setTimeout(() => onNext(), 300);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>What would you like to schedule?</h2>

            <div className={styles.grid}>
                <button
                    className={`${styles.card} ${data.type === 'site-visit' ? styles.active : ''}`}
                    onClick={() => handleSelect('site-visit')}
                >
                    <div className={styles.iconWrapper}>
                        <MapPin size={32} />
                    </div>
                    <h3 className={styles.cardTitle}>Site Visit</h3>
                    <p className={styles.cardDesc}>Tour properties in person with our experts.</p>
                </button>

                <button
                    className={`${styles.card} ${data.type === 'consultation' ? styles.active : ''}`}
                    onClick={() => handleSelect('consultation')}
                >
                    <div className={styles.iconWrapper}>
                        <Users size={32} />
                    </div>
                    <h3 className={styles.cardTitle}>Consultation</h3>
                    <p className={styles.cardDesc}>Discuss investment, legality, or construction.</p>
                </button>
            </div>
        </div>
    );
}
