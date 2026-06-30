import { motion } from 'motion/react';
import { Search, Sparkles, BookOpen, PenTool, Brain, Mic, TrendingUp } from 'lucide-react';

export default function Methodology() {
  const steps = [
    { label: 'Discover', icon: <Search size={20} />, color: 'bg-blue-500' },
    { label: 'Explore', icon: <Sparkles size={20} />, color: 'bg-[#FFD233]' },
    { label: 'Learn', icon: <BookOpen size={20} />, color: 'bg-green-500' },
    { label: 'Create', icon: <PenTool size={20} />, color: 'bg-[#FF6B35]' },
    { label: 'Imagine', icon: <Brain size={20} />, color: 'bg-[#8E6CEF]' },
    { label: 'Express', icon: <Mic size={20} />, color: 'bg-pink-500' },
    { label: 'Grow', icon: <TrendingUp size={20} />, color: 'bg-teal-500' },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Methodology */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-blue mb-4">Our Learning Methodology</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">A progressive journey that aligns with the natural developmental milestones of early childhood.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0 rounded-full"></div>
            
            <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex md:flex-col items-center gap-4 bg-white p-4 md:p-0 rounded-2xl md:bg-transparent shadow-sm md:shadow-none border border-gray-100 md:border-none"
                >
                  <div 
                    className="flex md:flex-col items-center gap-4 animate-float"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${step.color} shadow-lg ring-4 ring-white z-10`}>
                      {step.icon}
                    </div>
                    <span className="font-display font-semibold text-primary-blue text-lg md:text-base">
                      {step.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
