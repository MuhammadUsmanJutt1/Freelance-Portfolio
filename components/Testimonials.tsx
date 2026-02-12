'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TransportPro',
    company: 'Auto Transport Company',
    content: 'The lead generation system they built increased our qualified leads by 300%. The ROI has been incredible, and the automation saves us hours every day.',
    rating: 5,
    image: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, ShopEase',
    company: 'E-commerce Startup',
    content: 'Outstanding web development work! They delivered a beautiful, fast e-commerce platform that our customers love. Sales increased by 150% in the first month.',
    rating: 5,
    image: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'DataInsights Inc',
    content: 'Their data extraction tools transformed how we gather market intelligence. What used to take days now takes minutes. Highly professional team!',
    rating: 5,
    image: 'ER',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-2">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 150,
                damping: 15
              }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <Quote className="absolute top-6 right-6 text-primary opacity-20" size={48} />
              </motion.div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2 + i * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2 + 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ rotate: 360 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold"
                >
                  {testimonial.image}
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
