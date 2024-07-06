import React, { FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setUsername, setEmail, setPassword, setErrors } from '../../redux/reducers/registerSlice';

const Register = () => {
  const dispatch = useDispatch();
  const { username, email, password, errors } = useSelector((state: RootState) => state.register);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = { username: '', email: '', password: '' };

    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    dispatch(setErrors(newErrors));

    if (newErrors.username || newErrors.email || newErrors.password) return;

    // Handle form submission logic here
  };

  return (
    <div className='registerBody'>
      <div className='registerContainer'>
        <form onSubmit={handleSubmit} className='registerForm'>
          <h2>Register</h2>
          <div className='formGroup'>
            <label htmlFor='username'>User Name</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => dispatch(setUsername(e.target.value))}
            />
            {errors.username && <span className='error'>{"*" + errors.username}</span>}
          </div>
          <div className='formGroup'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            {errors.email && <span className='error'>{"*" + errors.email}</span>}
          </div>
          <div className='formGroup'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
            {errors.password && <span className='error'>{"*" + errors.password}</span>}
          </div>
          <button type='submit' className='submit'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
