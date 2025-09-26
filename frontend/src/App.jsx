import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Components
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';

// Configure axios defaults
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('/profile');
      setUser(response.data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Landing page - no navbar */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Auth pages - with navbar */}
          <Route 
            path="/register" 
            element={
              user ? <Navigate to="/profile" replace /> : 
              <div>
                <Navbar user={user} onLogout={handleLogout} />
                <main className="main-content">
                  <Register onLogin={handleLogin} />
                </main>
              </div>
            } 
          />
          <Route 
            path="/login" 
            element={
              user ? <Navigate to="/profile" replace /> : 
              <div>
                <Navbar user={user} onLogout={handleLogout} />
                <main className="main-content">
                  <Login onLogin={handleLogin} />
                </main>
              </div>
            } 
          />
          
          {/* Protected pages - with navbar */}
          <Route 
            path="/profile" 
            element={
              user ? 
              <div>
                <Navbar user={user} onLogout={handleLogout} />
                <main className="main-content">
                  <Profile user={user} />
                </main>
              </div> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              user ? 
              <div>
                <Navbar user={user} onLogout={handleLogout} />
                <main className="main-content">
                  <Home user={user} />
                </main>
              </div> : 
              <Navigate to="/login" replace />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;