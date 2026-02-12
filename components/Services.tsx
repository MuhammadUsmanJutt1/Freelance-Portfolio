'use client';

import { motion } from 'framer-motion';
import { Target, Code, Database } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Lead Generation & Automation',
    description: 'Cost-effective Facebook data extraction and automated lead nurturing systems. Generate high-quality leads without breaking the bank using proven ROI-focused strategies.',
    features: ['Auto Transport Leads', 'Facebook Data Mining', 'CRM Integration', 'Lead Scoring'],
  },
  {
    icon: Code,
    title: 'Custom Web Solutions',
    description: 'Modern, responsive web applications built with React and Next.js. From e-commerce platforms to custom dashboards, we deliver scalable solutions.',
    features: ['React/Next.js Development', 'E-commerce Platforms', 'Progressive Web Apps', 'API Integration'],
  },
  {
    icon: Database,
    title: 'Data Extraction & Scraping',
    description: 'Python-powered automation and web scraping solutions. Extract, process, and analyze data at scale to gain competitive advantages.',
    features: ['Web Scraping', 'Data Processing', 'API Development', 'Automation Scripts'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
