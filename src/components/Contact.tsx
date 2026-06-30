import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-sm overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            
            <div className="p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-blue mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-yellow/20 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue text-lg">Our Location</h4>
                    <p className="text-gray-600">Makoons - Best Preschool in Shastri Nagar Ghaziabad,<br/>sd-32, Shastri Nagar, Ghaziabad, India</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-yellow/20 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue text-lg">Phone Numbers</h4>
                    <p className="text-gray-600">+91 8826012578</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-yellow/20 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue text-lg">Email Address</h4>
                    <p className="text-gray-600">admissions@makoons.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-yellow/20 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue text-lg">Working Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM to 6:00 PM <br/>Sunday Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+918826012578" className="flex-1 min-w-[140px] bg-primary-blue text-white text-center font-semibold py-3 px-6 rounded-xl hover:bg-[#152740] transition-colors">Call Us</a>
                <a href="https://wa.me/918826012578" target="_blank" rel="noreferrer" className="flex-1 min-w-[140px] bg-green-500 text-white text-center font-semibold py-3 px-6 rounded-xl hover:bg-green-600 transition-colors">WhatsApp</a>
                <a href="https://maps.google.com/?q=sd-32+Shastri+Nagar+Ghaziabad+India" target="_blank" rel="noreferrer" className="w-full bg-gray-100 text-primary-blue text-center font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors">Get Directions</a>
              </div>
            </div>

            <div className="bg-gray-200 min-h-[400px] lg:min-h-full w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.702742917711!2d77.456!3d28.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzI0LjAiTiA3N8KwMjcnMjEuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Makoons - Best Preschool in Shastri Nagar Ghaziabad Location"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
