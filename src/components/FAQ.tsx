import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How do I enroll my child?", a: "You can start by contacting us or filling out our admission form online. Our admissions team will guide you through the next steps, including a campus visit and document submission." },
  { q: "What are the school timings?", a: "Our standard timings are from 9:00 AM to 1:00 PM for preschool classes. Daycare facilities are available from 8:00 AM to 6:00 PM." },
  { q: "Do you provide transport facilities?", a: "Yes, we provide safe, air-conditioned transport with female attendants and GPS tracking for selected areas around Shastri Nagar, Ghaziabad." },
  { q: "Which curriculum do you follow?", a: "We follow an integrated international curriculum that combines Montessori methods, Play-way techniques, and early years foundation stages to ensure holistic development." },
  { q: "What is the student-teacher ratio?", a: "We maintain a low student-to-teacher ratio of 10:1 to ensure personalized attention and care for every child." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-blue mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-primary-blue text-lg">{faq.q}</span>
                <ChevronDown className={`shrink-0 transition-transform duration-300 text-primary-yellow ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-gray-50 px-6 overflow-hidden"
                  >
                    <p className="py-4 text-gray-600 border-t border-gray-100">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
