import React from "react";

function Hero() {

  return (
    <section className="w-full h-screen pt-16 sm:pt-0 sm:flex sm:items-center" aria-label="Sekcja hero">
      <div className="relative px-8 mx-auto w-full max-w-7xl grid gap-6 lg:gap-12">
        <h1 className="text-4xl font-extralight tracking-tight transition text-white sm:text-6xl lg:text-7xl xl:text-8xl">
          Studio Fryzur{" "}
          <strong className="font-bold">Pasja</strong>
        </h1>
        <p className="max-w-prose text-neutral-200 sm:text-xl xl:text-2xl xl:text-left">
          Stanowimy zgraną ekipę i zapewniamy <strong>kompleksowe usługi fryzjerskie</strong> na miarę potrzeb klienta.
          Stawiamy na <strong>najnowsze trendy i stylizacje</strong>, a oprócz usług stylizacyjnych włosów, oferujemy również <strong>zabiegi regenerujące</strong>.
        </p>
        <a className="px-4 py-3 border border-white w-fit font-medium text-neutral-200 transition-colors hover:bg-white hover:text-black xl:text-2xl" href="#location">
          Zobacz gdzie jesteśmy
        </a>
      </div>
    </section>
  );
}

export default Hero;
