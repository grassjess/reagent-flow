import React, { useState } from 'react';
import Dumbledore from './Dumbledore';
import GoBackButton from './GoBackButton';

export default function FreezerMinus80({ onGoBack }) {
  const [screen, setScreen] = useState('list');

  const names = ['Dumbledore'];

  if (screen === 'dumbledore') {
    return <Dumbledore onGoBack={() => setScreen('list')} />;
  }

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
            cursor: 'pointer',
          }}
          onClick={() => setScreen(name.toLowerCase())}
        >
          {name}
        </div>
      ))}
      <GoBackButton onClick={onGoBack} />
    </div>
  );
}
