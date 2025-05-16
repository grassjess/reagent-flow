import React from 'react';

export default function FreezerSelection({ onSelect }) {
  const commonStyle = {
    width: 684,
    height: 150,
    margin: '20px auto',
    background: '#FFB5A7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    fontFamily: 'Inter',
    color: '#4A4A4A',
    cursor: 'pointer',
  };

  return (
    <div style={{ backgroundColor: '#E6F0F4', height: '100vh', paddingTop: 100 }}>
      <div style={commonStyle} onClick={() => onSelect('minus80')}>-80°C Freezers</div>
      <div style={commonStyle} onClick={() => onSelect('freezer20')}>-20°C Freezers</div>
      <div style={commonStyle} onClick={() => onSelect('freezer4')}>4°C Fridges</div>
    </div>
  );
}
