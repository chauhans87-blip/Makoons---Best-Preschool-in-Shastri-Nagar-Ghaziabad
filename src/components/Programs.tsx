import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const programs = [
  { name: 'Playgroup', age: '1.5 - 2.5 Years', desc: 'A gentle introduction to learning through play, sensory activities, and social interaction.', img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2000&auto=format&fit=crop', color: 'bg-primary-yellow' },
  { name: 'Nursery', age: '2.5 - 3.5 Years', desc: 'Fostering independence and foundational skills in a structured yet fun environment.', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2940&auto=format&fit=crop', color: 'bg-accent-orange' },
  { name: 'Junior KG', age: '3.5 - 4.5 Years', desc: 'Developing cognitive abilities, language, and early math skills through engaging themes.', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop', color: 'bg-accent-purple' },
  { name: 'Senior KG', age: '4.5 - 5.5 Years', desc: 'Preparing for primary school with advanced literacy, numeracy, and life skills.', img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop', color: 'bg-primary-blue' },
  { name: 'Daycare', age: '6 Months - 8 Years', desc: 'A safe, home-like environment with nutritious meals and after-school support.', img: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=2000&auto=format&fit=crop', color: 'bg-green-500' },
  { name: 'Summer Camp', age: '2 - 10 Years', desc: 'Exciting activities, arts, crafts, and sports to keep children engaged during holidays.', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2000&auto=format&fit=crop', color: 'bg-pink-500' },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-blue mb-4">Our Classes</h2>
            <p className="text-gray-600 text-lg">Thoughtfully designed age-appropriate classes that nurture every aspect of your child's growth.</p>
          </div>
          <button className="bg-light-grey text-primary-blue font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors hidden md:block">
            View All Classes
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-[24px] overflow-hidden shadow-lg border border-gray-100 flex flex-col bg-white hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={prog.img} alt={prog.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute top-4 right-4 ${prog.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                  {prog.age}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-primary-blue mb-3">{prog.name}</h3>
                <p className="text-gray-600 mb-6 flex-1">{prog.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-accent-orange font-semibold group-hover:text-primary-blue transition-colors">
                  Know More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
