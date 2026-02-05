'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import styles from './ProjectCard.module.css';

export interface Project {
    id: number;
    title: string;
    location: string;
    type: string;
    status: 'Ongoing' | 'Completed';
    image: string;
    description: string;
}

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <div style={{ backgroundImage: `url(${project.image})` }} className={styles.image} />
                <span className={`${styles.statusBadge} ${project.status === 'Ongoing' ? styles.ongoing : styles.completed}`}>
                    {project.status}
                </span>
            </div>

            <div className={styles.content}>
                <div className={styles.category}>{project.type}</div>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.location}>
                    <MapPin size={16} /> {project.location}
                </div>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.footer}>
                    <Link href={`/projects/${project.id}`} className={styles.link}>
                        View Project <ArrowRight size={16} className={styles.arrow} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
