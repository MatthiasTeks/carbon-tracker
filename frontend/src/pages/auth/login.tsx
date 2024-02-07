import { useState } from 'react';
import { useLoginQuery, useLogoutQuery } from '@/graphql/generated/schema';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { data: loginData } = useLoginQuery({
    variables: {
      infos: {
        email,
        password,
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await loginData;
      if (result) {
        if (result.login?.success) {
          console.info('success');
        } else {
          console.info('verify information');
        }
      } else {
        console.info('error happening');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('error happening');
    }
  };

  const { data: logoutData } = useLogoutQuery();

  const handleLogout = async () => {
    try {
      const logoutResult = await logoutData;
      if (logoutResult) {
        console.info('deconnexion successful');
      } else {
        console.info('error happening');
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
      <button className='bg-white' onClick={handleLogout}>
        test logout
      </button>
      {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
    </main>
  );
}

export default Login;
