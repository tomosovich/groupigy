// Global Imports
import { Medal } from 'lucide-react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
// Local Imports
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
// Relative Imports

const headingFont = localFont({
  src: '../../public/fonts/headingFont.woff2',
});
const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const LandingPage = () => (
  <div className='flex items-center justify-center flex-col'>
    <div
      className={cn(
        'flex items-center justify-center flex-col',
        headingFont.className
      )}>
      <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
        <Medal className='h-6 w-6 mr-2' />
        Number 1 Task Management App
      </div>
      <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
        Groupigy helps teams get shit done.
      </h1>
      <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to pink-800 text-white px-4 p-2 rounded-md pb-4'>
        Work, Done.
      </div>
    </div>
    <div
      className={cn(
        'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl mx-auto',
        textFont.className
      )}>
      Collaborate, manage projects and reach new productivity peaks. Every team
      is different, Groupify adapts to your team's methods. Find out how we can
      help your team{' '}
      <span className='text-blue-800 font-bold text-xl md:text-2xl'>
        Get. Shit. Done.
      </span>
    </div>
    <Button className='mt-6' size='lg' asChild>
      {/* Todo create sign-up page */}
      <Link href='/sign-up'>Get Groupify Free</Link>
    </Button>
  </div>
);
// eslint-disable-next-line import/no-default-export
export default LandingPage;