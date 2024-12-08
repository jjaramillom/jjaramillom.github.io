import React from 'react';

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

export const Title = ({
  children,
  className,
}: React.PropsWithChildren<Props>) => (
  <h1
    className={`text-[54px] text-center font-bold mx-auto ${className} leading-none`}
  >
    {children}{' '}
  </h1>
);
