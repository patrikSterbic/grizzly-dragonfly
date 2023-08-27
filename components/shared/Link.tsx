'use client';

import { ReactNode } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
};

const Link = ({
  href,
  children,
  activeClassName = 'text-green-600',
  className = 'transition duration-300 font-semibold text-base',
}: LinkProps) => {
  const pathname = usePathname();

  return (
    <Button variant="ghost">
      <NextLink
        href={href}
        className={
          href === pathname
            ? `${className} ${activeClassName}`.trim()
            : className
        }
      >
        <span>
          {children}
          {href === pathname && (
            <span className="border-b-2 border-green-600 w-full h-1 block" />
          )}
        </span>
      </NextLink>
    </Button>
  );
};

export default Link;
