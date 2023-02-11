import { useLoadScript } from '@react-google-maps/api';
import Cta from '../Cta';
import LoadingSpinner from '../LoadingSpinner';
import Map from '../Map';

interface LocationProps {
  sectionTitle: string;
  sectionId: string;
  sectionHeading: string | React.ReactNode;
  heading: string | React.ReactNode;
  paragraph: string | React.ReactNode;
  ctaButtonText: string;
  ctaButtonDestination: string;
}

function Location(props: LocationProps) {
  const {
    sectionTitle,
    sectionId,
    sectionHeading,
    heading,
    paragraph,
    ctaButtonText,
    ctaButtonDestination,
  } = props;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return (
    <section
      className="my-24 grid min-h-screen w-full place-content-center gap-6 px-8 md:gap-12 xl:my-36 2xl:gap-24"
      aria-label={sectionTitle}
      id={sectionId}
    >
      <h2 className="text-center text-4xl font-extralight tracking-tight text-white transition sm:text-6xl lg:text-7xl 2xl:text-8xl">
        {sectionHeading}
      </h2>
      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center py-16 lg:static lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-16 lg:p-0 2xl:max-w-7xl">
        <div className="mx-auto grid w-full gap-6 self-start bg-white p-8 lg:relative lg:gap-12 xl:mt-16">
          <h3 className="text-3xl font-extralight tracking-tight text-black transition sm:text-4xl md:text-5xl 2xl:text-6xl">
            {heading}
          </h3>
          <p className="max-w-prose text-neutral-800 xl:gap-5 xl:text-left xl:text-lg 2xl:text-xl">
            {paragraph}
          </p>
          <Cta
            className="absolute left-1/2 -bottom-0 -translate-x-1/2 translate-y-full lg:-bottom-16"
            text={ctaButtonText}
            destination={ctaButtonDestination}
          />
        </div>
        <div className="lg:h-30 grid h-80 w-full max-w-[100vw-4rem] place-items-center bg-white md:h-96 xl:h-[30rem] 2xl:h-[35rem]">
          {!!isLoaded ? <Map className="h-full w-full" /> : <LoadingSpinner />}
        </div>
      </div>
    </section>
  );
}

export default Location;
