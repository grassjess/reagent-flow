import React from 'react';
import GoBackButton from './GoBackButton';

export default function Dumbledore({ onGoBack }) {
  const items = [
    { title: '10x Reagents', subtitle: 'Top shelf' },
    { title: 'Samples', subtitle: 'Middle shelf' },
    { title: 'Returns', subtitle: 'Bottom shelf' },
  ];

  return (
    <div style={{ backgroundColor: '#E6F0F4', height: '100vh', paddingTop: 100 }}>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            width: 684,
            height: 150,
            margin: '20px auto',
            background: '#F5F5F5',
            textAlign: 'center',
            fontFamily: 'Inter',
            color: '#4A4A4A',
            fontSize: 32,
            paddingTop: 20,
          }}
        >
          <div style={{ fontSize: 48 }}>{item.title}</div>
          <div>{item.subtitle}</div>
        </div>
      ))}
      <GoBackButton onClick={onGoBack} />
    </div>
  );
}
