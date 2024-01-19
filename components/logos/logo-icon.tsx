import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: '../../public/fonts/headingFont.woff2',
});

export function LogoIcon() {
  return (
    <Link href={'/'}>
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <Image src='/logos/logo-icon.svg' alt='Logo' width={30} height={30} />
        <p
          className={cn(
            'text-lg text-neutral-700 pb-1',
            headingFont.className
          )}>
          Groupigy
        </p>
      </div>
    </Link>
  );
}