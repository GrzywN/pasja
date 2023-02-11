import About from '../components/About';
import Appointment from '../components/Appointment';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Location from '../components/Location';
import Meta from '../components/Meta';

import imageAbout from '../public/images/about.jpg';

function HomePage() {
  return (
    <>
      <Meta />
      <main>
        <Hero
          sectionTitle="Wprowadzenie"
          sectionId="hero"
          heading={
            <>
              Studio Fryzur <strong className="font-bold">Pasja</strong>
            </>
          }
          paragraph={
            <>
              Stanowimy zgraną ekipę i zapewniamy{' '}
              <strong>kompleksowe usługi fryzjerskie</strong> na miarę potrzeb
              klienta. Stawiamy na{' '}
              <strong>najnowsze trendy i stylizacje</strong>, a oprócz usług
              stylizacyjnych włosów, oferujemy również{' '}
              <strong>zabiegi regenerujące</strong>.
            </>
          }
          ctaButtonText="Przeczytaj coś o nas"
          ctaButtonDestination="#about"
        />
        <About
          sectionTitle="O nas"
          sectionId="about"
          imageSrc={imageAbout}
          imageAlt="Fryzjer wykonujący usługę kręcenia loków dla klienta."
          heading="O nas"
          paragraphs={[
            <>
              Jako zgrany zespół świadczymy{' '}
              <strong>kompleksowe usługi fryzjerskie oraz kosmetyczne</strong>.
            </>,
            <>
              Dzięki zaangażowaniu i kursom stale powiększamy{' '}
              <strong>zakres wiedzy</strong>, aby zapewnić{' '}
              <strong>jak najlepsze wrażenia</strong> dla naszych klientów.
            </>,
            <>
              Korzystamy z gamy <strong>przetestowanych</strong> przez nas
              produktów <strong>najwyższej jakości</strong>.
            </>,
          ]}
          ctaButtonText="Zobacz gdzie jesteśmy"
          ctaButtonDestination="#location"
        />
        <Location />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
