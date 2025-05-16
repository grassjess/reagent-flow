import React from 'react';

export default function GoBackButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 348,
        height: 81,
        margin: '40px auto',
        background: '#FFB5A7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        fontFamily: 'Inter',
        color: '#4A4A4A',
        cursor: 'pointer',
      }}
    >
      Go Back
    </div>
  );
}
