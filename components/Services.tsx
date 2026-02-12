'use client';

import { motion } from 'framer-motion';
import { Target, Code, Database, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Lead Generation & Automation',
    description: 'Cost-effective Facebook data extraction and automated lead nurturing systems. Generate high-quality leads without breaking the bank using proven ROI-focused strategies.',
    features: ['Auto Transport Leads', 'Facebook Data Mining', 'CRM Integration', 'Lead Scoring'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Custom Web Solutions',
    description: 'Modern, responsive web applications built with React and Next.js. From e-commerce platforms to custom dashboards, we deliver scalable solutions.',
    features: ['React/Next.js Development', 'E-commerce Platforms', 'Progressive Web Apps', 'API Integration'],
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Database,
    title: 'Data Extraction & Scraping',
    description: 'Python-powered automation and web scraping solutions. Extract, process, and analyze data at scale to gain competitive advantages.',
    features: ['Web Scraping', 'Data Processing', 'API Development', 'Automation Scripts'],
    color: 'from-green-500 to-blue-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-2">Our Services</h2>
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
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
              
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Let's discuss how we can help you achieve your goals with our proven strategies
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-purple text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
