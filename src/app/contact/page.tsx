'use client';

import React from 'react';
import { ContactForm } from '@/components/contact/ContactForm/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo/ContactInfo';
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <h1 className={styles.pageTitle}>Get in Touch</h1>
                <p className={styles.pageSubtitle}>We are here to answer your questions and guide you home.</p>
            </div>

            <div className={styles.contentGrid}>
                {/* Left: Info (Desktop) / Top (Mobile) - Reordered via CSS grid if needed, but standard is fine */}
                <div className={styles.infoCol}>
                    <ContactInfo />
                </div>

                <div className={styles.formCol}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
