import React from 'react';
import Cta from '../Cta';

interface HeroProps {
  sectionTitle: string;
  sectionId: string;
  heading: string | React.ReactNode;
  paragraph: string | React.ReactNode;
  ctaButtonText: string;
  ctaButtonDestination: string;
}

function Hero(props: HeroProps) {
  const {
    sectionTitle,
    sectionId,
    heading,
    paragraph,
    ctaButtonText,
    ctaButtonDestination,
  } = props;

  return (
    <section
      className="w-full h-screen pt-16 sm:pt-0 sm:flex sm:items-center"
      aria-label={sectionTitle}
      id={sectionId}
    >
      <div className="relative px-8 mx-auto w-full max-w-6xl grid gap-6 lg:gap-12 2xl:max-w-7xl">
        <h1 className="text-4xl font-extralight tracking-tight transition text-white sm:text-6xl lg:text-7xl 2xl:text-8xl">
          {heading}
        </h1>
        <p className="max-w-prose text-neutral-200 sm:text-xl xl:text-left 2xl:text-2xl">
          {paragraph}
        </p>
        <Cta text={ctaButtonText} destination={ctaButtonDestination} />
      </div>
    </section>
  );
}

export default Hero;
