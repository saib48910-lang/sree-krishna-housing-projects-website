'use client';

import React from 'react';
import { MessageSquare, Ruler, FileCheck, Hammer, Key } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ConstructionProcess.module.css';

const STEPS = [
    {
        icon: MessageSquare,
        title: 'Consultation',
        desc: 'We understand your vision, requirements, and budget.'
    },
    {
        icon: Ruler,
        title: 'Design & Planning',
        desc: 'Architectural blueprints and structural engineering.'
    },
    {
        icon: FileCheck,
        title: 'Approvals',
        desc: 'Handling all legal permissions and municipal clearances.'
    },
    {
        icon: Hammer,
        title: 'Construction',
        desc: 'Premium quality build with grade-A materials.'
    },
    {
        icon: Key,
        title: 'Handover',
        desc: 'Final inspection and key delivery on time.'
    },
];

export function ConstructionProcess() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Process</h2>
                    <p className={styles.subtitle}>A transparent, step-by-step journey from concept to creation.</p>
                </div>

                <div className={styles.timeline}>
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconWrapper}>
                                <step.icon size={24} />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.stepNumber}>Step 0{index + 1}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
