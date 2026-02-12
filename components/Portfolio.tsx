'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Secure Shopping Mart',
    category: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with secure payment integration, inventory management, and real-time analytics.',
    image: '/projects/shopping-mart.jpg',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Auto Transport Lead System',
    category: 'Lead Generation',
    description: 'Automated lead generation system for auto transport industry with Facebook integration and CRM pipeline.',
    image: '/projects/auto-transport.jpg',
    tags: ['Python', 'Facebook API', 'Automation', 'CRM'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Data Extraction Dashboard',
    category: 'Web Scraping',
    description: 'Python-powered web scraping dashboard with scheduled data extraction and visualization capabilities.',
    image: '/projects/data-dashboard.jpg',
    tags: ['Python', 'Scrapy', 'React', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
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
              className="glassmorphism rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
