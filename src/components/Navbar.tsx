import { useState, useEffect } from 'react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Classes', href: '#programs' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Enrollment', href: '#enrollment' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 overflow-x-auto no-scrollbar ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 min-w-max">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo.jpg" alt="Makoons Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full bg-white shadow-sm flex-shrink-0" />
            <span className={`font-display font-bold text-lg sm:text-xl whitespace-nowrap ${scrolled ? 'text-[#1D3557]' : 'text-white'}`}>
              Makoons - Best Preschool in Shastri Nagar Ghaziabad
            </span>
          </div>
          
          <div className="flex flex-shrink-0 items-center space-x-4 xl:space-x-6 pr-4">
            {links.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium whitespace-nowrap hover:text-[#FF6B35] transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
