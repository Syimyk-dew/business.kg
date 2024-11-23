import React, { useState } from 'react';

const carBrands = [
  { name: 'Audi', logo: 'https://placeholder.svg' },
  { name: 'Toyota', logo: 'https://placeholder.svg' },
  { name: 'Kia', logo: 'https://placeholder.svg' },
  { name: 'Hyundai', logo: 'https://placeholder.svg' },
  { name: 'BMW', logo: 'https://placeholder.svg' },
  { name: 'Geely', logo: 'https://placeholder.svg' },
  { name: 'Nissan', logo: 'https://placeholder.svg' },
  { name: 'Ford', logo: 'https://placeholder.svg' },
  { name: 'Mercedes_Benz', logo: 'https://placeholder.svg' },
  { name: 'Haval', logo: 'https://placeholder.svg' },
  { name: 'Volkswagen', logo: 'https://placeholder.svg' },
  { name: 'Chevrolet', logo: 'https://placeholder.svg' },
  { name: 'Chery', logo: 'https://placeholder.svg' },
  { name: 'Mazda', logo: 'https://placeholder.svg' },
  { name: 'Лада', logo: 'https://placeholder.svg' },
  { name: 'Infiniti', logo: 'https://placeholder.svg' },
];

function Proda() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ brand, model, yearFrom, priceFrom, priceTo });
    // Here you would typically send this data to your backend or perform a search
  };

  return (
    <div id="proda" style={{ backgroundColor: '#f8f9fa', padding: '2rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="proda">
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
            Продать и купить авто в Кыргызстане
          </h1>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <select 
              value={brand} 
              onChange={(e) => setBrand(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da', minWidth: '200px' }}
            >
              <option value="">Марка: любая</option>
              {carBrands.map((brand) => (
                <option key={brand.name} value={brand.name}>{brand.name}</option>
              ))}
            </select>
            
            <select 
              value={model} 
              onChange={(e) => setModel(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da', minWidth: '200px' }}
            >
              <option value="">Модель: любая</option>
            </select>
            
            <select 
              value={yearFrom} 
              onChange={(e) => setYearFrom(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da', minWidth: '200px' }}
            >
              <option value="">Год от</option>
              {Array.from({ length: 50 }, (_, i) => 2024 - i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            
            <select 
              value={priceFrom} 
              onChange={(e) => setPriceFrom(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da', minWidth: '200px' }}
            >
              <option value="">Цена от, $</option>
              {[1000, 2000, 3000, 5000, 7000, 10000, 15000, 20000].map((price) => (
                <option key={price} value={price}>{price.toLocaleString()} $</option>
              ))}
            </select>
            
            <select 
              value={priceTo} 
              onChange={(e) => setPriceTo(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da', minWidth: '200px' }}
            >
              <option value="">Цена до, $</option>
              {[2000, 3000, 5000, 7000, 10000, 15000, 20000, 30000].map((price) => (
                <option key={price} value={price}>{price.toLocaleString()} $</option>
              ))}
            </select>
            
            <button 
              type="submit"
              style={{ 
                padding: '0.5rem 2rem', 
                backgroundColor: '#0d6efd', 
                color: 'white', 
                border: 'none', 
                borderRadius: '0.25rem', 
                cursor: 'pointer'
              }}
            >
              Найти
            </button>
          </form>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
            {carBrands.map((brand) => (
              <div key={brand.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <img src={brand.logo} alt={brand.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                <span style={{ fontSize: '1.125rem' }}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proda;

