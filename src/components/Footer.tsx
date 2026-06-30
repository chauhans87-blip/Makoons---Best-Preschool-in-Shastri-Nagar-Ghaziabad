import { Facebook, Instagram, Twitter, Youtube, Star, Cloud, Music, Heart, Smile, Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white pt-20 pb-8 relative overflow-hidden">
      
      {/* Floating Animations Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div 
          className="absolute top-10 left-[10%] text-primary-yellow/30 animate-float"
          style={{ animationDuration: '5s', animationDelay: '0s' }}
        >
          <Star size={48} />
        </div>
        <div 
          className="absolute top-20 left-[30%] text-white/20 animate-float"
          style={{ animationDuration: '7s', animationDelay: '1s' }}
        >
          <Cloud size={64} />
        </div>
        <div 
          className="absolute top-12 left-[50%] text-primary-red/20 animate-float"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        >
          <Music size={40} />
        </div>
        <div 
          className="absolute top-16 left-[70%] text-primary-green/30 animate-float"
          style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}
        >
          <Heart size={32} />
        </div>
        <div 
          className="absolute top-8 left-[90%] text-primary-yellow/20 animate-float"
          style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}
        >
          <Sun size={56} />
        </div>

        <div 
          className="absolute top-1/2 left-[5%] text-white/10 animate-float"
          style={{ animationDuration: '6.5s', animationDelay: '0.2s' }}
        >
          <Cloud size={80} />
        </div>
        <div 
          className="absolute top-1/2 left-[40%] text-primary-yellow/20 animate-float"
          style={{ animationDuration: '5s', animationDelay: '2.5s' }}
        >
          <Smile size={48} />
        </div>
        <div 
          className="absolute top-[45%] left-[80%] text-primary-red/20 animate-float"
          style={{ animationDuration: '7.5s', animationDelay: '1.2s' }}
        >
          <Star size={40} />
        </div>

        <div 
          className="absolute bottom-20 left-[20%] text-primary-green/20 animate-float"
          style={{ animationDuration: '5.2s', animationDelay: '0.8s' }}
        >
          <Music size={48} />
        </div>
        <div 
          className="absolute bottom-32 left-[60%] text-white/20 animate-float"
          style={{ animationDuration: '6s', animationDelay: '1.8s' }}
        >
          <Cloud size={56} />
        </div>
        <div 
          className="absolute bottom-16 left-[85%] text-primary-yellow/30 animate-float"
          style={{ animationDuration: '4.8s', animationDelay: '0.3s' }}
        >
          <Heart size={40} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="Makoons Logo" className="w-12 h-12 object-contain rounded-full bg-white shadow-sm" />
              <span className="font-display font-bold text-xl text-white">
                Makoons - Best Preschool in Shastri Nagar Ghaziabad
              </span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Makoons - Best Preschool in Shastri Nagar Ghaziabad provides a joyful, safe, and activity-based learning environment where children learn through exploration, creativity, and play.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-primary-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-primary-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-primary-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-primary-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li><a href="#home" className="hover:text-primary-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-yellow transition-colors">About Us</a></li>
              <li><a href="#facilities" className="hover:text-primary-yellow transition-colors">School Facilities</a></li>
              <li><a href="#gallery" className="hover:text-primary-yellow transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-primary-yellow transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-b border-white/10 pb-2">Classes</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li><a href="#programs" className="hover:text-primary-yellow transition-colors">Playgroup</a></li>
              <li><a href="#programs" className="hover:text-primary-yellow transition-colors">Nursery</a></li>
              <li><a href="#programs" className="hover:text-primary-yellow transition-colors">Junior KG</a></li>
              <li><a href="#programs" className="hover:text-primary-yellow transition-colors">Senior KG</a></li>
              <li><a href="#programs" className="hover:text-primary-yellow transition-colors">Daycare</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-b border-white/10 pb-2">Newsletter</h4>
            <p className="text-blue-100 text-sm mb-4">Subscribe to our newsletter to get the latest updates and news.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="bg-white/10 border-none outline-none text-white px-4 py-2 rounded-l-lg w-full text-sm placeholder-blue-200" required />
              <button type="submit" className="bg-primary-yellow text-primary-blue font-bold px-4 py-2 rounded-r-lg text-sm hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Makoons - Best Preschool in Shastri Nagar Ghaziabad. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
