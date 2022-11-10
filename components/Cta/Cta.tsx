import React from "react";

type CtaProps = { className?: string, text: string, destination: string };

function Cta({ className, text, destination }: CtaProps) {
  return (
    <a className={`${className} px-4 py-3 border border-white w-max font-medium text-lg text-neutral-200 transition-colors hover:bg-white hover:text-black xl:text-xl 2xl:text-2xl`} href={destination}>
      {text}
    </a>
  );
}

Cta.defaultProps = {
  className: "",
};

export default Cta;
