import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../Map";
import Cta from "../Cta";

function Location() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return (
    <section className="px-8 w-full min-h-screen my-24 grid place-content-center gap-6 md:gap-12 xl:my-36 2xl:gap-24" aria-label="Nasza lokalizacja" id="location">
      <h2 className="text-4xl font-extralight tracking-tight transition text-white text-center sm:text-6xl lg:text-7xl 2xl:text-8xl">
        Nasza lokalizacja
      </h2>
      <div className="relative mx-auto max-w-5xl grid grid-cols-1 lg:gap-16 py-16 items-center lg:max-w-6xl lg:static lg:grid lg:grid-cols-2 lg:p-0 2xl:max-w-7xl">
        <div className="self-start bg-white p-8 mx-auto w-full grid gap-6 lg:relative lg:gap-12 xl:mt-16">
          <h3 className="text-3xl font-extralight tracking-tight transition text-black sm:text-4xl md:text-5xl 2xl:text-6xl">
              Gdzie?
          </h3>
          <p className="max-w-prose text-neutral-800 xl:text-lg xl:gap-5 xl:text-left 2xl:text-xl">
            Nasze studio fryzur znajduję się w Koziegłowach niedaleko Częstochowy. Salon znajduję się na placu, na ulicy Żareckiej 24 bezpośrednio obok budynku Domu Kultury.
          </p>
          <Cta className="absolute left-1/2 -translate-x-1/2 -bottom-0 translate-y-full lg:-bottom-16" text="Umów się na wizytę" destination="#appointment" />
        </div>
        <div className="w-full max-w-[100vw-4rem] h-80 md:h-96 lg:h-30 xl:h-[30rem] 2xl:h-[35rem]">
          {!!isLoaded && <Map className="w-full h-full" />}
        </div>
      </div>
    </section>
  );
}

export default Location;
