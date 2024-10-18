// src/App.js
import React from 'react';
import ExerciseGraph from './ExerciseGraph';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
      <ExerciseGraph />
    </div>
  );
}

export default App;
