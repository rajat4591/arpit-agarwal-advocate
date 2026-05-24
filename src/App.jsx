import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Legacy from './components/Legacy';
import StatsBar from './components/StatsBar';
import PracticeAreas from './components/PracticeAreas';
import MediaValidation from './components/MediaValidation';
import Testimonials from './components/Testimonials';
import TrackCases from './components/TrackCases';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Legacy />
        <StatsBar />
        <PracticeAreas />
        <MediaValidation />
        <Testimonials />
        <TrackCases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
