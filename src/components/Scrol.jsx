import React from 'react';

function Scrol() {
    const businesses = [
        {
            name: 'China Lion Cars',
            listings: '217 объявлений',
            logo: '/placeholder.svg'
        },
        {
            name: 'Diamond',
            listings: '217 объявлений',
            logo: '/placeholder.svg'
        },
        {
            name: 'Silk Road Auto',
            listings: '217 объявлений',
            logo: '/placeholder.svg'
        },
        {
            name: 'Авто и точка',
            listings: '217 объявлений',
            logo: '/placeholder.svg'
        },
        {
            name: 'Bavaria',
            listings: '217 объявлений',
            logo: '/placeholder.svg'
        },
        {
            name: 'AutoExport',
            listings: '217 объявлений',
            logo: '/placeholder.svg'
        }
    ];

    const scroll = (direction) => {
        const container = document.querySelector('.scrol-content');
        const scrollAmount = 300;
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div id='scrol' style={{ padding: '2rem 0' }}>
            <div className='container' style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className='scrol'>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '1rem'
                    }}>
                        <h2 style={{ 
                            fontSize: '1.5rem', 
                            fontWeight: 'bold'
                        }}>
                            Автобизнес
                        </h2>
                        <a 
                            href="#" 
                            style={{ 
                                color: '#4361ee', 
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            Смотреть все
                            <span style={{ fontSize: '1.2rem' }}>→</span>
                        </a>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <button 
                            onClick={() => scroll('left')}
                            style={{
                                position: 'absolute',
                                left: '-20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 1,
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: 'white',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            ←
                        </button>

                        <div 
                            className="scrol-content"
                            style={{
                                display: 'flex',
                                overflowX: 'auto',
                                gap: '1rem',
                                scrollBehavior: 'smooth',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                padding: '1rem 0'
                            }}
                        >
                            {businesses.map((business, index) => (
                                <div 
                                    key={index}
                                    style={{
                                        minWidth: '200px',
                                        padding: '1rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '0.5rem',
                                        backgroundColor: 'white',
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s',
                                        flex: '0 0 auto'
                                    }}
                                >
                                    <img 
                                        src={business.logo}
                                        alt={business.name}
                                        style={{
                                            width: '100%',
                                            height: '100px',
                                            objectFit: 'contain',
                                            marginBottom: '0.5rem'
                                        }}
                                    />
                                    <h3 style={{ 
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        marginBottom: '0.25rem'
                                    }}>
                                        {business.name}
                                    </h3>
                                    <p style={{ 
                                        color: '#6b7280',
                                        fontSize: '0.875rem'
                                    }}>
                                        {business.listings}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <button 
                            onClick={() => scroll('right')}
                            style={{
                                position: 'absolute',
                                right: '-20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 1,
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: 'white',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Scrol;

