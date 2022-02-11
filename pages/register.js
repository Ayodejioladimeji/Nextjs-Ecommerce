import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const initialState = { email: '', username: '', password: '' };

const Register = () => {
  const [userData, setUserData] = useState(initialState);
  const { email, username, password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className='register'>
      <Head>
        <title>Register Page</title>
      </Head>

      <h4>REGISTER TO CONTINUE</h4>

      <div className='register-box'>
        <form>
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
            Login
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
