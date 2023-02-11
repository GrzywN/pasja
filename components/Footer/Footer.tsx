import React from 'react';
import { IconArrowUp } from '@tabler/icons';

function Footer() {
  return (
    <footer className="relative w-full bg-black">
      <nav className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-8 py-32 md:flex-row md:justify-between md:gap-4 md:py-12">
        <p className="absolute bottom-2 w-full text-center text-sm font-medium text-neutral-400 md:static md:w-auto md:text-left md:text-base">
          Projekt i wykonanie:{' '}
          <a
            className="text-neutral-200 underline hover:text-neutral-200 focus-visible:text-neutral-200"
            href="https://karolbinkowski.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karol Binkowski
          </a>
        </p>
        <button
          className="inline-flex gap-2 font-medium text-white"
          type="button"
          onClick={() => {
            if (typeof window !== undefined)
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Powróć do góry
          <IconArrowUp />
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
