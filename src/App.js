import React from 'react';
import ApplianceItem from './components/ApplianceItem';
import './App.css';

function App() {
  const appliances = [
    { id: 1, name: 'Fan' },
    { id: 2, name: 'Air Conditioner' },
    { id: 3, name: 'Lights' },
    { id: 4, name: 'TV' },
    { id: 5, name: 'PC' },

  ];

  return (
    <div className="app">
      <h1 className="app-title">Home Appliance Control</h1>
      <div className="appliance-list">
        {appliances.map(appliance => (
          <ApplianceItem key={appliance.id} appliance={appliance} />
        ))}
      </div>
    </div>
  );
}

export default App;
