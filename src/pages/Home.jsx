import { useEffect } from 'react';
import Navbar     from '../components/Navbar';
import Hero       from '../components/Hero';
import About      from '../components/About';
import Rooms      from '../components/Rooms';
import Services   from '../components/Services';
import Restaurant from '../components/Restaurant';
import Events     from '../components/Events';
import Contact    from '../components/Contact';
import Footer     from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Restaurant />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
