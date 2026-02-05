import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ConsultingPage() {
    return (
        <div className="container" style={{ padding: '40px 20px 80px' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: '#666', textDecoration: 'none' }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <h1 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#1a1a1a' }}>Real Estate Consulting</h1>
            <p style={{ fontSize: '1.125rem', color: '#555', marginBottom: '48px', maxWidth: '800px', lineHeight: '1.6' }}>
                Expert guidance on buying, selling, and property valuation to maximize your investment. We provide market analysis, legal soundness checks, and strategic advice tailored to your portfolio goals.
            </p>

            <div style={{ display: 'grid', gap: '24px' }}>
                <ServiceItem
                    title="Property Valuation & Market Guidance"
                    description="Get accurate market value assessments and data-driven insights to make informed buy/sell decisions in the Tirupati region."
                />
                <ServiceItem
                    title="Legal Verification & Documentation Support"
                    description="Thorough verification of link documents, ec, and approvals to ensure a hassle-free and legally secure transaction."
                />
                <ServiceItem
                    title="Investment Advisory (Residential & Plots)"
                    description="Strategic portfolio planning to identify high-growth opportunities in emerging residential and commercial corridors."
                />
                <ServiceItem
                    title="Vastu & Site Feasibility Consultation"
                    description="Traditional Vastu compliance checks combined with modern site feasibility analysis for optimal construction planning."
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
