import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen relative" id="home">
      <div className="absolute inset-0 bg-gray-900/60">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920"
          alt="Car Detailing"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center text-white pt-32 px-4"
      >
        <h1 className="text-5xl font-bold mb-6">Premium Car Detailing</h1>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="bg-primary px-8 py-3 rounded-lg text-lg font-medium"
        >
          Book Now
        </motion.button>
      </motion.div>
    </section>
  );
}