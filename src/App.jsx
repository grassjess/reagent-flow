import React, { useState } from 'react';
import FreezerSelection from './components/FreezerSelection';
import FreezerMinus80 from './components/FreezerMinus80';
import Freezer20 from './components/Freezer20';
import Freezer4 from './components/Freezer4';

export default function App() {
  const [screen, setScreen] = useState('home');

  const goBack = () => setScreen('home');

  switch (screen) {
    case 'minus80':
      return <FreezerMinus80 onGoBack={goBack} />;
    case 'freezer20':
      return <Freezer20 onGoBack={goBack} />;
    case 'freezer4':
      return <Freezer4 onGoBack={goBack} />;
    default:
      return <FreezerSelection onSelect={setScreen} />;
  }
}
