/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Methodology from './components/Methodology';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Enrollment from './components/Enrollment';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen relative font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Programs />
      <Facilities />
      <Methodology />
      <Enrollment />
      <Gallery />
      <Testimonials />
      <Stats />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}
