import React from "react";
import Image from "next/image";
import Cta from "../Cta";

import imageAbout from "../../public/images/about.jpg";

function About() {

  return (
    <section className="w-full min-h-screen bg-white pt-16 sm:pt-0 sm:flex sm:items-center" aria-label="O nas" id="about">
      <div className="mx-auto max-w-5xl flex flex-col-reverse gap-16 px-8 py-16 items-center sm:grid sm:grid-cols-2 lg:max-w-6xl 2xl:max-w-7xl">
        <Image className="shadow-2xl w-full xl:w-3/4 xl:h-auto lg:scale-110 xl:scale-[1.175] 2xl:scale-125" src={imageAbout} alt="" sizes="(max-width: 768px) 95vw, (min-width: 640px) 40vw, (min-width: 1024px) 50vw" />
        <div className="relative border border-black p-8 mx-auto w-full grid gap-6 lg:gap-12">
          <h2 className="text-4xl font-extralight tracking-tight transition text-black sm:text-6xl lg:text-7xl xl:text-8xl">
            O nas
          </h2>
          <p className="max-w-prose grid gap-4 text-neutral-800 xl:gap-5 xl:text-xl xl:text-left">
            <span>Jako zgrany zespół świadczymy <strong>kompleksowe usługi fryzjerskie oraz kosmetyczne</strong>.</span>
            <span>Dzięki zaangażowaniu i kursom stale powiększamy <strong>zakres wiedzy</strong>, aby zapewnić <strong>jak najlepsze wrażenia</strong> dla naszych klientów.</span>
            <span>Korzystamy z gammy <strong>przetestowanych</strong> przez nas produktów <strong>najwyższej jakości</strong>.</span>
          </p>
          <Cta text="Zobacz gdzie jesteśmy" destination="#location" />
        </div>
      </div>
    </section>
  );
}

export default About;
