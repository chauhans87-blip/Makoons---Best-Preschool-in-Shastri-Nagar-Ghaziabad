import { CheckCircle2, ClipboardList, UserCheck, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <ClipboardList size={28} />,
    title: "1. Registration",
    description: "Visit Makoons - Best Preschool in Shastri Nagar Ghaziabad to register your interest.",
    color: "bg-primary-blue",
  },
  {
    icon: <UserCheck size={28} />,
    title: "2. Interaction",
    description: "A brief, informal interaction session with parents and the child to understand your needs.",
    color: "bg-primary-yellow",
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "3. Admission",
    description: "Complete the admission formalities, submit required documents, and welcome to Makoons!",
    color: "bg-green-500",
  }
];

const documents = [
  "Birth Certificate of the child",
  "Aadhar Card of parents and child",
  "Passport size photographs (Child & Parents)",
  "Medical fitness certificate",
  "Previous school report card (if applicable)"
];

const ageCriteria = [
  { group: "Play Group", age: "1.5 to 2.5 Years" },
  { group: "Nursery", age: "2.5 to 3.5 Years" },
  { group: "LKG", age: "3.5 to 4.5 Years" },
  { group: "UKG", age: "4.5 to 5.5 Years" },
  { group: "Day Care", age: "6 months to 8 Years" },
];

export default function Enrollment() {
  return (
    <section id="enrollment" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-primary-blue mb-4 flex items-center justify-center gap-3"
          >
            <GraduationCap size={40} className="text-primary-red" />
            Admissions & Enrollment
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Join the Makoons family. Our enrollment process is designed to be simple, transparent, and welcoming.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Process Steps */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-8">How to Enroll</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white ${step.color} shadow-md`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-blue mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Age Criteria */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-light-grey rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Age Criteria</h3>
              <div className="space-y-3">
                {ageCriteria.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                    <span className="font-semibold text-primary-blue">{item.group}</span>
                    <span className="text-gray-600 bg-white px-3 py-1 rounded-full text-sm shadow-sm">{item.age}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Required Documents */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary-yellow/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Required Documents</h3>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary-yellow flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-primary-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Enrollment Process <GraduationCap size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
