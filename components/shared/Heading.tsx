import { ReactNode } from 'react';
import classNames from 'classnames';

export type HeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  fontWeight?: '400' | '500' | '600' | '700' | '900';
  size?: 'sm' | 'lg' | 'xl' | '2xl';
  sizeClassName?: string;
  children: ReactNode;
};

export const Heading = ({
  level,
  className = '',
  fontWeight = '700',
  size,
  sizeClassName,
  children,
}: HeadingProps) => {
  const fontWeightClass = classNames({
    'font-base': fontWeight === '400',
    'font-medium': fontWeight === '500',
    'font-semibold': fontWeight === '600',
    'font-bold': fontWeight === '700',
    'font-black': fontWeight === '900',
  });

  const sizeClass = classNames(
    {
      'text-10xl': size === '2xl' && !sizeClassName,
      'text-9xl': size === 'xl' && !sizeClassName,
      'text-7xl md:text-8xl': size === 'lg' && !sizeClassName,
      'text-7xl': size === 'sm' && !sizeClassName,
      'text-5xl md:text-6xl':
        size === undefined && level === 'h1' && !sizeClassName,
      'text-4xl md:text-5xl':
        size === undefined && level === 'h2' && !sizeClassName,
      'text-3xl md:text-4xl':
        size === undefined && level === 'h3' && !sizeClassName,
      'text-2xl md:text-3xl':
        size === undefined && level === 'h4' && !sizeClassName,
      'text-xl md:text-2xl':
        size === undefined && level === 'h5' && !sizeClassName,
      'text-lg md:text-xl':
        size === undefined && level === 'h6' && !sizeClassName,
    },
    sizeClassName
  );
  switch (level) {
    case 'h1':
      return (
        <h1
          className={`${sizeClass} ${fontWeightClass} ${className}`}
          data-testid="heading-1"
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`${sizeClass} ${fontWeightClass} ${className}`}
          data-testid="heading-2"
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={`${sizeClass} ${fontWeightClass} ${className}`}
          data-testid="heading-3"
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={`${sizeClass} ${fontWeightClass} ${className}`}
          data-testid="heading-4"
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          className={`${sizeClass} ${fontWeightClass} ${className}`}
          data-testid="heading-5"
        >
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          className={`${sizeClass} ${fontWeightClass} ${className}`}
          data-testid="heading-6"
        >
          {children}
        </h6>
      );
    default:
      return <div data-testid="heading">{children}</div>;
  }
};
