'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'Secure Shopping Mart',
    category: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with secure payment integration, inventory management, and real-time analytics dashboard.',
    image: '/projects/shopping-mart.jpg',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-500 to-purple-500',
    stats: { users: '10K+', rating: '4.8' }
  },
  {
    title: 'Auto Transport Lead System',
    category: 'Lead Generation',
    description: 'Automated lead generation system for auto transport industry with Facebook integration and intelligent CRM pipeline.',
    image: '/projects/auto-transport.jpg',
    tags: ['Python', 'Facebook API', 'Automation', 'CRM'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-green-500 to-teal-500',
    stats: { leads: '5K+', rating: '4.9' }
  },
  {
    title: 'Data Extraction Dashboard',
    category: 'Web Scraping',
    description: 'Python-powered web scraping dashboard with scheduled data extraction, processing, and visualization capabilities.',
    image: '/projects/data-dashboard.jpg',
    tags: ['Python', 'Scrapy', 'React', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-orange-500 to-red-500',
    stats: { data: '1M+', rating: '5.0' }
  },
  {
    title: 'Real Estate CRM',
    category: 'Custom Software',
    description: 'Complete CRM solution for real estate agencies with lead tracking, property management, and client communication.',
    image: '/projects/crm.jpg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-purple-500 to-pink-500',
    stats: { agents: '500+', rating: '4.7' }
  },
  {
    title: 'Marketing Analytics Tool',
    category: 'SaaS Platform',
    description: 'Advanced analytics platform for tracking marketing campaigns across multiple channels with AI-powered insights.',
    image: '/projects/analytics.jpg',
    tags: ['React', 'Python', 'TensorFlow', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-cyan-500 to-blue-500',
    stats: { campaigns: '2K+', rating: '4.9' }
  },
  {
    title: 'Appointment Booking System',
    category: 'Web Application',
    description: 'Smart booking system with calendar integration, automated reminders, and payment processing for service businesses.',
    image: '/projects/booking.jpg',
    tags: ['Vue.js', 'Node.js', 'Stripe', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-indigo-500 to-purple-500',
    stats: { bookings: '50K+', rating: '4.8' }
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-2">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects delivering real results for our clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-7xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} className="text-gray-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Github size={20} className="text-gray-900" />
                  </a>
                </div>

                {/* Stats badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold">{project.stats.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    {Object.entries(project.stats)[0][1]} {Object.entries(project.stats)[0][0]}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
