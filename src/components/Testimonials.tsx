import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  { parent: 'Priya Sharma', child: 'Mother of Aarav', review: 'Makoons has been a second home for Aarav. The teachers are incredibly caring and the environment is exceptionally safe. We are thrilled with his progress!', rating: 5, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop' },
  { parent: 'Rahul Verma', child: 'Father of Siya', review: 'The activity-based curriculum is brilliant. Siya looks forward to going to school every day. The facilities and cleanliness are top-notch.', rating: 5, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop' },
  { parent: 'Sneha Patel', child: 'Mother of Rohan', review: 'I am amazed at how confident Rohan has become in just six months. The focus on holistic development and creative learning really sets Makoons apart.', rating: 5, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop' },
];

export default function Testimonials() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="testimonials" className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-blue mb-4">What Parents Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">The trust of our parents is our greatest achievement.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-sm relative group hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-8 right-8 text-gray-100 w-16 h-16 -z-0 group-hover:text-[#FFD233]/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex text-[#FFD233] mb-6">
                  {[...Array(test.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed text-lg">"{test.review}"</p>
                
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img src={test.img} alt={test.parent} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-primary-blue">{test.parent}</h4>
                    <p className="text-sm text-gray-500">{test.child}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-[32px] shadow-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-primary-blue mb-2">Leave a Review</h3>
            <p className="text-gray-600">We would love to hear about your experience with Makoons.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 text-green-700 p-6 rounded-2xl text-center font-semibold">
              Thank you for your review! We appreciate your feedback.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary-blue mb-1">Your Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-blue mb-1">Child's Name / Relation</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-all" placeholder="Father of Jane" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-primary-blue mb-1">Rating</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-all">
                  <option value="5">5 Stars - Excellent</option>
                  <option value="4">4 Stars - Very Good</option>
                  <option value="3">3 Stars - Good</option>
                  <option value="2">2 Stars - Fair</option>
                  <option value="1">1 Star - Poor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-blue mb-1">Your Review</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-all" placeholder="Tell us about your experience..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary-blue text-white font-bold py-4 rounded-xl hover:bg-[#152740] transition-colors mt-4">
                Submit Review
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
