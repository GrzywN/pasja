import React from "react";
import Cta from "../Cta";

function Hero() {

  return (
    <section className="w-full h-screen pt-16 sm:pt-0 sm:flex sm:items-center" aria-label="Sekcja hero" id="hero">
      <div className="relative px-8 mx-auto w-full max-w-6xl grid gap-6 lg:gap-12 2xl:max-w-7xl">
        <h1 className="text-4xl font-extralight tracking-tight transition text-white sm:text-6xl lg:text-7xl 2xl:text-8xl">
          Studio Fryzur{" "}
          <strong className="font-bold">Pasja</strong>
        </h1>
        <p className="max-w-prose text-neutral-200 sm:text-xl xl:text-left 2xl:text-2xl">
          Stanowimy zgraną ekipę i zapewniamy <strong>kompleksowe usługi fryzjerskie</strong> na miarę potrzeb klienta.
          Stawiamy na <strong>najnowsze trendy i stylizacje</strong>, a oprócz usług stylizacyjnych włosów, oferujemy również <strong>zabiegi regenerujące</strong>.
        </p>
        <Cta text="Przeczytaj coś o nas" destination="#about" />
      </div>
    </section>
  );
}

export default Hero;
