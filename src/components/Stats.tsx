import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { number: '500+', label: 'Happy Students', color: 'text-[#FFD233]' },
    { number: '10+', label: 'Experienced Teachers', color: 'text-[#FF6B35]' },
    { number: '100%', label: 'Safe Campus', color: 'text-[#8E6CEF]' },
    { number: '8+', label: 'Years of Excellence', color: 'text-white' },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-blue rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FFD233]/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className={`text-4xl md:text-5xl font-display font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
