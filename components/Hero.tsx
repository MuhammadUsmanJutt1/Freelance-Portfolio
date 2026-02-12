'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50 -z-10" />
      
      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full blur-3xl opacity-50"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-50"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-primary mb-6 shadow-sm"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-sm font-medium">Digital Solutions That Scale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent">
              Revolutionizing Lead Gen
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-light via-primary to-gray-900 bg-clip-text text-transparent">
              & Digital Infrastructure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Helping businesses scale with low-budget, high-impact strategies.
            Data-driven lead generation meets cutting-edge web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-purple text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-md"
            >
              View Our Work
            </button>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="glassmorphism rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">300%</h3>
              <p className="text-gray-600">Average ROI Increase</p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
