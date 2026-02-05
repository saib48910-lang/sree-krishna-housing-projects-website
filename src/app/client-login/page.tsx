import React from 'react';
import { Button } from '@/components/ui/Button/Button';

export default function ClientLoginPage() {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F9FAFB',
            padding: '2rem'
        }}>
            <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center'
            }}>
                <h1 className="font-heading" style={{ marginBottom: '1rem', color: '#1A1A1A' }}>Client Login</h1>
                <p style={{ color: '#666', marginBottom: '2rem' }}>
                    Access your property documents and payment history.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        style={{
                            padding: '0.75rem',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            fontSize: '1rem'
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={{
                            padding: '0.75rem',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            fontSize: '1rem'
                        }}
                    />
                </div>

                <Button fullWidth variant="primary">Login</Button>

                <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#888' }}>
                    Forgot password? <span style={{ color: '#C5A065', cursor: 'pointer' }}>Reset here</span>
                </p>
            </div>
        </div>
    );
}
