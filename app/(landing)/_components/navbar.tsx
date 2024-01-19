// note that we are using a named export here, not a default export,
// this is to avoid issues with default exports in non page/layout functions

import Link from 'next/link';
import { LogoIcon } from '@/components/logos/logo-icon';
import { Button } from '@/components/ui/button';

export const Navbar = () => (
  <div className='fixed top-o w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
    <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
      <LogoIcon />
      <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
        <Button size='sm' variant='outline' asChild>
          {/* Todo create sign-in page */}
          <Link href={'/sign-in'}>Login</Link>
        </Button>
        <Button size='sm' asChild>
          <Link href={'/sign-up'}>Get Started Free</Link>
        </Button>
      </div>
    </div>
  </div>
);