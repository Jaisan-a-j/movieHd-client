import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/' element={<Navigate to='/register' />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
