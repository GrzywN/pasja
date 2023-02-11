import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';

function Meta() {
  const { pathname } = useRouter();

  const seo: NextSeoProps = {
    title: 'Studio Fruzur Pasja | Usługi fryzjerskie i kosmetyczne',
    description:
      'Stanowimy zgraną ekipę i zapewniamy kompleksowe usługi fryzjerskie na miarę potrzeb klienta. Stawiamy na najnowsze trendy i stylizacje, a oprócz usług stylizacyjnych włosów, oferujemy również zabiegi regenerujące.',
    canonical: `https://studiofryzurpasja.pl${pathname}`,
    openGraph: {
      type: 'website',
      locale: 'pl_PL',
      site_name: 'Studio Fryzur Pasja',
      url: `https://studiofryzurpasja.pl${pathname}`,
    },
    twitter: {
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'author',
        content: 'Karol Binkowski',
      },
      {
        name: 'keywords',
        content:
          'pasja, fryzjer, fryzjerka, koziegłowy, kozieglowy, studio, salon, fryzur, fryzury, uslugi, fryzjerskie, kosmetyczne',
      },
    ],
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  };

  return <NextSeo {...seo} />;
}

export default Meta;
