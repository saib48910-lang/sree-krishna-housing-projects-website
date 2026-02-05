'use client';

import React from 'react';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid/ProjectsGrid';
import styles from './page.module.css';

export default function ProjectsPage() {
    return (
        <div className="container">
            <div className={styles.pageHeader}>
                <h1 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Projects</h1>
                <p className="font-body" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                    A showcase of our commitment to quality and excellence. Explore our ongoing developments and completed landmarks.
                </p>
            </div>

            <div className={styles.content}>
                <ProjectsGrid />
            </div>
        </div>
    );
}
