import React from 'react';
import Image from 'next/image';
import Cta from '../Cta';

import imageAbout from '../../public/images/about.jpg';

function About() {
  return (
    <section
      className="min-h-screen w-full bg-white pt-16 sm:flex sm:items-center sm:pt-0"
      aria-label="O nas"
      id="about"
    >
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-16 px-8 py-16 sm:grid sm:grid-cols-2 lg:max-w-6xl 2xl:max-w-7xl">
        <Image
          className="w-full shadow-2xl lg:scale-110 xl:h-auto xl:w-3/4 xl:scale-[1.175] 2xl:scale-125"
          src={imageAbout}
          alt=""
          sizes="(max-width: 768px) 95vw, (min-width: 640px) 40vw, (min-width: 1024px) 50vw"
        />
        <div className="relative mx-auto grid w-full gap-6 border border-black p-8 lg:gap-12">
          <h2 className="text-4xl font-extralight tracking-tight text-black transition sm:text-6xl lg:text-7xl xl:text-8xl">
            O nas
          </h2>
          <p className="grid max-w-prose gap-4 text-neutral-800 xl:gap-5 xl:text-left xl:text-xl">
            <span>
              Jako zgrany zespół świadczymy{' '}
              <strong>kompleksowe usługi fryzjerskie oraz kosmetyczne</strong>.
            </span>
            <span>
              Dzięki zaangażowaniu i kursom stale powiększamy{' '}
              <strong>zakres wiedzy</strong>, aby zapewnić{' '}
              <strong>jak najlepsze wrażenia</strong> dla naszych klientów.
            </span>
            <span>
              Korzystamy z gamy <strong>przetestowanych</strong> przez nas
              produktów <strong>najwyższej jakości</strong>.
            </span>
          </p>
          <Cta text="Zobacz gdzie jesteśmy" destination="#location" />
        </div>
      </div>
    </section>
  );
}

export default About;
