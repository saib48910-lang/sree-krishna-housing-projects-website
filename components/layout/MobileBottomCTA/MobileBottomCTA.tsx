'use client';

import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import styles from './MobileBottomCTA.module.css';

export function MobileBottomCTA() {
    return (
        <div className={styles.container}>
            <Button fullWidth variant="primary" size="lg" className={styles.button}>
                Book Site Visit
            </Button>
        </div>
    );
}
