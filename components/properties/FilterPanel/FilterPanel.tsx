'use client';

import React from 'react';
import { Filter, MapPin, Building, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './FilterPanel.module.css';

export interface FilterValues {
    location: string;
    propertyType: string;
    budget: string;
}

interface FilterPanelProps {
    onApply?: (filters: FilterValues) => void;
}

export function FilterPanel({ onApply }: FilterPanelProps) {
    // State for controlled inputs
    const [location, setLocation] = React.useState('');
    const [propertyType, setPropertyType] = React.useState('All');
    const [budget, setBudget] = React.useState('');

    // Handlers
    const handleClearAll = () => {
        setLocation('');
        setPropertyType('All');
        setBudget('');
        // Also notify parent of clear
        if (onApply) {
            onApply({ location: '', propertyType: 'All', budget: '' });
        }
    };

    const handleApplyFilters = () => {
        if (onApply) {
            onApply({ location, propertyType, budget });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleWrapper}>
                    <Filter size={20} />
                    <h3 className={styles.title}>Filters</h3>
                </div>
                <button
                    className={styles.clearBtn}
                    onClick={handleClearAll}
                    type="button"
                >
                    Clear All
                </button>
            </div>

            <div className={styles.section}>
                <label className={styles.label}>
                    <MapPin size={16} /> Location
                </label>
                <select
                    className={styles.select}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="">All Locations</option>
                    <option value="tirupati">Tirupati</option>
                    <option value="renigunta">Renigunta</option>
                    <option value="chandragiri">Chandragiri</option>
                </select>
            </div>

            <div className={styles.section}>
                <label className={styles.label}>
                    <Building size={16} /> Property Type
                </label>
                <div className={styles.pills}>
                    {['All', 'Residential', 'Commercial', 'Land'].map((type) => (
                        <button
                            key={type}
                            className={`${styles.pill} ${propertyType === type ? styles.active : ''}`}
                            onClick={() => setPropertyType(type)}
                            type="button"
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <label className={styles.label}>
                    <Tag size={16} /> Budget
                </label>
                <select
                    className={styles.select}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                >
                    <option value="">Any Budget</option>
                    <option value="<50L">Less than 50L</option>
                    <option value="50L-1Cr">50L - 1Cr</option>
                    <option value="1Cr+">1 Cr+</option>
                </select>
            </div>

            <div className={styles.action}>
                <Button
                    variant="primary"
                    fullWidth
                    className={styles.applyBtn}
                    onClick={handleApplyFilters}
                >
                    Apply Filters
                </Button>
            </div>
        </div>
    );
}
