import { ReactNode } from 'react';
import Image from 'next/image';
import img from '../../../public/login-img.webp';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className='fixed left-0 top-0 h-screen w-screen flex py-32 px-60 text-black'>
      <div className='flex justify-end items-center h-full w-1/2 pr-10'>
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
      <div className='flex justify-start items-center h-full w-1/2 pl-10 pb-20'>
        {children}
      </div>
    </main>
  );
}
