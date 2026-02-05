'use client';

import React, { useState } from 'react';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
    images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className={styles.container}>
            <div className={styles.mainImageWrapper}>
                <div
                    className={styles.mainImage}
                    style={{ backgroundImage: `url(${activeImage})` }}
                />
            </div>

            <div className={styles.thumbnailGrid}>
                {images.map((img, index) => (
                    <button
                        key={index}
                        className={`${styles.thumbnail} ${activeImage === img ? styles.active : ''}`}
                        onClick={() => setActiveImage(img)}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>
        </div>
    );
}
