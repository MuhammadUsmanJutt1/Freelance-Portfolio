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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider inline-block mb-4"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">What We </span>
            <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Whether you need a new website, a mobile app, or advanced messaging services, we're here to help
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
            >
              <motion.div 
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.15 + featureIndex * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <CheckCircle2 size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-12 md:p-16 max-w-4xl mx-auto shadow-lg border border-purple-100">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Scale Your Business?</h3>
            <p className="text-gray-600 mb-8 text-lg font-light max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our proven strategies
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-purple text-white px-10 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-all shadow-xl hover:shadow-2xl"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
