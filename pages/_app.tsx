import '../styles/globals.css';
import { Playfair_Display, Raleway } from '@next/font/google';
import type { AppProps } from 'next/app';

const raleway = Raleway({ subsets: ['latin', 'latin-ext'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin', 'latin-ext'] });

function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${raleway.style.fontFamily};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${playfairDisplay.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default Website;
