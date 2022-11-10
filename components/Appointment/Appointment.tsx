import React from "react";

function Appointment() {

  return (
    <section className="px-8 w-full min-h-screen grid place-content-center gap-6 md:gap-12 2xl:gap-24" aria-label="Umów się na wizytę" id="appointment">
      <h2 className="text-4xl font-extralight tracking-tight transition text-black text-center sm:text-6xl lg:text-7xl 2xl:text-8xl">
        Umów sie na wizytę
      </h2>
      <div className="bg-white mx-auto max-w-5xl grid gap-12 lg:gap-18 p-8 lg:max-w-6xl 2xl:max-w-7xl">
        <p className="text-neutral-800 text-lg xl:text-xl xl:gap-5 xl:text-left 2xl:text-2xl">
          Aby umówić się na wizytę w naszym studiu fryzur, prosimy o kontakt telefoniczny pod numer:
        </p>
        <a className="underline underline-offset-2 text-center text-3xl tracking-tight transition text-black sm:text-6xl md:text-7xl xl:no-underline 2xl:text-8xl" href="tel:+48512499648">
          512 499 648
        </a>
      </div>
    </section>
  );
}

export default Appointment;
