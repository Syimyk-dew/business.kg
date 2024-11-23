import React from 'react';

function Footer() {
    return (
        <div id='footer' style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '3rem 0 1rem 0' }}>
            <div className='container' style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className='footer' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {/* Logo and Description */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                                <path d="M7 17L17 17M5 11L19 11M7 5L17 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>Mashina.kg</span>
                        </div>
                        <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.5' }}>
                            Машина – это №1 онлайн автобазар в Бишкеке и Кыргызстане нашего поколения. Мы помогаем обменять, продать и купить авто в Кыргызстане.
                        </p>
                    </div>

                    {/* Catalog Links */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Каталог:</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Легковые</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Коммерческие</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Спецтехника</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Компания:</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>О проекте</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Помощь</a></li>
                        </ul>
                    </div>

                    {/* Partners Links */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Партнерам:</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Реклама на Mashina.kg</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Рекламодателям</a></li>
                        </ul>
                    </div>
{/* ihsan */}
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a href="#" style={{ display: 'block' }}>
                                <img src="/placeholder.svg" alt="Download on the App Store" style={{ height: '40px' }} />
                            </a>
                            <a href="#" style={{ display: 'block' }}>
                                <img src="/placeholder.svg" alt="Get it on Google Play" style={{ height: '40px' }} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div style={{ 
                    borderTop: '1px solid #374151',
                    marginTop: '2rem',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    {/* Social Media Icons */}
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {['telegram', 'instagram', 'tiktok', 'whatsapp'].map((social) => (
                            <a 
                                key={social} 
                                href="#" 
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: '#374151',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                            >
                                {social[0].toUpperCase()}
                            </a>
                        ))}
                    </div>

                    {/* Legal Links */}
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>
                            Политика конфиденциальности
                        </a>
                        <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>
                            Пользовательское соглашение
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

