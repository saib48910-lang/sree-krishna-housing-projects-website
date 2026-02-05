'use client';

import React from 'react';
import { BookingWizard } from '@/components/booking/BookingWizard/BookingWizard';
import styles from './page.module.css';

export default function BookingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wizardWrapper}>
                <h1 className={styles.pageTitle}>Schedule Your Visit</h1>
                <BookingWizard />
            </div>
        </div>
    );
}
