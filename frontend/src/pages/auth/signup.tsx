import React, { useState } from 'react';
import { useRegisterMutation } from '@/graphql/generated/schema';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [register] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await register({
        variables: {
          infos: {
            email,
            password,
          },
        },
      });

      if (result?.data?.register) {
        console.info('success');
      } else {
        console.info('something bad happened');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('error happening');
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between text-black p-24`}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='email'
            placeholder='mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input className='bg-white' type='submit' />
      </form>
      {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
    </main>
  );
}

export default Signup;
