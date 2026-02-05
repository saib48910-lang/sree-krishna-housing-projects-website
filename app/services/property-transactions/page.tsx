import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PropertyTransactionsPage() {
    return (
        <div className="container" style={{ padding: '40px 20px 80px' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: '#666', textDecoration: 'none' }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <h1 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#1a1a1a' }}>Property Buying & Selling</h1>
            <p style={{ fontSize: '1.125rem', color: '#555', marginBottom: '48px', maxWidth: '800px', lineHeight: '1.6' }}>
                Seamless transactions for trusted properties with complete transparency. We act as your reliable partner in identifying, negotiating, and closing real estate deals.
            </p>

            <div style={{ display: 'grid', gap: '24px' }}>
                <ServiceItem
                    title="Residential Property Sales"
                    description="Assisting in the sale and purchase of apartments, villas, and independent houses with verified documentation."
                />
                <ServiceItem
                    title="Plot Buying & Selling Assistance"
                    description="Curated database of approved residential and commercial plots in high-growth areas suitable for immediate construction or investment."
                />
                <ServiceItem
                    title="End-to-End Transaction Management"
                    description="Managing the entire lifecycle of the deal from property identification to final registration, ensuring peace of mind."
                />
                <ServiceItem
                    title="Price Negotiation Support"
                    description="Expert negotiation to help buyers get fair pricing and sellers achieve optimal value for their assets."
                />
                <ServiceItem
                    title="Registration & Handover Support"
                    description="Guiding you through the registration process, stamp duty calculations, and ensuring smooth physical possession of the property."
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
