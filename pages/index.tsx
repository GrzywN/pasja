import About from '../components/About';
import Appointment from '../components/Appointment';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Location from '../components/Location';
import Meta from '../components/Meta';

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
        <About />
        <Location />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
