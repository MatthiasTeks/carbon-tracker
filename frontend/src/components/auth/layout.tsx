import { ReactNode } from 'react';
import Image from 'next/image';
import img from '../../../public/login-img.webp';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className='fixed left-0 top-0 h-screen w-screen flex py-32 px-20 2xl:px-60 text-black'>
      <div className='justify-end items-center h-full w-1/2 pr-10 hidden lg:flex'>
        <div>
          <Image
            src={img}
            alt='User on computer with carbon footprint tracking app'
            width={500}
            height={500}
            className='rounded-xl'
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </div>
      <div className='flex justify-center lg:justify-start items-center h-full w-full lg:w-1/2 pl-10 lg:pb-10 xl:pb-16'>
        {children}
      </div>
    </main>
  );
}
