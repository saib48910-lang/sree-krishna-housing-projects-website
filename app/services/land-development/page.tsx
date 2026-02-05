import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function LandDevelopmentPage() {
    return (
        <div className="container" style={{ padding: '40px 20px 80px' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: '#666', textDecoration: 'none' }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <h1 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#1a1a1a' }}>Land Development</h1>
            <p style={{ fontSize: '1.125rem', color: '#555', marginBottom: '48px', maxWidth: '800px', lineHeight: '1.6' }}>
                Turning raw land into premium plotted communities with all necessary approvals. We specialize in creating high-value infrastructure that ensures legally safe and ready-to-build plots.
            </p>

            <div style={{ display: 'grid', gap: '24px' }}>
                <ServiceItem
                    title="Plot Layout Planning & Design"
                    description="Efficient and Vastu-compliant layout designs that maximize utilizable land while ensuring wide roads and community spaces."
                />
                <ServiceItem
                    title="DTCP / Panchayat / Local Approvals"
                    description="Handling the complex bureaucracy of obtaining necessary approvals from DTCP, TUDA, or local panchayats to ensure clean titles."
                />
                <ServiceItem
                    title="Road, Drainage & Infrastructure Development"
                    description="Professional execution of BT/CC roads, underground drainage systems, electrification, and water lines for self-sufficient communities."
                />
                <ServiceItem
                    title="Gated Community Development"
                    description="Creating secure, upscale gated communities with compound walls, entrance arches, parks, and 24/7 security infrastructure."
                />
                <ServiceItem
                    title="Land Feasibility & ROI Assessment"
                    description="Analyzing potential land parcels for development suitability and projecting Return on Investment for developers and investors."
                />
            </div>
        </div>
    );
}

function ServiceItem({ title, description }: { title: string; description: string }) {
    return (
        <div style={{ padding: '32px', border: '1px solid #e5e5e5', borderRadius: '12px', background: '#fff' }}>
            <h3 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#1a1a1a' }}>{title}</h3>
            <p style={{ marginBottom: '24px', color: '#555', lineHeight: '1.6' }}>{description}</p>
            <div style={{ textAlign: 'right' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1a1a1a', fontWeight: 600, textDecoration: 'none' }}>
                    Enquire Now <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}
