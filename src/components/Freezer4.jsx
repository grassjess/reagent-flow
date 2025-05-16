import React from 'react';
import GoBackButton from './GoBackButton';

export default function Freezer4({ onGoBack }) {
  const names = ['Headwig', 'Hermione', 'Mavalo'];

  return (
    <div style={{ backgroundColor: '#E6F0F4', height: '100vh', paddingTop: 100 }}>
      {names.map(name => (
        <div
          key={name}
          style={{
            width: 684,
            height: 150,
            margin: '20px auto',
            background: '#F5F5F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 48,
            fontFamily: 'Inter',
            color: '#4A4A4A',
          }}
        >
          {name}
        </div>
      ))}
      <GoBackButton onClick={onGoBack} />
    </div>
  );
}
