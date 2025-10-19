'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import classes from './main-header.module.css';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
  const path = usePathname() || '';

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logo} alt="A plate with food on it" priority />
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              className={path.startsWith('/meals') ? classes.active : undefined}
              href="/meals"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              className={path.startsWith('/community') ? classes.active : undefined}
              href="/community"
            >
              Foodies Community
            </Link>
          </li>
          <li>
            <Link
              className={path.startsWith('/meals/share') ? classes.active : undefined}
              href="/meals/share"
            >
              SharedMeal
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
