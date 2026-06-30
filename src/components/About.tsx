import { motion } from 'motion/react';
import { Baby, Sun, Puzzle, Compass, BookOpen, Music, Star } from 'lucide-react';

export default function About() {
  const icons = [
    { name: 'Playgroup', icon: <Baby className="text-accent-orange" size={24} /> },
    { name: 'Nursery', icon: <Sun className="text-primary-yellow" size={24} /> },
    { name: 'Junior KG', icon: <Puzzle className="text-accent-purple" size={24} /> },
    { name: 'Senior KG', icon: <BookOpen className="text-primary-blue" size={24} /> },
    { name: 'Daycare', icon: <Compass className="text-green-500" size={24} /> },
    { name: 'Summer Camp', icon: <Music className="text-pink-500" size={24} /> },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary-yellow/20 rounded-[40px] transform rotate-3"></div>
            <img 
              src="/welcome.jpg" 
              alt="Makoons staff and students" 
              className="relative rounded-[32px] shadow-xl w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                <Star className="text-accent-purple" size={24} fill="currentColor" />
              </div>
              <div>
                <p className="font-display font-bold text-xl text-primary-blue">8+ Years</p>
                <p className="text-gray-500 text-sm">of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h4 className="text-accent-orange font-bold uppercase tracking-wider text-sm">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-blue leading-tight">
              Welcome to Makoons - Best Preschool in Shastri Nagar Ghaziabad
            </h2>
            <p className="text-gray-600 text-lg">
              We are dedicated to nurturing confident, creative, and happy learners. Our environment is designed to spark curiosity, encourage exploration, and foster a lifelong love for learning in every child.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
              {icons.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-3 bg-light-grey p-4 rounded-2xl transition-transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-primary-blue text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
