import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
// import Pricing from './components/Pricing';
// import Gallery from './components/Gallery';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
// import Footer from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-primary origin-left z-50" 
        style={{ scaleX }} 
      />

      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <Hero />
      <Services />
      {/* <Pricing /> */}
      {/* <Gallery /> */}
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer /> */}

      {/* Mobile Floating CTA */}
      <motion.button
        className="fixed md:hidden bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        aria-label="Book Now"
      >
        Book Now
      </motion.button>
    </div>
  );
};

export default App;