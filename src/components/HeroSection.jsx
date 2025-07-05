import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiShield, FiUsers, FiTrendingUp } = FiIcons;

const HeroSection = ({ onGetAccess }) => {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Finally! Turn Your Retirement Savings Into{' '}
              <span className="text-gold-500">Weekly Paychecks</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Learn the Proven Educational System That Generates $1,000-$5,000+ Weekly 
              Without Touching Your Principal
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiShield} className="text-sage-500 text-lg" />
                <span className="text-sm font-medium">90-Day Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} className="text-sage-500 text-lg" />
                <span className="text-sm font-medium">20+ Successful Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiTrendingUp} className="text-sage-500 text-lg" />
                <span className="text-sm font-medium">Educational Focus</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={onGetAccess}
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Instant Access - $997
            </motion.button>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-navy-800 rounded-lg border border-gold-500/20">
              <p className="text-sm text-gray-300">
                <strong className="text-gold-500">Educational Disclaimer:</strong> This program is for educational purposes only and does not constitute financial, investment, tax, or legal advice. Past performance does not guarantee future results.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-xl p-8 shadow-2xl">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <SafeIcon icon={FiPlay} className="text-4xl text-gold-500 mb-4 mx-auto" />
                  <p className="text-lg font-medium mb-2">Watch: 2-Minute Overview</p>
                  <p className="text-sm text-gray-400">
                    Learn how this educational system works
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">
                  "From struggling with traditional retirement advice to generating consistent weekly income through education"
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-sage-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Educational Only
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gold-500 text-navy-900 px-4 py-2 rounded-full text-sm font-bold">
              90-Day Guarantee
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;