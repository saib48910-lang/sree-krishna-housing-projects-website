'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import styles from './TestimonialsPreview.module.css';

const TESTIMONIALS = [
    {
        text: "Sree Krishna Housing Projects delivered exactly what they promised. The quality of construction and attention to detail in our new home is outstanding.",
        author: "Rajesh Kumar",
        location: "Tirupati",
        rating: 5
    },
    {
        text: "Professional, transparent, and timely. They helped us identify the perfect commercial plot for our business expansion.",
        author: "Anita Reddy",
        location: "Renigunta",
        rating: 5
    },
    {
        text: "Their end-to-end service made the entire land buying process effortless. Highly trusted team in the region.",
        author: "M. Venkat",
        location: "Chandragiri",
        rating: 5
    }
];

export function TestimonialsPreview() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', textAlign: 'center' }}>Client Stories</h2>
                    <p className="font-body" style={{ color: '#666', textAlign: 'center', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px auto' }}>Don't just take our word for it. Hear from our satisfied clients.</p>
                </div>

                <div className={styles.grid}>
                    {TESTIMONIALS.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.quoteIcon}>
                                <Quote size={48} strokeWidth={0} fill="rgba(201, 166, 107, 0.4)" />
                            </div>
                            <p className={styles.text}>"{item.text}"</p>

                            <div className={styles.footer}>
                                <div className={styles.stars}>
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="#C9A66B" stroke="none" />
                                    ))}
                                </div>
                                <div className={styles.authorInfo}>
                                    <span className={styles.author}>{item.author}</span>
                                    <span className={styles.divider}>•</span>
                                    <span className={styles.location}>{item.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
