import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <Sidebar />
    </React.StrictMode>
  );
}

export default App;
