'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { Phone, MessageCircle } from 'lucide-react';
import styles from './StickyBookingCard.module.css';

export function StickyBookingCard() {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Interested in this property?</h3>
            <p className={styles.subtitle}>Our experts are here to help you.</p>

            <div className={styles.actions}>
                <Link href="/booking">
                    <Button variant="primary" fullWidth size="lg">Book Site Visit</Button>
                </Link>
                <Button variant="outline" fullWidth size="lg">Request Details</Button>
            </div>

            <div className={styles.contactMethods}>
                <button className={styles.contactBtn}>
                    <Phone size={18} /> Call Now
                </button>
                <button className={styles.contactBtn}>
                    <MessageCircle size={18} /> WhatsApp
                </button>
            </div>

            <p className={styles.disclaimer}>
                No obligation. 100% Free Consultation.
            </p>
        </div>
    );
}
