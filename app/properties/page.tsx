'use client';

import React from 'react';
import { FilterPanel, FilterValues } from '@/components/properties/FilterPanel/FilterPanel';
import { PropertyGrid, PROPERTIES } from '@/components/properties/PropertyGrid/PropertyGrid';
import styles from './page.module.css';

// Helper to parse price string to number in Lakhs
const parsePriceToLakhs = (priceStr: string): number => {
    const cleanStr = priceStr.replace(/[^0-9.]/g, '');
    const val = parseFloat(cleanStr);

    if (priceStr.includes('Cr')) {
        return val * 100; // 1 Cr = 100 Lakhs
    }
    return val; // Assumes Lakhs if not Cr
};

export default function PropertiesPage() {
    const [filteredProperties, setFilteredProperties] = React.useState(PROPERTIES);

    const handleApplyFilters = (filters: FilterValues) => {
        let results = [...PROPERTIES];

        // 1. Filter by Location (case insensitive normalized match)
        if (filters.location) {
            const locTerm = filters.location.toLowerCase().trim();
            results = results.filter(p =>
                p.location.toLowerCase().includes(locTerm)
            );
        }

        // 2. Filter by Property Type (with mapping)
        if (filters.propertyType && filters.propertyType !== 'All') {
            const typeFilter = filters.propertyType;
            if (typeFilter === 'Residential') {
                // Map 'Residential' to specific residential types in data
                results = results.filter(p => ['Apartment', 'Villa', 'Independent House'].includes(p.type));
            } else {
                // Direct match for Commercial, Land, etc.
                results = results.filter(p => p.type === typeFilter);
            }
        }

        // 3. Filter by Budget
        if (filters.budget) {
            results = results.filter(p => {
                const priceInLakhs = parsePriceToLakhs(p.price);

                if (filters.budget === '<50L') {
                    return priceInLakhs < 50;
                } else if (filters.budget === '50L-1Cr') {
                    return priceInLakhs >= 50 && priceInLakhs <= 100;
                } else if (filters.budget === '1Cr+') {
                    return priceInLakhs > 100;
                }
                return true;
            });
        }

        setFilteredProperties(results);
    };

    return (
        <div className="container">
            <div className={styles.pageHeader}>
                <h1 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Our Properties</h1>
                <p className="font-body" style={{ color: '#666' }}>Find your dream property in Tirupati's prime locations.</p>
            </div>

            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    <FilterPanel onApply={handleApplyFilters} />
                </aside>

                <main className={styles.mainContent}>
                    {filteredProperties.length > 0 ? (
                        <PropertyGrid properties={filteredProperties} />
                    ) : (
                        <div style={{
                            textAlign: 'center',
                            padding: '4rem 2rem',
                            background: '#fff',
                            borderRadius: '8px',
                            border: '1px solid #eee',
                            color: '#666'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>No properties match the selected filters</h3>
                            <p>Try adjusting your filters or clearing them to see all properties.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
