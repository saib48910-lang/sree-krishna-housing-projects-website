'use client';

import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './DateTimeStep.module.css';
import { BookingData } from '../BookingWizard/BookingWizard';

interface Props {
    data: BookingData;
    updateData: (updates: Partial<BookingData>) => void;
    onNext: () => void;
    onBack: () => void;
}

const DATES = [
    { label: 'Today', date: new Date() },
    { label: 'Tomorrow', date: new Date(Date.now() + 86400000) },
    { label: 'Wed, 5 Feb', date: new Date(Date.now() + 86400000 * 2) },
];

const TIME_SLOTS = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '04:00 PM', '06:00 PM'
];

export function DateTimeStep({ data, updateData, onNext, onBack }: Props) {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Select Date & Time</h2>

            <div className={styles.section}>
                <label className={styles.label}>Select Date</label>
                <div className={styles.dateGrid}>
                    {DATES.map((item, index) => (
                        <button
                            key={index}
                            className={`${styles.dateBtn} ${data.date?.toDateString() === item.date.toDateString() ? styles.active : ''}`}
                            onClick={() => updateData({ date: item.date })}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <label className={styles.label}>Select Time Slot</label>
                <div className={styles.timeGrid}>
                    {TIME_SLOTS.map((time, index) => (
                        <button
                            key={index}
                            className={`${styles.timeBtn} ${data.timeSlot === time ? styles.active : ''}`}
                            onClick={() => updateData({ timeSlot: time })}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.actions}>
                <Button variant="outline" onClick={onBack}>
                    <ArrowLeft size={16} style={{ marginRight: 8 }} /> Back
                </Button>
                <Button
                    variant="primary"
                    onClick={onNext}
                    className={styles.nextBtn}
                    disabled={!data.date || !data.timeSlot}
                >
                    Continue <ArrowRight size={16} style={{ marginLeft: 8 }} />
                </Button>
            </div>
        </div>
    );
}
