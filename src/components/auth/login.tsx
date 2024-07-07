import React, { FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  setEmail,
  setPassword,
  setErrors,
} from '../../redux/reducers/loginSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {email, password, errors} = useSelector(
    (state: RootState) => state.login,
  );
   

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = { email: '', password: '' };

    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    dispatch(setErrors(newErrors));

    if (newErrors.email || newErrors.password) return;

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (error : any) {
      console.error('Login error:', error.message);
      alert('Login failed. Please check your credentials.');
    }
    

  }

  return (
    <div>
      <div className='registerBody'>
      <div className='registerContainer'>
        <form onSubmit={handleSubmit} className='registerForm'>
          <h2>Login</h2>
          <div className='formGroup'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            {errors.email && (
              <span className='error'>{'*' + errors.email}</span>
            )}
          </div>
          <div className='formGroup'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
            {errors.password && (
              <span className='error'>{'*' + errors.password}</span>
            )}
          </div>
          <p className='register-message'>
            Don't have an account? <a href='register'>Register</a>
          </p>
          <button type='submit' className='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
        
    </div>
  )
}

export default Login