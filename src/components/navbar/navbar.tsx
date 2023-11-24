'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface NavLinks {
  name: string;
  href: string;
  icon?: string;
  color?: string;
}

const navLinks: NavLinks[] = [
  { name: 'Residental Cleaning', href: '/residental-cleaning' },
  { name: 'Commercial Cleaning', href: '/commercial-cleaning' },
  { name: 'Short-Term Rental Cleaning', href: '/short-term-rental-cleaning' },
  { name: 'Move In/Out Cleaning', href: '/move-in-out-cleaning' },
  {
    name: 'Quick Call',
    href: '/',
    icon: '/svg/call.svg',
    color: '#FFF966',
  },
];
export const NavBar = () => {
  return (
    <div className='xxl:gap-_120.75 py_48 py-_48 px-_100 2xl:px-_200 xxl:px-_50 flex items-center justify-between gap-16 bg-purple-400 transition-all duration-300 ease-in-out'>
      <Link href='/'>
        <Image src='/svg/Logo.svg' alt='logo' width={174.249} height={64} />
      </Link>

      <ul className='gap-_30 flex items-center'>
        {navLinks.map(({ href, icon, color, name }) => (
          <li key={name}>
            <Link
              href={href}
              className={clsx(
                'font-galyon flex gap-2 font-bold',
                color
                  ? 'text-sm font-normal text-yellow-400 2xl:text-lg'
                  : 'text-white'
              )}
            >
              <span className='font-bold'>{name}</span>
              {icon && <Image src={icon} alt={name} width={16} height={16} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
