'use client';

import React from 'react';
import { PropertyCard } from '../PropertyCard/PropertyCard';
import styles from './PropertyGrid.module.css';

export const PROPERTIES = [
    {
        id: 1,
        title: 'Sree Krishna Heights',
        location: 'Tirupati Central',
        price: '₹ 85 Lakhs',
        type: 'Apartment',
        specs: '3 BHK',
        sqft: '1850 Sq.Ft',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3d272947?q=80&w=1000&auto=format&fit=crop',
        status: 'Ready to Move'
    },
    {
        id: 2,
        title: 'Green Valley Plots',
        location: 'Renigunta Road',
        price: '₹ 45 Lakhs',
        type: 'Land',
        specs: 'Plot',
        sqft: '2400 Sq.Ft',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop',
        status: 'New Launch'
    },
    {
        id: 3,
        title: 'Royal Commercial Complex',
        location: 'Chandragiri',
        price: '₹ 2.5 Cr',
        type: 'Commercial',
        specs: 'Office Space',
        sqft: '3500 Sq.Ft',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
        status: 'Under Construction'
    },
    {
        id: 4,
        title: 'Luxury Villa 24',
        location: 'Tirupati Outskirts',
        price: '₹ 1.8 Cr',
        type: 'Villa',
        specs: '4 BHK',
        sqft: '3200 Sq.Ft',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop',
        status: 'Ready to Move'
    },
    {
        id: 5,
        title: 'Sunrise Apartments',
        location: 'Tirupati Central',
        price: '₹ 65 Lakhs',
        type: 'Apartment',
        specs: '2 BHK',
        sqft: '1200 Sq.Ft',
        image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1000&auto=format&fit=crop',
        status: 'Ready to Move'
    },
    {
        id: 6,
        title: 'Highway Logistics Hub',
        location: 'Renigunta',
        price: '₹ 3.2 Cr',
        type: 'Commercial',
        specs: 'Warehouse',
        sqft: '5000 Sq.Ft',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
        status: 'New Launch'
    },
];

interface PropertyGridProps {
    properties?: typeof PROPERTIES;
}

export function PropertyGrid({ properties = PROPERTIES }: PropertyGridProps) {
    return (
        <div className={styles.grid}>
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
}
