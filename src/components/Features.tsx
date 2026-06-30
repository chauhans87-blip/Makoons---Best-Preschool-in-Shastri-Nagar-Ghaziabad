import { motion } from 'motion/react';
import { Shield, Video, Users, Palette, Globe, GraduationCap, Map, Bus, Heart, Lightbulb } from 'lucide-react';

export default function Features() {
  const features = [
    { title: 'Safe Campus', icon: <Shield size={28} />, color: 'bg-green-100 text-green-600' },
    { title: 'CCTV Monitoring', icon: <Video size={28} />, color: 'bg-blue-100 text-blue-600' },
    { title: 'Low Ratio', icon: <Users size={28} />, color: 'bg-purple-100 text-purple-600' },
    { title: 'Activity Based', icon: <Palette size={28} />, color: 'bg-pink-100 text-pink-600' },
    { title: 'Intl Curriculum', icon: <Globe size={28} />, color: 'bg-indigo-100 text-indigo-600' },
    { title: 'Qualified Teachers', icon: <GraduationCap size={28} />, color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Indoor', icon: <Map size={28} />, color: 'bg-teal-100 text-teal-600' },
    { title: 'Transport', icon: <Bus size={28} />, color: 'bg-orange-100 text-orange-600' },
    { title: 'Healthy Env', icon: <Heart size={28} />, color: 'bg-red-100 text-red-600' },
    { title: 'Creative Learning', icon: <Lightbulb size={28} />, color: 'bg-yellow-100 text-yellow-500' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-blue mb-4">Why Parents Choose Us</h2>
          <p className="text-gray-600 text-lg">We provide a comprehensive, secure, and stimulating environment tailored for early childhood development.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center gap-4 group cursor-default"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${feat.color}`}>
                {feat.icon}
              </div>
              <h3 className="font-semibold text-primary-blue">{feat.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
