'use client';

import React, { useState } from 'react';
import { ProjectCard, Project } from '../ProjectCard/ProjectCard';
import styles from './ProjectsGrid.module.css';

const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Sree Krishna Heights',
        location: 'Tirupati Central',
        type: 'Residential Apartment',
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3d272947?q=80&w=1000&auto=format&fit=crop',
        description: 'Luxury 3 BHK apartments with premium amenities in the heart of the city.'
    },
    {
        id: 2,
        title: 'Green Valley Enclave',
        location: 'Renigunta Road',
        type: 'Plotted Development',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop',
        description: 'Approved residential plots with wide roads, park, and underground drainage.'
    },
    {
        id: 3,
        title: 'Royal Business Park',
        location: 'Chandragiri',
        type: 'Commercial Complex',
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
        description: 'A modern commercial hub offering office spaces and retail outlets suited for growing businesses.'
    },
    {
        id: 4,
        title: 'Lakeside Villas',
        location: 'Tirupati Outskirts',
        type: 'Gated Community',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop',
        description: 'Exclusive 4 BHK villas designed for privacy and luxury living amidst nature.'
    },
    {
        id: 5,
        title: 'Temple Town Residency',
        location: 'Kapila Theertham',
        type: 'Residential Apartment',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1000&auto=format&fit=crop',
        description: 'Affordable 2 BHK apartments located conveniently close to spiritual landmarks.'
    },
    {
        id: 6,
        title: 'Highway Logistics Hub',
        location: 'Renigunta',
        type: 'Commercial / Industrial',
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
        description: 'Strategic warehousing and logistics facility with excellent highway connectivity.'
    },
];

type FilterType = 'All' | 'Ongoing' | 'Completed';

export function ProjectsGrid() {
    const [filter, setFilter] = useState<FilterType>('All');

    const filteredProjects = PROJECTS.filter(p =>
        filter === 'All' ? true : p.status === filter
    );

    return (
        <div>
            <div className={styles.filterTabs}>
                {['All', 'Ongoing', 'Completed'].map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${filter === tab ? styles.activeTab : ''}`}
                        onClick={() => setFilter(tab as FilterType)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className={styles.emptyState}>
                    <p>No projects found in this category.</p>
                </div>
            )}
        </div>
    );
}
