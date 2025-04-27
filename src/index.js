import React from 'react';
import ReactDOM from 'react-dom/client';  // 🛠️ Notice 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 🛠️ Create root properly in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
