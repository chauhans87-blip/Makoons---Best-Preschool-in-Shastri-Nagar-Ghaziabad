import { motion } from 'motion/react';
import { Monitor, Tent, Library, Music, Brush, Bus, Stethoscope, Flame, Video, Thermometer, Droplets } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    { title: 'Smart Classrooms', icon: <Monitor size={24} /> },
    { title: 'Indoor Play Area', icon: <Tent size={24} /> },
    { title: 'Library', icon: <Library size={24} /> },
    { title: 'Music & Dance', icon: <Music size={24} /> },
    { title: 'Art & Craft Studio', icon: <Brush size={24} /> },
    { title: 'Safe Transport', icon: <Bus size={24} /> },
    { title: 'Medical Assistance', icon: <Stethoscope size={24} /> },
    { title: 'Fire Safety', icon: <Flame size={24} /> },
    { title: 'CCTV Security', icon: <Video size={24} /> },
    { title: 'AC Classrooms', icon: <Thermometer size={24} /> },
    { title: 'Filtered Water', icon: <Droplets size={24} /> },
  ];

  return (
    <section id="facilities" className="py-20 relative overflow-hidden bg-primary-blue">
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-primary-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">School Facilities</h2>
          <p className="text-blue-100 text-lg">World-class amenities designed to provide a safe, comfortable, and enriching experience for your child.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6 rounded-[24px] flex flex-col items-center text-center gap-4 text-white hover:bg-white/20 transition-colors"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                {fac.icon}
              </div>
              <h3 className="font-medium text-lg">{fac.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
