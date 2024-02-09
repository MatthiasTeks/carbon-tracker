import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import {
  LoginQuery,
  LoginQueryVariables,
  InputLogin,
} from '@/graphql/generated/schema';
import { LOGIN } from '@/graphql/user/queries/auth.queries';
import InputLabel from '@/components/commons/inputs/InputLabel';
import Button from '@/components/commons/buttons/Button';
import Typography from '@/components/commons/typography/Typography';
import InputCheckbox from '@/components/commons/inputs/InputCheckbox';
import AuthLayout from '@/components/auth/layout';

export default function Login() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState('');

  const [login] = useLazyQuery<LoginQuery, LoginQueryVariables>(LOGIN);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

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
          } else {
            setErrorMessage(result.login.message);
          }
        },
      });
    }
  };

  return (
    <AuthLayout>
      <div className='flex flex-col py-6'>
        <Typography customClass='text-5xl font-semibold'>
          Connexion 👋
        </Typography>
        <Typography customClass='text-lg font-light text-medium_green mt-2 w-5/6'>
          Suis ton empreinte carbone, commence dès maintenant à renseigner tes
          dernières activitées!
        </Typography>
        <form onSubmit={handleSubmit} className='py-4 w-1/2'>
          <div>
            <InputLabel
              name='email'
              label='email'
              placeholder='carbone@gmail.com'
              type='email'
              sizes='xl'
              autoComplete='email'
              required
            />
          </div>
          <div className='mt-4'>
            <InputLabel
              name='password'
              label='mot de passe'
              placeholder='*******'
              type='password'
              sizes='xl'
              autoComplete='current-password'
              required
            />
          </div>
          <InputCheckbox
            id='remember-login'
            label='se souvenir de moi'
            className='py-4'
          />
          <Button className='mt-2' size='xl' type='submit'>
            Envoyer
          </Button>
          <Typography variant='paragraph' className='text-red-500 mt-2'>
            {errorMessage}
          </Typography>
        </form>
        <div className='flex items-center mt-2'>
          <Typography variant='paragraph' className='cursor-default'>
            Pas encore inscris ?
          </Typography>
          <Typography
            variant='paragraph'
            className='font-semibold pl-2 cursor-pointer text-medium_green'
          >
            Crée ton compte
          </Typography>
        </div>
      </div>
    </AuthLayout>
  );
}
