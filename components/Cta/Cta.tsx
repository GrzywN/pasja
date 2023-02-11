import React from 'react';

type CtaProps = { className?: string; text: string; destination: string };

function Cta({ className, text, destination }: CtaProps) {
  return (
    <a
      className={`${className} w-max border border-white bg-black px-4 py-3 text-lg font-medium text-neutral-200 transition-colors hover:border-black hover:bg-white hover:text-black xl:text-xl 2xl:text-2xl`}
      href={destination}
    >
      {text}
    </a>
  );
}

Cta.defaultProps = {
  className: '',
};

export default Cta;
