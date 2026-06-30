import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: '/gallery-1.jpg', alt: 'Independence Day Celebration' },
    { src: '/gallery-2.jpg', alt: 'Kids learning with wooden puzzles' },
    { src: '/gallery-3.jpg', alt: 'Kids performing on stage' },
    { src: '/gallery-4.jpg', alt: 'Colourful classrooms' },
    { src: '/gallery-5.jpg', alt: 'Indoor play area' }
  ];

  return (
    <section id="gallery" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1D3557] mb-4">Gallery</h2>
          <p className="text-gray-600 text-lg">Glimpses of joyful learning, celebrations, and our vibrant environment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl overflow-hidden shadow-lg ${idx === 3 || idx === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              <div className="aspect-w-4 aspect-h-3 h-64 w-full bg-gray-100 relative group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to unsplash if local image is not found
                    const fallbacks = [
                      'https://images.unsplash.com/photo-1544381023-eb16353d20bd?auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1578496479768-c5a4db829b3a?auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1560706240-621f8721c56b?auto=format&fit=crop&q=80'
                    ];
                    (e.target as HTMLImageElement).src = fallbacks[idx];
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium text-lg">{image.alt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
