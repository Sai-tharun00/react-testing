// index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and later
import App from './App'; // Import the App component
import './index.css'; // Import global styles (including Tailwind CSS if used)

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root to render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
