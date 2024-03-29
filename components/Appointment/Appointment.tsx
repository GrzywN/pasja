interface AppointmentProps {
  sectionTitle: string;
  sectionId: string;
  heading: string | React.ReactNode;
  paragraph: string | React.ReactNode;
  phoneNumber: string;
}

function Appointment(props: AppointmentProps) {
  const { sectionTitle, sectionId, heading, paragraph, phoneNumber } = props;

  return (
    <section
      className="grid min-h-screen w-full place-content-center gap-6 px-8 md:gap-12 2xl:gap-24"
      aria-label={sectionTitle}
      id={sectionId}
    >
      <h2 className="text-center text-4xl font-extralight tracking-tight text-black transition sm:text-6xl lg:text-7xl 2xl:text-8xl">
        {heading}
      </h2>
      <div className="lg:gap-18 mx-auto grid max-w-5xl gap-12 bg-white p-8 lg:max-w-6xl 2xl:max-w-7xl">
        <p className="text-lg text-neutral-800 xl:gap-5 xl:text-left xl:text-xl 2xl:text-2xl">
          {paragraph}
        </p>
        <a
          className="text-center text-3xl tracking-tight text-black underline underline-offset-2 transition sm:text-6xl md:text-7xl xl:no-underline 2xl:text-8xl"
          href={`tel:+48${phoneNumber}`}
        >
          {phoneNumber.match(/.{1,3}/g)?.join(' ')}
        </a>
      </div>
    </section>
  );
}

export default Appointment;
