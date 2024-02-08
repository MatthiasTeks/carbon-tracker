import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';
import { LoginQuery, LoginQueryVariables } from '@/graphql/generated/schema';
import { LOGIN } from '@/graphql/user/queries/auth.queries';
import { InputLogin } from '@/types/graphql';

function Login() {
  const router = useRouter();

  const [login] = useLazyQuery<LoginQuery, LoginQueryVariables>(LOGIN);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form) as InputLogin;
    if (formData.email && formData.password) {
      login({
        variables: {
          infos: { email: formData.email, password: formData.password },
        },
        onCompleted(result) {
          if (result.login.success) {
            router.push('/');
          }
        },
      });
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between text-black p-24`}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' name='email' placeholder='mail' />
        </div>
        <div>
          <input type='password' name='password' placeholder='password' />
        </div>
        <input className='bg-white' type='submit' data-testid='submit' />
        <input className='bg-white' type='submit' data-testid='submit' />
      </form>
    </main>
  );
}

export default Login;
