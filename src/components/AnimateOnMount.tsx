import type { ReactNode } from 'react';

type AnimateOnMountProps = {
  children: ReactNode;
  delay?: number; // in ms
  className?: string;
};

const AnimateOnMount = ({ children, delay = 2, className = '' }: AnimateOnMountProps) => {
  return (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnMount;
