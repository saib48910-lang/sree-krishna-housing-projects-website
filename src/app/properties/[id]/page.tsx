'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { ImageGallery } from '@/components/properties/ImageGallery/ImageGallery';
import { PropertyInfo } from '@/components/properties/PropertyInfo/PropertyInfo';
import { StickyBookingCard } from '@/components/properties/StickyBookingCard/StickyBookingCard';
import styles from './page.module.css';

// Simulated Data (Ideally fetched based on ID)
const PROPERTY_DATA = {
    title: 'Sree Krishna Heights',
    location: 'Tirupati Central, Beside TBR Cinemas',
    price: '₹ 85 Lakhs',
    status: 'Ready to Move',
    description: `Experience the pinnacle of urban living at Sree Krishna Heights. This premium residential complex offers spacious 3 BHK apartments designed for modern families. Located in the heart of Tirupati, you are just minutes away from schools, hospitals, and entertainment hubs.
    
    The project features state-of-the-art amenities including a rooftop swimming pool, fully equipped gymnasium, and landscaped gardens. Each unit is Vaastu compliant and finished with high-quality materials to ensure lasting value.`,
    specs: [
        { label: 'Configuration', value: '3 BHK' },
        { label: 'Area', value: '1850 Sq.Ft' },
        { label: 'Facing', value: 'East / West' },
        { label: 'Total Floors', value: '5 Floors' },
        { label: 'Parking', value: '2 Covered' },
        { label: 'Bathrooms', value: '3' },
        { label: 'Balconies', value: '2' },
        { label: 'Possession', value: 'Immediate' },
    ],
    amenities: [
        '24/7 Security & CCTV',
        'Power Backup',
        'Covered Car Parking',
        'High-Speed Elevators',
        'Children\'s Play Area',
        'Rooftop Garden',
        'Gymnasium',
        'Community Hall'
    ],
    images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3d272947?q=80&w=1200&auto=format&fit=crop', // Living
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop', // Kitchen
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', // Bedroom
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop', // Exterior
        'https://images.unsplash.com/photo-1628624747186-a9419436115b?q=80&w=1200&auto=format&fit=crop', // Bathroom
    ]
};

export default function PropertyDetailPage() {
    const _params = useParams();
    // In a real app, we would use params.id to fetch data.
    // For now, we use static data.

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.mainColumn}>
                    <ImageGallery images={PROPERTY_DATA.images} />
                    <div className={styles.mobileOnlyBooking}>
                        {/* Mobile Booking Button placeholder if needed, mostly handled by layout bottom bar */}
                    </div>
                    <div className={styles.infoWrapper}>
                        <PropertyInfo data={PROPERTY_DATA} />
                    </div>
                </div>

                <aside className={styles.sidebar}>
                    <StickyBookingCard />
                </aside>
            </div>
        </div>
    );
}
