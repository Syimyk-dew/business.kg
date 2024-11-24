import React, { useState } from 'react';

function Recomen() {
    const [viewType, setViewType] = useState('grid');
    
    const cars = Array(12).fill({
        urgent: true,
        favorite: false,
        title: 'CHERY Tiggo 7 Pro Max, 2024',
        price_usd: 29357,
        price_som: '2 720 000',
        year: 2024,
        mileage: 35000,
        dealer: 'Flagman_auto_salon',
        image: '/placeholder.svg'
    });

    return (
        <div id='recomen'>
            <div className='container'>
                <div className='recomen'>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '1.5rem'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                            Рекомендации
                        </h2>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button 
                                onClick={() => setViewType('grid')}
                                style={{
                                    padding: '0.5rem',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '0.375rem',
                                    background: viewType === 'grid' ? '#f3f4f6' : 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                ⊞
                            </button>
                            <button 
                                onClick={() => setViewType('list')}
                                style={{
                                    padding: '0.5rem',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '0.375rem',
                                    background: viewType === 'list' ? '#f3f4f6' : 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                ≡
                            </button>
                        </div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: viewType === 'grid' 
                            ? 'repeat(auto-fill, minmax(250px, 1fr))'
                            : '1fr',
                        gap: '1rem'
                    }}>
                        {cars.map((car, index) => (
                            <div key={index} style={{
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                                overflow: 'hidden',
                                backgroundColor: 'white',
                                position: 'relative',
                                display: viewType === 'list' ? 'flex' : 'block'
                            }}>
                                <div style={{ 
                                    position: 'relative',
                                    width: viewType === 'list' ? '300px' : 'auto',
                                    flexShrink: 0
                                }}>
                                    <img 
                                        src={car.image} 
                                        alt={car.title}
                                        style={{
                                            width: '100%',
                                            height: viewType === 'list' ? '200px' : '200px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <span style={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        left: '0.5rem',
                                        background: '#ef4444',
                                        color: 'white',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '0.25rem',
                                        fontSize: '0.75rem',
                                        fontWeight: '500'
                                    }}>
                                        СРОЧНО
                                    </span>
                                    <button style={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '0.5rem',
                                        background: 'white',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '2rem',
                                        height: '2rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                                    }}>
                                        ♡
                                    </button>
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '0.5rem',
                                        left: '0.5rem',
                                        background: '#3b82f6',
                                        color: 'white',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '0.25rem',
                                        fontSize: '0.75rem'
                                    }}>
                                        {car.dealer}
                                    </span>
                                </div>

                                <div style={{ 
                                    padding: '1rem',
                                    flex: viewType === 'list' ? 1 : 'none'
                                }}>
                                    <h3 style={{ 
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {car.title}
                                    </h3>
                                    <div style={{ 
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold',
                                        marginBottom: '0.25rem'
                                    }}>
                                        ${car.price_usd}
                                    </div>
                                    <div style={{ 
                                        color: '#6b7280',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {car.price_som} сом
                                    </div>
                                    <div style={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: '#6b7280',
                                        fontSize: '0.875rem'
                                    }}>
                                        <span>⌚ {car.year}</span>
                                        <span>•</span>
                                        <span>{car.mileage} км</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recomen;

