import Head from 'next/head';
import Link from 'next/link';
import { useState, useContext } from 'react';
import valid from './../utils/valid';
import { Context } from './../store/Context';

const initialState = { email: '', username: '', password: '' };

const Register = () => {
  const [state, dispatch] = useContext(Context);
  const [userData, setUserData] = useState(initialState);
  const { email, username, password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const errMsg = valid(email, username, password);
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    dispatch({ type: 'NOTIFY', payload: { success: 'Account Created' } });
  };

  return (
    <div className='register'>
      <Head>
        <title>Register Page</title>
      </Head>

      <h4>REGISTER TO CONTINUE</h4>

      <div className='register-box'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              name='email'
              value={email}
              onChange={handleChangeInput}
              placeholder='Provide your email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              value={username}
              onChange={handleChangeInput}
              placeholder='Provide your username'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              name='password'
              value={password}
              onChange={handleChangeInput}
              placeholder='********'
            />
          </div>

          <button type='submit' className='btn w-100'>
            Register
          </button>

          <p className='my-2'>
            Already a member?
            <Link href='/signin'>
              <a style={{ color: 'crimson' }}>Login Now</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
