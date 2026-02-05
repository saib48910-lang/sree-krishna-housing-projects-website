'use client';

import React from 'react';
import styles from './AboutIntroduction.module.css';
import { motion } from 'framer-motion';

export function AboutIntroduction() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.headline}>Sree Krishna Housing Projects</h2>
                    <div className={styles.divider} />
                    <p className={styles.text}>
                        For over a decade, we have been more than just builders; we have been the architects of trust in Tirupati.
                        Our journey began with a simple vision: to create spaces that merge structural integrity with aesthetic elegance.
                        Today, Sree Krishna Housing Projects stands as a symbol of reliability, delivering homes and commercial assets that carry a legacy of quality assurance and legal transparency.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
