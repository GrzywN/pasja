import React from "react";
import {IconArrowUp} from "@tabler/icons"

function Footer() {
  return (
    <footer className="relative w-full bg-black">
      <nav className="flex flex-col-reverse items-center px-8 py-32 mx-auto max-w-7xl gap-12 md:justify-between md:gap-4 md:py-12 md:flex-row">
        <p className="absolute w-full text-sm font-medium text-center bottom-2 text-neutral-400 md:text-base md:text-left md:static md:w-auto">
          Projekt i wykonanie: {" "}
          <a
            className="underline text-neutral-200 hover:text-neutral-200 focus-visible:text-neutral-200"
            href="https://karolbinkowski.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karol Binkowski
          </a>
        </p>
        <button className="inline-flex gap-2 text-white font-medium" type="button" onClick={() => {
          if (typeof window !== undefined) window.scrollTo({ top: 0, behavior: "smooth"});
        }}>
          Powróć do góry
          <IconArrowUp />
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
