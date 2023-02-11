import Image, { StaticImageData } from 'next/image';
import Cta from '../Cta';

interface AboutProps {
  sectionTitle: string;
  sectionId: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  heading: string | React.ReactNode;
  paragraphs: string[] | React.ReactNode[];
  ctaButtonText: string;
  ctaButtonDestination: string;
}

function About(props: AboutProps) {
  const {
    sectionTitle,
    sectionId,
    imageSrc,
    imageAlt,
    heading,
    paragraphs,
    ctaButtonText,
    ctaButtonDestination,
  } = props;

  return (
    <section
      className="min-h-screen w-full bg-white pt-16 sm:flex sm:items-center sm:pt-0"
      aria-label={sectionTitle}
      id={sectionId}
    >
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-16 px-8 py-16 sm:grid sm:grid-cols-2 lg:-my-48 lg:max-w-6xl 2xl:max-w-7xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          sizes="(max-width: 768px) 95vw, (min-width: 640px) 40vw, (min-width: 1024px) 50vw"
        />
        <div className="relative mx-auto grid w-full gap-6 border border-black p-8 lg:gap-12">
          <h2 className="text-4xl font-extralight tracking-tight text-black sm:text-6xl lg:text-7xl xl:text-8xl">
            {heading}
          </h2>
          <p className="grid max-w-prose gap-4 text-neutral-800 xl:gap-5 xl:text-left xl:text-xl">
            {paragraphs.map((paragraph: string | React.ReactNode, index) => (
              <span key={index}>{paragraph}</span>
            ))}
          </p>
          <Cta text={ctaButtonText} destination={ctaButtonDestination} />
        </div>
      </div>
    </section>
  );
}

export default About;
