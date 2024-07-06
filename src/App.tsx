import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import RegisterPage from './pages/registerPage';
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/' element={<Navigate to='/register' />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
