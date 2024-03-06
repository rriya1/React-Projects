// src/App.js
import React from 'react';
import './App.css';
import jsonData from './data/expanded_diversified_crm_data.json';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
        <Layout data={jsonData}></Layout>
    </div>
  );
}

export default App;