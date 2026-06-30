import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/gallery-5.jpg" 
          alt="Makoons - Best Preschool in Shastri Nagar Ghaziabad Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1D3557]/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1D3557]/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
            The Preschool Where <br/>
            <span className="text-primary-yellow">
              Happy Childhood
            </span> Begins
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Makoons - Best Preschool in Shastri Nagar Ghaziabad provides a joyful, safe, and activity-based learning environment where children learn through exploration, creativity, and play.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#contact" className="w-full sm:w-auto bg-primary-yellow hover:bg-yellow-400 text-primary-blue font-bold text-lg py-4 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1">
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
