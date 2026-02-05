import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ConstructionPage() {
    return (
        <div className="container" style={{ padding: '40px 20px 80px' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: '#666', textDecoration: 'none' }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <h1 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#1a1a1a' }}>Construction</h1>
            <p style={{ fontSize: '1.125rem', color: '#555', marginBottom: '48px', maxWidth: '800px', lineHeight: '1.6' }}>
                Premium residential and commercial construction with uncompromising quality assurance. From foundation to finish, we ensure structural integrity and aesthetic excellence.
            </p>

            <div style={{ display: 'grid', gap: '24px' }}>
                <ServiceItem
                    title="Residential Home Construction"
                    description="Custom-built villas and independent houses designed to reflect your lifestyle, using premium materials and expert craftsmanship."
                />
                <ServiceItem
                    title="Commercial Building Construction"
                    description="Scalable and functional workspaces, retail complexes, and office buildings delivered on time and within budget."
                />
                <ServiceItem
                    title="Turnkey Project Execution"
                    description="End-to-end project management covering design, procurement, and construction, giving you a completely stress-free experience."
                />
                <ServiceItem
                    title="Renovation & Structural Modifications"
                    description="Modernizing existing spaces with structural strengthening, layout expansion, and contemporary design upgrades."
                />
                <ServiceItem
                    title="Quality & Stage-wise Inspection"
                    description="Rigorous quality control checks at every stage of construction to verify material standards and workmanship."
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
