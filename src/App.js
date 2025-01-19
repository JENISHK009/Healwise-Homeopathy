import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import './App.css'; // Ensure that App.css is imported here
import HomePage from './pages/Home'; // Your Home page
import AboutPage from './pages/About'; // Your About page

function App() {
  return (
    <Router>
      <div className="App">
        {/* Wrap Route components inside Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page */}
          <Route path="/about" element={<AboutPage />} /> {/* About Us page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
