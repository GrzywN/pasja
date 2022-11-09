import React from "react";
import Image from "next/image";

import imageAbout from "../../public/images/about.jpg";

function About() {

  return (
    <section className="w-full min-h-screen bg-white pt-16 sm:pt-0 sm:flex sm:items-center lg:h-[calc(100vh-4rem)]" aria-label="O nas" id="about">
      <div className="mx-auto max-w-7xl flex flex-col-reverse gap-16 px-8 py-16 items-center sm:grid sm:grid-cols-2 lg:p-0">
        <Image className="shadow-2xl translate-y-8 xl:w-full xl:h-full" src={imageAbout} alt="" />
        <div className="relative px-8 mx-auto w-full grid gap-6 lg:gap-12">
          <h2 className="text-4xl font-extralight tracking-tight transition text-black sm:text-6xl lg:text-7xl xl:text-8xl">
            O nas
          </h2>
          <p className="max-w-prose grid gap-4 text-neutral-800 xl:gap-5 xl:text-xl xl:text-left">
            <span>Jako zgrany zespół świadczymy <strong>kompleksowe usługi fryzjerskie oraz kosmetyczne</strong>.</span>
            <span>Dzięki pasji i kursom stale powiększamy <strong>zakres wiedzy</strong> z tych dziedzin, aby zapewnić <strong>jak najlepsze wrażenia</strong> dla naszych klientów.</span>
            <span>Korzystamy z gammy <strong>przetestowanych</strong> przez nas produktów <strong>najwyższej jakości</strong>.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
